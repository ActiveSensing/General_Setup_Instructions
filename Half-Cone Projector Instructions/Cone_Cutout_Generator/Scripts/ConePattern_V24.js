var aConeText = [],
    diamTop, diamBase, coneHeight, i, slantHeight, holesLines = "none";

function Setup() {
    OverrideRect();
    Calculate();
    SetAnimFrame();
    SetImperialSelect();
    SetNumeric();
    var b = $("cnvsTemplate").getContext("2d"),
        d = "Default Font;Abadi MT Condensed Light;Aharoni;Aldhabi;American Typewriter;Andale Mono;Andalus;Angsana New;AngsanaUPC;Aparajita;Apple Chancery;Arabic Typesetting;Arial;Arial Black;Arial Nova;Baskerville;Batang;BatangChe;Big Caslon;Book Antiqua;Browallia New;BrowalliaUPC;Brush Script;Calibri;Calibri Light;Calisto MT;Cambria;Cambria Math;Candara;Capitals;Century Gothic;Charcoal;Comic Sans MS;Consolas;Constantia;Copperplate;Copperplate Gothic Bold;Copperplate Gothic Light;Corbel;Cordia New;CordiaUPC;Courier New;DFKai - SB;DaunPenh;David;Default Font;Dengxian;DilleniaUPC;DokChampa;Dotum;DotumChe;Ebrima;Estrangelo Edessa;EucrosiaUPC;Euphemia;FangSong;Fantasy;FrankRuehl;Franklin Gothic Medium;FreesiaUPC;Futura;Gabriola;Gadget;Gadugi;Gautami;Georgia;Georgia Pro;Gill Sans;Gill Sans Nova;Gisha;Gulim;GulimChe;Gungsuh;GungsuhChe;Herculanum;Hoefler Text;Hoefler Text Ornaments;Impact;IrisUPC;Iskoola Pota;JasmineUPC;Javanese Text;KaiTi;Kalinga;Kartika;Khmer UI;KodchiangUPC;Kokila;Lao UI;Latha;Leelawadee;Leelawadee UI;Levenim MT;LilyUPC;Lucida Console;Lucida Grande;Lucida Handwriting Italic;Lucida Sans Unicode;MS Gothic;MS Mincho;MS PGothic;MS PMincho;MS UI Gothic;MV Boli;Malgun Gothic;Mangal;Manny ITC;Marker Felt;Marlett;Meiryo;Meiryo UI;Microsoft Himalaya;Microsoft JhengHei;Microsoft JhengHei UI;Microsoft New Tai Lue;Microsoft PhagsPa;Microsoft Sans Serif;Microsoft Tai Le;Microsoft Uighur;Microsoft YaHei;Microsoft YaHei UI;Microsoft Yi Baiti;MingLiU;MingLiU - ExtB;MingLiU_HKSCS;MingLiU_HKSCS - ExtB;Minion Web;Miriam;Miriam Fixed;Mongolian Baiti;MoolBoran;Myanmar Text;NSimSun;Narkisim;Neue Haas Grotesk Text Pro;News Gothic MT;Nirmala UI;Nyala;Optima;Osaka;PMingLiU;PMingLiU - ExtB;Palatino;Palatino Linotype;Papyrus;Plantagenet Cherokee;Raavi;Rockwell Nova;Rod;Sakkal Majalla;Sand;Sanskrit Text;Segoe MDL2 Assets;Segoe Print;Segoe Script;Segoe UI Emoji;Segoe UI Historic;Segoe UI Symbol;Segoe UI v5.00;Segoe UI v5.01;Segoe UI v5.27;Segoe UI v5.35;Shonar Bangla;Shruti;SimHei;SimKai;SimSun;SimSun - ExtB;Simplified Arabic;Sitka Banner;Sitka Display;Sitka Heading;Sitka Small;Sitka Subheading;Sitka Text;Skia;Sylfaen;Symbol;Tahoma;Techno;Textile;Times;Times New Roman;Traditional Arabic;Trebuchet MS;Tunga;Urdu Typesetting;Utsaah;Vani;Verdana;Verdana Pro;Vijaya;Vrinda;Webdings;Westminster;Wingdings;Yu Gothic;Yu Gothic UI;Yu Mincho;Zapf Dingbats;Zapfino".split(";"),
        e = [],
        f = $("ddFonts");
    for (i = 0; i < d.length; i++) {
        b.font = "17px '" + d[i] + "'";
        var t = b.measureText("Dragoni-qm123_X./").width; - 1 === e.indexOf(t) && (e.push(t), f.add(new Option(d[i])))
    }
    f.selectedIndex = 2
}

function Calculate(b = !1, d = !1) {
    holesLines = document.querySelector('input[name="rblMarks"]:checked').value;
    var e = true;
    var f = 1;
    isValid = !0;
    diamTop = parseCheck("_txtTopWidth", "Top Width", 0, 1999);
    diamBase = parseCheck("_txtBaseWidth", "Base Width", diamTop + 1, 2E3);
    coneHeight = parseCheck("_txtHeight", "Height", 10, 2E3);
    if (isValid) {
        var t = $("cbDims").checked,
            k = !$("cbNoBorder").checked || 1 < f,
            l = parseInt($("ddPrecision").value),
            z = parseFloat($("ddHoles").value),
            p = parseFloat($("ddCols").value);
        $("rngTopWidth").min = 0;
        $("rngTopWidth").max = Math.min(diamBase - 1, 999);
        $("rngTopWidth").value = diamTop;
        $("rngBaseWidth").min = Math.min(1E3, diamTop + 10);
        $("rngBaseWidth").max = 1E3;
        $("rngBaseWidth").value = diamBase;
        $("rngHeight").value = coneHeight;
        0 === diamTop && (diamTop = .001);
        var B = .5 * diamTop / (.5 * (diamBase - diamTop)),
            c = Math.sqrt(coneHeight * coneHeight + Math.pow(.5 * (diamBase - diamTop), 2)),
            m = c * B,
            v = c + c * B;
        slantHeight = v - m;
        var w = Math.PI * diamTop / (Math.PI * m * 2) * RAD360,
            R = w,
            E = m - m * Math.cos(w / 2);
        1 < f ? (w /= f, $("tblHolesLines").style.display = "none", $("tblText").style.display = "none") : ($("tblHolesLines").style.display = "inline-block", $("tblText").style.display = "inline-block");
        var x = $("cbTab").checked;
        var q = w / 2;
        var A = m - (m - Math.cos(q) * m);
        B = Math.atan(coneHeight /
            ((diamBase - diamTop) / 2)) / RAD;
        c = diamTop / 2;
        var g = diamBase / 2,
            h = Math.pow(g, 2) + Math.pow(c, 2),
            S = Math.PI * (slantHeight * (g + c) + h) * .01,
            T = Math.PI * slantHeight * (g + c) * .01,
            U = Math.PI * Math.pow(diamTop / 2, 2) * .01,
            V = Math.PI * Math.pow(diamBase / 2, 2) * .01,
            G = Math.PI * diamTop,
            H = Math.PI * diamBase,
            W = 1 / 3 * Math.PI * coneHeight * (h + g * c),
            K = 2 * (w < RAD180 ? v * Math.sin(q) : v),
            J = v - Math.cos(q) * m;

        c = 96 / 25.4;
        var L = $("cbFullScale").checked;
        g = Math.min(K, J);
        var M = 1414 >= Math.max(K, J) && 1E3 >= g;
        M && L || (c = 400 / Math.max(diamBase, coneHeight), L = !1);
        $("cbFullScale").disabled =
            M ? !1 : !0;
        var C = K * c;
        g = C / 2;
        var u = h = 0;
        w > RAD180 && (h = Math.sin((w - RAD180) / 2) * slantHeight, J += h, u = h * c);
        var n = J * c,
            D = x ? 50 : 20;
        h = $("cnvsTemplate");
        h.width = C + 2 * D;
        h.height = n + 2 * D;
        var a = d ? new C2S(h.width, h.height) : h.getContext("2d");
        a.save();
        a.translate(D, D + u);
        k && (a.beginPath(), a.arc(g, -A * c, m * c, RAD90 + q, RAD90 - q, !0), a.arc(g, -A * c, v * c, RAD90 - q, RAD90 + q, !1), a.closePath(), a.stroke());
        if ($("cbToggleTextIn").checked && 1 === f) {
            k = $("txtText").value;
            var y = parseFloat($("rngFontSize").value);
            u = w * parseFloat($("rngTextHoriz").value);
            var r = slantHeight * parseFloat($("rngTextVert").value);
            r = Math.min(v * c - y, (m + r) * c);
            y = ($("cbBold").checked ? "Bold " : "") + y + "px '" + $("ddFonts").value + "'";
            var F = $("cbTextOutline").checked,
                I = -A * c;
            b && 0 < k.length ? (b = new ConeText(k, u, r, I, y, F, $("clrPick").value), aConeText.push(b), $("txtText").value = "") : DrawText(a, k, u, r, g, I, y, F, $("clrPick").value);
            if (0 < aConeText.length) {
                for (i = 0; i < aConeText.length; i++) b = aConeText[i], DrawText(a, b.txt, b.textRangle, b._radText, g, b._transY, b.fnt, b.isOutline, b.fillClr);
                $("btnRemoveText").style.visibility =
                    "visible"
            } else $("btnRemoveText").style.visibility = "hidden"
        }
        x && 1 === f && (u = g + Math.cos(RAD90 - q) * m * c, r = -(A * c) + Math.sin(RAD90 - q) * m * c, a.save(), a.translate(u, r), a.rotate(-q), a.globalAlpha = .6, a.fillStyle = "#F3F3F3", a.fillRect(0, 0, 8 * c, slantHeight * c), a.strokeRect(0, 0, 8 * c, slantHeight * c), a.fillStyle = "#000", a.globalAlpha = 1, a.font = "10px Verdana", a.translate(18, slantHeight / 2 * c), a.rotate(RAD90), a.textBaseline = "middle", a.textAlign = "center", a.fillText("Overlapping Join TAB", 0, 0), a.restore());
        1 < f && (a.font = "16px Verdana", a.textAlign = "center", a.fillText("NOT FULL TEMPLATE", g, n / 2), a.fillText("1 OF " + f + " SHOWN", g, n / 2 + 40));
        $("spnOverlap").innerHTML = "";
        if ("none" != holesLines && 1 === f)
        {
            isValid = !0;
            k = parseCheck("_txtHoleDiam", "Hole Diameter", 0, 25);
            if (!isValid) return;
            b = w / z;
            u = k / 2;
            x = [];
            if (e) {
                x = $("txtRows").value.split(",");
                for (i = 0; i < x.length; i++)
                    if (isNaN(x[i]))
                        {
                            alert("Error entering Multiple Row Heights.\n\nEnter comma separated list of row heights.\n\neg: 10,20,30,40,50");
                            return
                        }
                    0 < x.length && (x = x.map(function(X) { return Number(RoundTo(X, 1)) } ))
            }
            else if (e = parseFloat($("ddRows").value), "holes" === holesLines)
                for (y = (slantHeight - e * k) / (e + 1), r = y + k, k = y + k / 2, x.length = 0, x.push(k), i = 1; i < e; i++) k += r, x.push(k);
            else
                for (x.length = 0, k = r = slantHeight / e, i = 0; i < e; i++) x.push(k), k += r;
            y = $("ddHoleType").value;
            F = u * c;
            for (k = 0; k < x.length; k++)
            {
                // FENK YONI !!!
                Apex = 2 * ((Math.PI / 2) - (B * (Math.PI / 180))) * (180 / Math.PI);
                FullVirtualSlantHeight = (diamBase / 2) / Math.cos(B * (Math.PI / 180));
                LineVirtualSlantHeight = FullVirtualSlantHeight-(x[k] / 2) / Math.cos(B * (Math.PI / 180));


                
                console.log("diamBase", diamBase);
                console.log("radius", (x[k]/2));
                console.log("B", B);
                console.log("c", c);


                console.log("slantHeight", slantHeight);
                console.log("FullVirtualSlantHeight", FullVirtualSlantHeight);
                console.log("LineVirtualSlantHeight", LineVirtualSlantHeight);


                if (I = v * c - LineVirtualSlantHeight * c, e = RAD90 - q + b / 2, "linesH" === holesLines) {
                        a.beginPath();
                        a.arc(g, -A * c, I, RAD90 + q, RAD90 - q, !0);
                        a.strokeStyle = "Black";
                        a.stroke();
                }
                else
                    for (i = 0; i < z; i++) {
                        u = g + Math.cos(e) * I;
                        r = -(A * c) + Math.sin(e) * I;
                        if (-1 < y.indexOf("sides")) {
                            var O = parseInt(y),
                                P = 360 / O * RAD,
                                N = e - P / 2;
                            a.beginPath();
                            for (var Q = 0; Q < O; Q++) N += P, a.lineTo(F * Math.cos(N) + u, F * Math.sin(N) + r);
                            a.closePath();
                            a.stroke()
                        }
                        else
                            a.beginPath(), a.arc(u, r, F, 0, RAD360, !1), a.stroke(), "center" === y && (5 < F ? (a.save(), a.translate(u, r), a.rotate(e), a.beginPath(), a.moveTo(4, 0), a.lineTo(-4, 0), a.moveTo(0, -4), a.lineTo(0, 4), a.stroke(), a.restore()) : 2 < F && (a.beginPath(), a.arc(u, r, .5, 0, RAD360, !1), a.stroke()));
                        e += b
                    }
            }
        }
        if ($("cbVertLines").checked && 1 === f) {
            b = w / p;
            e = RAD90 - q + b;
            a.beginPath();
            for (i = 0; i < p - 1; i++) u = g + Math.cos(e) * v * c, r = -(A * c) + Math.sin(e) * v * c, a.moveTo(u, r), u = g + Math.cos(e) * m * c, r = -(A * c) + Math.sin(e) * m * c, a.lineTo(u, r), e += b;
            a.strokeStyle = "Blue";
            a.stroke();
            4 < p && (z = (G + G / p) / Math.PI, e = (H + H / p) / Math.PI, b = Math.sqrt(Math.pow(slantHeight, 2) - Math.pow((e - z) / 2, 2)), $("spnOverlap").innerHTML = FormatMetric("<br><br>Enter " + Math.round(z) + " Top Width, " + Math.round(e) + " Base Width, " + Math.round(b) + " Height with " + (p + 1) + " Increments and overlap 1 full increment to form current cone."))
        }
        a.fillStyle = "#000";
        t && 1 === f && (a.font = "11px Verdana", a.textBaseline = "middle", a.save(), a.translate(g, E * c + 16), a.rotate(RAD90), a.textAlign = "left", a.fillText(" \u2190 Radius " + RoundTo(m, l), 0, 0), a.restore(), a.save(), a.translate(g, E * c + slantHeight * c), a.rotate(RAD90), a.textAlign = "right", a.fillText("\u2190 Radius " + RoundTo(v, l) + " ", 0, 0), a.restore(), a.textAlign = "center", a.fillText("Outer Arc Length \u21ba " + RoundTo(H, l), g, E * c + slantHeight * c + 10), a.fillText("Inner Arc Length \u21ba " + RoundTo(G, l), g, E * c + 8), t = (m + (v - m) / 2) * c,
            E = g + t * Math.sin(q), z = -A * c + t * Math.cos(q), a.save(), a.translate(E, z), a.rotate(RAD90 - q), a.textBaseline = "bottom", a.fillText("\u2190 " + RoundTo(slantHeight, l) + " \u2192", 0, 0), a.restore(), E = g - t * Math.sin(q), z = -A * c + t * Math.cos(q), a.save(), a.translate(E, z), a.rotate(RAD270 + q), a.textBaseline = "bottom", a.fillText("\u2190 " + RoundTo(slantHeight, l) + " \u2192", 0, 0), a.restore());
        a.restore();
        L || (a.font = "24px Verdana", a.globalAlpha = .3, a.textBaseline = "middle", a.textAlign = "center", a.fillText("NOT FULL SCALE", h.width / 2, .75 * h.height),
            M || (a.font = "12px Verdana", a.fillText("Diagram too large", h.width / 2, .8 * h.height)));
        $("cbBoundingRect").checked && (a.globalAlpha = 1, a.strokeStyle = "Silver", a.strokeRect(D, D, C, n), a.font = "12px Verdana", a.textAlign = "center", a.fillText("\u2190 " + RoundTo(K, l) + " \u2192", h.width / 2, D - 6), a.save(), a.translate(D - 12, n / 2 + D / 2), a.rotate(RAD90), a.fillText("\u2190 " + RoundTo(J, l) + " \u2192", 0, 0), a.restore());
        d && (_SVG(a.getSerializedSvg()), Calculate(!1, !1));
        $("cbMirror").checked ? h.style.transform = "scale(-1, 1)" + ($("cbInvertText").checked ?
            " rotate(180deg)" : "") : h.style.transform = $("cbInvertText").checked ? " rotate(180deg)" : "";
        c = L ? _GetPageFit(h.width, h.height) : "Not Full Scale";
        h.title = c;
        $("spnPageSize").innerHTML = c;
        d = "";
        c = "<sup>1</sup>&#x2044;<sub>";
        1 < f && (c += f + "</sub>", d = "NOT FULL TEMPLATE SHOWN<br><br>");
        d += "Cone Side Surface Area " + RoundTo(T, 2) + " cm&sup2; (No top or base)<br>Cone Total Surface Area " + RoundTo(S, 2) + " cm&sup2;<br>Cone Volume " + RoundTo(.001 * W, 2) + " cm&sup3;<br>Cone Top Circle Area " + RoundTo(U, 2) + " cm&sup2;<br>Cone Base Circle Area " +
            RoundTo(V, 2) + " cm&sup2;<br>Cone Top Circle Circumference " + Math.round(G) + "<br>Cone Base Circle Circumference " + Math.round(H);
        $("spnRes1").innerHTML = FormatMetric(d);
        d = "FULL Template Arc Angle " + RoundTo(R / RAD, 2) + " &deg;";
        d += "<br>Template Outer (Base) Radius " + RoundTo(v, l) + "<br>Template Inner (Top) Radius " + RoundTo(m, l);
        1 < f && (d += "<br>" + c + " Template Segment Arc Angle " + RoundTo(w / RAD, 2) + " &deg;");
        d += "<br>" + (1 < f ? c : "") + " Template Inner (Top) Arc Length " + RoundTo(G / f, l);
        d += "<br>" + (1 < f ? c : "") + " Template Outer (Base) Arc Length " +
            RoundTo(H / f, l);
        $("cbVertLines").checked && (d += "<br>Each of " + p + " Segments Inner (Top) Arc Length " + RoundTo(G / p, l), d += "<br>Each of " + p + " Segments Outer (Base) Arc Length " + RoundTo(H / p, l));
        $("spnRes2").innerHTML = FormatMetric(d);
        h = $("cnvsProfile");
        diamBase > coneHeight ? (C = 160, c = C / diamBase, n = coneHeight * c) : (n = 160, c = n / coneHeight, C = diamBase * c);
        h.width = C + 40;
        h.height = n;
        g = C / 2;
        v = g - diamTop / 2 * c;
        f = v + diamTop * c;
        p = g + diamBase / 2 * c;
        m = g - diamBase / 2 * c;
        h.height = n + 50;
        a = h.getContext("2d");
        a.save();
        a.translate(20, 30);
        a.beginPath();
        a.moveTo(v, 0);
        a.lineTo(f, 0);
        a.lineTo(p, n);
        a.lineTo(m, n);
        a.closePath();
        w = a.createLinearGradient(0, 0, C, 0);
        w.addColorStop(0, "#BCBCBC");
        w.addColorStop(.5, "white");
        w.addColorStop(1, "#BCBCBC");
        a.fillStyle = w;
        a.fill();
        a.strokeStyle = "silver";
        a.stroke();
        $("cbProfileDims").checked && (a.beginPath(), a.moveTo(Pa(v), -20.5), a.lineTo(Pa(v), .5), a.moveTo(Pa(f), -20.5), a.lineTo(Pa(f), .5), e = (90 - B) * RAD, a.lineTo(f + 20 * Math.cos(e), -(20 * Math.sin(e))), a.moveTo(.5, .5), a.lineTo(-20.5, .5), a.moveTo(Pa(m) - 20.5, Pa(n)), a.lineTo(Pa(m),
            Pa(n)), a.lineTo(Pa(m), Pa(n) + 20.5), a.moveTo(Pa(p), Pa(n) + 20.5), a.lineTo(Pa(p), Pa(n)), a.lineTo(p + 20 * Math.cos(e), n - 20 * Math.sin(e)), a.stroke(), a.fillStyle = "#000", a.font = "12px Verdana", a.textAlign = "center", d = "\u2190 " + RoundTo(diamTop, l) + "\u2192", p = a.measureText(d).width, diamTop * c > p ? a.fillText(d, g, -6) : (a.fillText(RoundTo(diamTop, l), g, -16), a.fillText("\u27f7", g, -6)), a.fillText("\u2190 " + RoundTo(diamBase, l) + "\u2192", g, n + 14), a.save(), a.translate(-12, n / 2), a.rotate(RAD90), a.fillText("\u2190 " + RoundTo(coneHeight,
            l) + "\u2192", 0, 0), a.restore(), a.save(), a.translate(f + n / 2 * Math.tan(e) + 4, n / 2), a.rotate(RAD90 - e), a.fillText("\u2190 " + RoundTo(slantHeight, l) + "\u2192", 0, 0), a.restore(), a.textAlign = "left", a.fillText(RoundTo(B, 1) + "\u00b0", 10, n - 4));
        a.restore();
        h.style.transform = "rotate(" + rotDangle + "deg)"
    }
}
var rotDangle = 0;

function RotateProfile(b) {
    rotDangle = b.value;
    CallAnim()
}

function rngTopWidth_Change(b) {
    $("_txtTopWidth").value = b.value;
    CallAnim()
}

function rngBaseWidth_Change(b) {
    $("_txtBaseWidth").value = b.value;
    CallAnim()
}

function rngHeight_Change(b) {
    $("_txtHeight").value = b.value;
    CallAnim()
}

function rngIncs_Change(b) {
    $("ddHoles").value = b.value;
    CallAnim()
}

function Pa(b) {
    return Math.floor(b) + .5
}

function CallAnim() {
    requestAnimFrame(function() {
        Calculate()
    })
}
var firstLoad = !0;

function GetGoogleFonts() {
    $("btnGoogleFonts").value = "Loading ... Please Wait";
    $("btnGoogleFonts").disabled = !0;
    WebFont.load({
        google: {
            families: "Chicle;Caesar Dressing;Swanky and Moo Moo;Shojumaru;Butcherman;Racing Sans One;Peralta;Arbutus;Kavoon;Chewy;Kaushan Script;Archivo Black;Rye;Ewert;Creepster;Hanalei;Knewave;Nosifer;Fascinate;Lilita One;Sarina;Chela One;Neuton;Syncopate;Paytone One;Emblema One;Limelight;Unlock;Tienne;UnifrakturCook;Exo;Meie Script;Candal;Goblin One;Milonga;Merriweather Sans;Ceviche One;Gorditas;Open Sans;Raleway;Sansita One;Alegreya;Passion One;Alegreya SC;Vollkorn;Mrs Sheppards;Luckiest Guy;Lemon;Aclonica;Chivo;Bevan;Changa One".split(";")
        },
        active: function() {
            var b =
                $("ddFonts");
            if (firstLoad) {
                this.google.families.sort();
                for (i = 0; i < this.google.families.length; i++) {
                    var d = this.google.families[i];
                    b.options[b.options.length] = new Option(d, d)
                }
                SortSelect(b);
                b.selectedIndex = Math.floor(Math.random() * b.length);
                $("cbToggleTextIn").checked = !0;
                0 === $("txtText").value.length && ($("txtText").value = "blocklayer");
                Calculate();
                alert(this.google.families.length + " Google Web Fonts have been added to Fonts drop down.\n\nClick to select any font then use keyboard cursor keys to cycle through available fonts.");
                $("btnGoogleFonts").style.visibility = "hidden";
                firstLoad = !1
            } else Calculate()
        }
    })
}

function AddGoogleFont() {
    var b = prompt("\nClick 'Choose Font' to view available fonts, then enter desired font name here to load.\n\nGoogle WebFont Name - eg: Arizonia\n", "Arizonia"),
        d = $("ddFonts");
    if (null !== b && 2 < b.length) {
        b = b.trim();
        for (i = 0; i < d.options.length; i++)
            if (b === d.options[i].text) {
                alert(b + " already included");
                return
            } WebFont.load({
            google: {
                families: [b]
            },
            active: function() {
                d.value = b;
                Calculate()
            }
        });
        d.add(new Option(b));
        SortSelect(d);
        d.value = b
    }
}

function SortSelect(b) {
    var d = [];
    for (i = 0; i < b.options.length; i++) d[i] = [], d[i][0] = b.options[i].text, d[i][1] = b.options[i].value;
    for (d.sort(); 0 < b.options.length;) b.options[0] = null;
    for (i = 0; i < d.length; i++) {
        var e = new Option(d[i][0], d[i][1]);
        b.options[i] = e
    }
}

function AddFontFromFile(b) {
    if (0 < b.files.length) {
        var d = b.files[0].name;
        d = d.substring(0, d.lastIndexOf("."));
        d = d.replace(".", " ");
        var e = window.URL.createObjectURL(b.files[0]);
        (new FontFace(d, "url(" + e + ")")).load().then(function() {
            document.fonts.add(new FontFace(d, "url(" + e + ")"));
            $("ddFonts").add(new Option(d));
            SortSelect($("ddFonts"));
            $("ddFonts").value = d;
            Calculate()
        }).catch(function(f) {
            alert("Could not load Font")
        })
    }
}

function DrawText(b, d, e, f, t, k, l, z, p) {
    b.font = l;
    b.textAlign = "center";
    b.textBaseline = "top";
    (l = $("cbInvertText").checked) ? (d = d.split(""), d.reverse(), d = d.join(""), b.textBaseline = "bottom", $("cnvsTemplate").style.transform = "rotate(180deg)") : $("cnvsTemplate").style.transform = "";
    var B = d.length;
    b.fillStyle = p;
    b.save();
    b.translate(t, k);
    b.rotate(-e / 2 - e / B / 2);
    for (t = B - 1; - 1 < t; t--) b.rotate(e / B), b.save(), b.translate(0, f), l && b.rotate(RAD180), z && b.strokeText(d[t], 0, 0), "#ffffff" !== p && b.fillText(d[t], 0, 0), b.restore();
    b.restore()
}

function RemoveText() {
    aConeText.pop();
    Calculate()
}

function ToggleTextInputs(b) {
    $("trTextInputs").style.display = b.checked ? "block" : "none";
    Calculate()
}

function ConeText(b, d, e, f, t, k, l) {
    this.txt = b;
    this.textRangle = d;
    this._radText = e;
    this._transY = f;
    this.fnt = t;
    this.isOutline = k;
    this.fillClr = l || "#fff"
}

function Show3D() {
    var b = 24 / Math.max(diamBase, coneHeight),
        d = $("cb3DRotateX").checked,
        e = $("cb3DRotateY").checked,
        f = $("ifrm3D");
    f.src = "/three.html?coneRadBase=" + RoundTo(.5 * diamBase * b, 2) + "&coneRadTop=" + RoundTo(.5 * diamTop * b, 2) + "&coneHeight=" + RoundTo(coneHeight * b, 2) + "&radSegs=64&openEdnds=true&heightSegs=64&isRotateX=" + d + "&isRotateY=" + e + "#CylinderGeometry";
    f.style.display = "block"
}

function DownloadSVG() {
    if (document.scripts.namedItem("cnvs2svg")) Calculate(!1, !0);
    else {
        var b = document.createElement("script");
        b.id = "cnvs2svg";
        b.src = "Scripts/cnvs2svg.js";
        b.onload = function() {
            Calculate(!1, !0)
        };
        document.head.appendChild(b)
    }
};