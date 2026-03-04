import subprocess
import re
import os
import xml.etree.ElementTree as ET
import xml.dom.minidom as minidom


script_dir = os.path.dirname(os.path.abspath(__file__))
os.chdir(script_dir)

def prettify(elem):
    """Return a pretty-printed XML string for the Element."""
    rough_string = ET.tostring(elem, 'utf-8')
    parsed = minidom.parseString(rough_string)
    return parsed.toprettyxml(indent="  ")

def invert_rotation(transform_str):
    """Inverts the angle in a rotate(...) inside an SVG transform attribute."""
    match = re.search(r'rotate\((-?\d+(?:\.\d+)?),?[^)]*\)', transform_str)
    if match:
        original = match.group(0)
        angle = float(match.group(1))
        inverted = original.replace(str(angle), str(-angle), 1)
        return transform_str.replace(original, inverted)
    return transform_str

def update_transform_translate(transform_str, new_tx, new_ty):
    """Replace or add translate(...) in an SVG transform attribute."""
    # Replace existing translate(...) with new translate values
    new_translate = f"translate({new_tx},{new_ty})"
    if "translate" in transform_str:
        transform_str = re.sub(r'translate\([^)]+\)', new_translate, transform_str)
    else:
        transform_str = f"{new_translate} {transform_str}".strip()
    return transform_str

def transform_svg(fileName, lineWidth, InkscapePath):
    tree = ET.parse(fileName)
    root = tree.getroot()

    ET.register_namespace('', "http://www.w3.org/2000/svg")

    # Remove title and outer <g> if present
    for elem in root.findall('.//{http://www.w3.org/2000/svg}title'):
        root.remove(elem)

    outer_g = root.find('.//{http://www.w3.org/2000/svg}g')
    if len(list(outer_g)) == 1 and outer_g[0].tag.endswith('g'):
        inner_g = outer_g[0]
        root.remove(outer_g)
        root.append(inner_g)
    else:
        inner_g = outer_g

    originX = 0
    originY = 0

    # Format <path> "d" attribute and make stroke red + thin
    all_paths = inner_g.findall('{http://www.w3.org/2000/svg}path')
    path_elem = all_paths[0]
    if path_elem is not None:
        d = path_elem.attrib['d']
        # Remove final 'Z' if present to avoid closing the path
        if d.strip().endswith('Z'):
            d = d.strip()[:-1].strip()
        # Format for multiline readability
        d_parts = d.split("\n")
        formatted_d = "\n        ".join([part.strip() for part in d_parts if part.strip()])
        path_elem.attrib['d'] = "\n        " + formatted_d
        path_elem.set('stroke', 'red')
        path_elem.set('stroke-width', lineWidth)

                # Extract first M x y to add a line
        match = re.search(r'M\s+([\d\.\-eE]+)\s+([\d\.\-eE]+)', d)
        if match:
            originX = float(match.group(1))
            originY = float(match.group(2))

    # Update styling for the second <path> if it exists
    second_path = all_paths[1]
    second_path.set('stroke', 'black')
    second_path.set('stroke-width', lineWidth)
    
    
        # Process inner groups
    for g in inner_g.findall('.//{http://www.w3.org/2000/svg}g'):
        for rect in g.findall('{http://www.w3.org/2000/svg}rect'):
            if rect.attrib.get('fill', '') == '#F3F3F3':
                g.remove(rect)

        for subg in g.findall('{http://www.w3.org/2000/svg}g'):
            g.remove(subg)

        rect_elem = g.find('{http://www.w3.org/2000/svg}rect')
        if rect_elem is not None:
            transform_attr = g.attrib.get('transform', '')
            transform_attr = invert_rotation(transform_attr)
            transform_attr = update_transform_translate(transform_attr, originX, originY)
            g.set('transform', transform_attr)

            # Convert rect to path
            x = float(rect_elem.attrib.get('x', '0'))
            y = float(rect_elem.attrib.get('y', '0'))
            width = float(rect_elem.attrib['width'])
            height = float(rect_elem.attrib['height'])

            d = f"M {x} {0} L {x - width} {y} L {x - width} {y + height} L {x} {y + height} "

            g.remove(rect_elem)
            g.append(ET.Element('path', {
                'd': d,
                'fill': 'none',
                'stroke': 'red',
                'stroke-width': lineWidth
            }))

            g.append(ET.Element('line', {
                'x1': '0', 'y1': '0',
                'x2': '0', 'y2': str(height),
                'stroke': 'black',
                'stroke-width': lineWidth
            }))


    with open(fileName, "w", encoding="utf-8") as f:
        f.write(prettify(root))

        # Convert SVG to PDF (requires Inkscape installed)

    # Convert SVG to PDF (requires Inkscape installed)
    pdfName = os.path.splitext(fileName)[0] + ".pdf"
    subprocess.run([
        InkscapePath,
        fileName,
        "--export-type=pdf",
        "--export-filename=" + pdfName
    ])

InkscapePath = r"C:\Program Files\Inkscape\bin\inkscape.exe"
lineWidth = '1px' #set to '0.1px' for hairline thin
transform_svg("Cone(36, 120, 80).svg", lineWidth, InkscapePath)