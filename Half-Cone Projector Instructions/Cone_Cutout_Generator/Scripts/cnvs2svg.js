(function() {
    function h(a, b) {
        var c = Object.keys(b),
            e;
        for (e = 0; e < c.length; e++) a = a.replace(new RegExp("\\{" + c[e] + "\\}", "gi"), b[c[e]]);
        return a
    }

    function m(a) {
        var b;
        if (!a) throw Error("cannot create a random attribute name for an undefined object");
        do {
            var c = "";
            for (b = 0; 12 > b; b++) c += "ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz" [Math.floor(51 * Math.random())]
        } while (a[c]);
        return c
    }

    function u(a) {
        var b = {
            left: "start",
            right: "end",
            center: "middle",
            start: "start",
            end: "end"
        };
        return b[a] || b.start
    }

    function v(a) {
        var b = {
            alphabetic: "alphabetic",
            hanging: "hanging",
            top: "text-before-edge",
            bottom: "text-after-edge",
            middle: "central"
        };
        return b[a] || b.alphabetic
    }
    var r = function(a, b) {
        var c, e = {};
        a = a.split(",");
        b = b || 10;
        for (c = 0; c < a.length; c += 2) {
            var g = "&" + a[c + 1] + ";";
            var f = parseInt(a[c], b);
            e[g] = "&#" + f + ";"
        }
        e["\\xa0"] = "&#160;";
        return e
    }("50,nbsp,51,iexcl,52,cent,53,pound,54,curren,55,yen,56,brvbar,57,sect,58,uml,59,copy,5a,ordf,5b,laquo,5c,not,5d,shy,5e,reg,5f,macr,5g,deg,5h,plusmn,5i,sup2,5j,sup3,5k,acute,5l,micro,5m,para,5n,middot,5o,cedil,5p,sup1,5q,ordm,5r,raquo,5s,frac14,5t,frac12,5u,frac34,5v,iquest,60,Agrave,61,Aacute,62,Acirc,63,Atilde,64,Auml,65,Aring,66,AElig,67,Ccedil,68,Egrave,69,Eacute,6a,Ecirc,6b,Euml,6c,Igrave,6d,Iacute,6e,Icirc,6f,Iuml,6g,ETH,6h,Ntilde,6i,Ograve,6j,Oacute,6k,Ocirc,6l,Otilde,6m,Ouml,6n,times,6o,Oslash,6p,Ugrave,6q,Uacute,6r,Ucirc,6s,Uuml,6t,Yacute,6u,THORN,6v,szlig,70,agrave,71,aacute,72,acirc,73,atilde,74,auml,75,aring,76,aelig,77,ccedil,78,egrave,79,eacute,7a,ecirc,7b,euml,7c,igrave,7d,iacute,7e,icirc,7f,iuml,7g,eth,7h,ntilde,7i,ograve,7j,oacute,7k,ocirc,7l,otilde,7m,ouml,7n,divide,7o,oslash,7p,ugrave,7q,uacute,7r,ucirc,7s,uuml,7t,yacute,7u,thorn,7v,yuml,ci,fnof,sh,Alpha,si,Beta,sj,Gamma,sk,Delta,sl,Epsilon,sm,Zeta,sn,Eta,so,Theta,sp,Iota,sq,Kappa,sr,Lambda,ss,Mu,st,Nu,su,Xi,sv,Omicron,t0,Pi,t1,Rho,t3,Sigma,t4,Tau,t5,Upsilon,t6,Phi,t7,Chi,t8,Psi,t9,Omega,th,alpha,ti,beta,tj,gamma,tk,delta,tl,epsilon,tm,zeta,tn,eta,to,theta,tp,iota,tq,kappa,tr,lambda,ts,mu,tt,nu,tu,xi,tv,omicron,u0,pi,u1,rho,u2,sigmaf,u3,sigma,u4,tau,u5,upsilon,u6,phi,u7,chi,u8,psi,u9,omega,uh,thetasym,ui,upsih,um,piv,812,bull,816,hellip,81i,prime,81j,Prime,81u,oline,824,frasl,88o,weierp,88h,image,88s,real,892,trade,89l,alefsym,8cg,larr,8ch,uarr,8ci,rarr,8cj,darr,8ck,harr,8dl,crarr,8eg,lArr,8eh,uArr,8ei,rArr,8ej,dArr,8ek,hArr,8g0,forall,8g2,part,8g3,exist,8g5,empty,8g7,nabla,8g8,isin,8g9,notin,8gb,ni,8gf,prod,8gh,sum,8gi,minus,8gn,lowast,8gq,radic,8gt,prop,8gu,infin,8h0,ang,8h7,and,8h8,or,8h9,cap,8ha,cup,8hb,int,8hk,there4,8hs,sim,8i5,cong,8i8,asymp,8j0,ne,8j1,equiv,8j4,le,8j5,ge,8k2,sub,8k3,sup,8k4,nsub,8k6,sube,8k7,supe,8kl,oplus,8kn,otimes,8l5,perp,8m5,sdot,8o8,lceil,8o9,rceil,8oa,lfloor,8ob,rfloor,8p9,lang,8pa,rang,9ea,loz,9j0,spades,9j3,clubs,9j5,hearts,9j6,diams,ai,OElig,aj,oelig,b0,Scaron,b1,scaron,bo,Yuml,m6,circ,ms,tilde,802,ensp,803,emsp,809,thinsp,80c,zwnj,80d,zwj,80e,lrm,80f,rlm,80j,ndash,80k,mdash,80o,lsquo,80p,rsquo,80q,sbquo,80s,ldquo,80t,rdquo,80u,bdquo,810,dagger,811,Dagger,81g,permil,81p,lsaquo,81q,rsaquo,85c,euro",
        32);
    var l = {
        strokeStyle: {
            svgAttr: "stroke",
            canvas: "#000000",
            svg: "none",
            apply: "stroke"
        },
        fillStyle: {
            svgAttr: "fill",
            canvas: "#000000",
            svg: null,
            apply: "fill"
        },
        lineCap: {
            svgAttr: "stroke-linecap",
            canvas: "butt",
            svg: "butt",
            apply: "stroke"
        },
        lineJoin: {
            svgAttr: "stroke-linejoin",
            canvas: "miter",
            svg: "miter",
            apply: "stroke"
        },
        miterLimit: {
            svgAttr: "stroke-miterlimit",
            canvas: 10,
            svg: 4,
            apply: "stroke"
        },
        lineWidth: {
            svgAttr: "stroke-width",
            canvas: 1,
            svg: 1,
            apply: "stroke"
        },
        globalAlpha: {
            svgAttr: "opacity",
            canvas: 1,
            svg: 1,
            apply: "fill stroke"
        },
        font: {
            canvas: "10px sans-serif"
        },
        shadowColor: {
            canvas: "#000000"
        },
        shadowOffsetX: {
            canvas: 0
        },
        shadowOffsetY: {
            canvas: 0
        },
        shadowBlur: {
            canvas: 0
        },
        textAlign: {
            canvas: "start"
        },
        textBaseline: {
            canvas: "alphabetic"
        },
        lineDash: {
            svgAttr: "stroke-dasharray",
            canvas: [],
            svg: null,
            apply: "stroke"
        }
    };
    var p = function(a, b) {
        this.__root = a;
        this.__ctx = b
    };
    p.prototype.addColorStop = function(a, b) {
        var c = this.__ctx.__createElement("stop");
        c.setAttribute("offset", a); - 1 !== b.indexOf("rgba") ? (a = /rgba\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d?\.?\d*)\s*\)/gi,
            b = a.exec(b), c.setAttribute("stop-color", h("rgb({r},{g},{b})", {
                r: b[1],
                g: b[2],
                b: b[3]
            })), c.setAttribute("stop-opacity", b[4])) : c.setAttribute("stop-color", b);
        this.__root.appendChild(c)
    };
    var t = function(a, b) {
        this.__root = a;
        this.__ctx = b
    };
    var d = function(a) {
        var b = {
            width: 500,
            height: 500,
            enableMirroring: !1
        };
        if (1 < arguments.length) {
            var c = b;
            c.width = arguments[0];
            c.height = arguments[1]
        } else c = a ? a : b;
        if (!(this instanceof d)) return new d(c);
        this.width = c.width || b.width;
        this.height = c.height || b.height;
        this.enableMirroring =
            void 0 !== c.enableMirroring ? c.enableMirroring : b.enableMirroring;
        this.canvas = this;
        this.__document = c.document || document;
        c.ctx ? this.__ctx = c.ctx : (this.__canvas = this.__document.createElement("canvas"), this.__ctx = this.__canvas.getContext("2d"));
        this.__setDefaultStyles();
        this.__stack = [this.__getStyleState()];
        this.__groupStack = [];
        this.__root = this.__document.createElementNS("http://www.w3.org/2000/svg", "svg");
        this.__root.setAttribute("version", 1.1);
        this.__root.setAttribute("xmlns", "http://www.w3.org/2000/svg");
        this.__root.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
        this.__root.setAttribute("width", this.width);
        this.__root.setAttribute("height", this.height);
        this.__ids = {};
        this.__defs = this.__document.createElementNS("http://www.w3.org/2000/svg", "defs");
        this.__root.appendChild(this.__defs);
        this.__currentElement = this.__document.createElementNS("http://www.w3.org/2000/svg", "g");
        this.__root.appendChild(this.__currentElement)
    };
    d.prototype.__createElement = function(a, b, c) {
        "undefined" === typeof b && (b = {});
        a = this.__document.createElementNS("http://www.w3.org/2000/svg", a);
        var e = Object.keys(b);
        c && (a.setAttribute("fill", "none"), a.setAttribute("stroke", "none"));
        for (c = 0; c < e.length; c++) {
            var g = e[c];
            a.setAttribute(g, b[g])
        }
        return a
    };
    d.prototype.__setDefaultStyles = function() {
        var a = Object.keys(l),
            b;
        for (b = 0; b < a.length; b++) {
            var c = a[b];
            this[c] = l[c].canvas
        }
    };
    d.prototype.__applyStyleState = function(a) {
        var b = Object.keys(a),
            c;
        for (c = 0; c < b.length; c++) {
            var e = b[c];
            this[e] = a[e]
        }
    };
    d.prototype.__getStyleState =
        function() {
            var a, b = {},
                c = Object.keys(l);
            for (a = 0; a < c.length; a++) {
                var e = c[a];
                b[e] = this[e]
            }
            return b
        };
    d.prototype.__applyStyleToCurrentElement = function(a) {
        var b = this.__currentElement,
            c = this.__currentElementsToStyle;
        c && (b.setAttribute(a, ""), b = c.element, c.children.forEach(function(b) {
            b.setAttribute(a, "")
        }));
        c = Object.keys(l);
        var e;
        for (e = 0; e < c.length; e++) {
            var g = l[c[e]];
            var f = this[c[e]];
            if (g.apply)
                if (f instanceof t) {
                    if (f.__ctx)
                        for (; f.__ctx.__defs.childNodes.length;) {
                            var d = f.__ctx.__defs.childNodes[0].getAttribute("id");
                            this.__ids[d] = d;
                            this.__defs.appendChild(f.__ctx.__defs.childNodes[0])
                        }
                    b.setAttribute(g.apply, h("url(#{id})", {
                        id: f.__root.getAttribute("id")
                    }))
                } else if (f instanceof p) b.setAttribute(g.apply, h("url(#{id})", {
                id: f.__root.getAttribute("id")
            }));
            else if (-1 !== g.apply.indexOf(a) && g.svg !== f)
                if ("stroke" !== g.svgAttr && "fill" !== g.svgAttr || -1 === f.indexOf("rgba")) {
                    d = g.svgAttr;
                    if ("globalAlpha" === c[e] && (d = a + "-" + g.svgAttr, b.getAttribute(d))) continue;
                    b.setAttribute(d, f)
                } else d = /rgba\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d?\.?\d*)\s*\)/gi,
                    f = d.exec(f), b.setAttribute(g.svgAttr, h("rgb({r},{g},{b})", {
                        r: f[1],
                        g: f[2],
                        b: f[3]
                    })), f = f[4], d = this.globalAlpha, null != d && (f *= d), b.setAttribute(g.svgAttr + "-opacity", f)
        }
    };
    d.prototype.__closestGroupOrSvg = function(a) {
        a = a || this.__currentElement;
        return "g" === a.nodeName || "svg" === a.nodeName ? a : this.__closestGroupOrSvg(a.parentNode)
    };
    d.prototype.getSerializedSvg = function(a) {
        var b = (new XMLSerializer).serializeToString(this.__root),
            c;
        /xmlns="http:\/\/www\.w3\.org\/2000\/svg".+xmlns="http:\/\/www\.w3\.org\/2000\/svg/gi.test(b) &&
            (b = b.replace('xmlns="http://www.w3.org/2000/svg', 'xmlns:xlink="http://www.w3.org/1999/xlink'));
        if (a)
            for (a = Object.keys(r), c = 0; c < a.length; c++) {
                var e = a[c];
                var d = r[e];
                e = new RegExp(e, "gi");
                e.test(b) && (b = b.replace(e, d))
            }
        return b
    };
    d.prototype.getSvg = function() {
        return this.__root
    };
    d.prototype.save = function() {
        var a = this.__createElement("g"),
            b = this.__closestGroupOrSvg();
        this.__groupStack.push(b);
        b.appendChild(a);
        this.__currentElement = a;
        this.__stack.push(this.__getStyleState())
    };
    d.prototype.restore = function() {
        this.__currentElement =
            this.__groupStack.pop();
        this.__currentElementsToStyle = null;
        this.__currentElement || (this.__currentElement = this.__root.childNodes[1]);
        var a = this.__stack.pop();
        this.__applyStyleState(a)
    };
    d.prototype.__addTransform = function(a) {
        var b = this.__closestGroupOrSvg();
        if (0 < b.childNodes.length) {
            "path" === this.__currentElement.nodeName && (this.__currentElementsToStyle || (this.__currentElementsToStyle = {
                element: b,
                children: []
            }), this.__currentElementsToStyle.children.push(this.__currentElement), this.__applyCurrentDefaultPath());
            var c = this.__createElement("g");
            b.appendChild(c);
            this.__currentElement = c
        }
        b = this.__currentElement.getAttribute("transform");
        this.__currentElement.setAttribute("transform", (b ? b + " " : "") + a)
    };
    d.prototype.scale = function(a, b) {
        void 0 === b && (b = a);
        this.__addTransform(h("scale({x},{y})", {
            x: a,
            y: b
        }))
    };
    d.prototype.rotate = function(a) {
        this.__addTransform(h("rotate({angle},{cx},{cy})", {
            angle: 180 * a / Math.PI,
            cx: 0,
            cy: 0
        }))
    };
    d.prototype.translate = function(a, b) {
        this.__addTransform(h("translate({x},{y})", {
            x: a,
            y: b
        }))
    };
    d.prototype.transform =
        function(a, b, c, e, d, f) {
            this.__addTransform(h("matrix({a},{b},{c},{d},{e},{f})", {
                a: a,
                b: b,
                c: c,
                d: e,
                e: d,
                f: f
            }))
        };
    d.prototype.beginPath = function() {
        this.__currentDefaultPath = "";
        this.__currentPosition = {};
        var a = this.__createElement("path", {}, !0);
        this.__closestGroupOrSvg().appendChild(a);
        this.__currentElement = a
    };
    d.prototype.__applyCurrentDefaultPath = function() {
        var a = this.__currentElement;
        "path" === a.nodeName ? a.setAttribute("d", this.__currentDefaultPath) : console.error("Attempted to apply path command to node", a.nodeName)
    };
    d.prototype.__addPathCommand = function(a) {
        this.__currentDefaultPath += " ";
        this.__currentDefaultPath += a
    };
    d.prototype.moveTo = function(a, b) {
        "path" !== this.__currentElement.nodeName && this.beginPath();
        this.__currentPosition = {
            x: a,
            y: b
        };
        this.__addPathCommand(h("M {x} {y}", {
            x: a,
            y: b
        }))
    };
    d.prototype.closePath = function() {
        this.__currentDefaultPath && this.__addPathCommand("Z")
    };
    d.prototype.lineTo = function(a, b) {
        this.__currentPosition = {
            x: a,
            y: b
        }; - 1 < this.__currentDefaultPath.indexOf("M") ? this.__addPathCommand(h("L {x} {y}", {
            x: a,
            y: b
        })) : this.__addPathCommand(h("M {x} {y}", {
            x: a,
            y: b
        }))
    };
    d.prototype.bezierCurveTo = function(a, b, c, e, d, f) {
        this.__currentPosition = {
            x: d,
            y: f
        };
        this.__addPathCommand(h("C {cp1x} {cp1y} {cp2x} {cp2y} {x} {y}", {
            cp1x: a,
            cp1y: b,
            cp2x: c,
            cp2y: e,
            x: d,
            y: f
        }))
    };
    d.prototype.quadraticCurveTo = function(a, b, c, e) {
        this.__currentPosition = {
            x: c,
            y: e
        };
        this.__addPathCommand(h("Q {cpx} {cpy} {x} {y}", {
            cpx: a,
            cpy: b,
            x: c,
            y: e
        }))
    };
    var q = function(a) {
        var b = Math.sqrt(a[0] * a[0] + a[1] * a[1]);
        return [a[0] / b, a[1] / b]
    };
    d.prototype.arcTo = function(a,
        b, c, e, d) {
        var f = this.__currentPosition && this.__currentPosition.x,
            g = this.__currentPosition && this.__currentPosition.y;
        if ("undefined" != typeof f && "undefined" != typeof g) {
            if (0 > d) throw Error("IndexSizeError: The radius provided (" + d + ") is negative.");
            f === a && g === b || a === c && b === e || 0 === d ? this.lineTo(a, b) : (f = q([f - a, g - b]), c = q([c - a, e - b]), f[0] * c[1] === f[1] * c[0] ? this.lineTo(a, b) : (g = Math.acos(Math.abs(f[0] * c[0] + f[1] * c[1])), e = q([f[0] + c[0], f[1] + c[1]]), g = d / Math.sin(g / 2), a += g * e[0], b += g * e[1], f = [-f[1], f[0]], e = [c[1], -c[0]],
                g = function(a) {
                    var b = a[0];
                    return 0 <= a[1] ? Math.acos(b) : -Math.acos(b)
                }, c = g(f), e = g(e), this.lineTo(a + f[0] * d, b + f[1] * d), this.arc(a, b, d, c, e)))
        }
    };
    d.prototype.stroke = function() {
        "path" === this.__currentElement.nodeName && this.__currentElement.setAttribute("paint-order", "fill stroke markers");
        this.__applyCurrentDefaultPath();
        this.__applyStyleToCurrentElement("stroke")
    };
    d.prototype.fill = function() {
        "path" === this.__currentElement.nodeName && this.__currentElement.setAttribute("paint-order", "stroke fill markers");
        this.__applyCurrentDefaultPath();
        this.__applyStyleToCurrentElement("fill")
    };
    d.prototype.rect = function(a, b, c, e) {
        "path" !== this.__currentElement.nodeName && this.beginPath();
        this.moveTo(a, b);
        this.lineTo(a + c, b);
        this.lineTo(a + c, b + e);
        this.lineTo(a, b + e);
        this.lineTo(a, b);
        this.closePath()
    };
    d.prototype.fillRect = function(a, b, c, e) {
        a = this.__createElement("rect", {
            x: a,
            y: b,
            width: c,
            height: e
        }, !0);
        this.__closestGroupOrSvg().appendChild(a);
        this.__currentElement = a;
        this.__applyStyleToCurrentElement("fill")
    };
    d.prototype.strokeRect = function(a, b, c, e) {
        a = this.__createElement("rect", {
            x: a,
            y: b,
            width: c,
            height: e
        }, !0);
        this.__closestGroupOrSvg().appendChild(a);
        this.__currentElement = a;
        this.__applyStyleToCurrentElement("stroke")
    };
    d.prototype.__clearCanvas = function() {
        for (var a = this.__closestGroupOrSvg().getAttribute("transform"), b = this.__root.childNodes[1], c = b.childNodes, e = c.length - 1; 0 <= e; e--) c[e] && b.removeChild(c[e]);
        this.__currentElement = b;
        this.__groupStack = [];
        a && this.__addTransform(a)
    };
    d.prototype.clearRect = function(a, b, c, e) {
        if (0 === a && 0 === b && c === this.width && e === this.height) this.__clearCanvas();
        else {
            var d = this.__closestGroupOrSvg();
            a = this.__createElement("rect", {
                x: a,
                y: b,
                width: c,
                height: e,
                fill: "#FFFFFF"
            }, !0);
            d.appendChild(a)
        }
    };
    d.prototype.createLinearGradient = function(a, b, c, e) {
        a = this.__createElement("linearGradient", {
            id: m(this.__ids),
            x1: a + "px",
            x2: c + "px",
            y1: b + "px",
            y2: e + "px",
            gradientUnits: "userSpaceOnUse"
        }, !1);
        this.__defs.appendChild(a);
        return new p(a, this)
    };
    d.prototype.createRadialGradient = function(a, b, c, e, d, f) {
        a = this.__createElement("radialGradient", {
            id: m(this.__ids),
            cx: e + "px",
            cy: d + "px",
            r: f +
                "px",
            fx: a + "px",
            fy: b + "px",
            gradientUnits: "userSpaceOnUse"
        }, !1);
        this.__defs.appendChild(a);
        return new p(a, this)
    };
    d.prototype.__parseFont = function() {
        var a = /^\s*(?=(?:(?:[-a-z]+\s*){0,2}(italic|oblique))?)(?=(?:(?:[-a-z]+\s*){0,2}(small-caps))?)(?=(?:(?:[-a-z]+\s*){0,2}(bold(?:er)?|lighter|[1-9]00))?)(?:(?:normal|\1|\2|\3)\s*){0,3}((?:xx?-)?(?:small|large)|medium|smaller|larger|[.\d]+(?:%|in|[cem]m|ex|p[ctx]))(?:\s*\/\s*(normal|[.\d]+(?:%|in|[cem]m|ex|p[ctx])))?\s*([-,'"\sa-z0-9]+?)\s*$/i.exec(this.font);
        a = {
            style: a[1] || "normal",
            size: a[4] || "10px",
            family: a[6] || "sans-serif",
            weight: a[3] || "normal",
            decoration: a[2] || "normal",
            href: null
        };
        "underline" === this.__fontUnderline && (a.decoration = "underline");
        this.__fontHref && (a.href = this.__fontHref);
        return a
    };
    d.prototype.__wrapTextLink = function(a, b) {
        if (a.href) {
            var c = this.__createElement("a");
            c.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a.href);
            c.appendChild(b);
            return c
        }
        return b
    };
    d.prototype.__applyText = function(a, b, c, e) {
        var d = this.__parseFont(),
            f = this.__closestGroupOrSvg();
        b = this.__createElement("text", {
            "font-family": d.family,
            "font-size": d.size,
            "font-style": d.style,
            "font-weight": d.weight,
            "text-decoration": d.decoration,
            x: b,
            y: c,
            "text-anchor": u(this.textAlign),
            "dominant-baseline": v(this.textBaseline)
        }, !0);
        b.appendChild(this.__document.createTextNode(a));
        this.__currentElement = b;
        this.__applyStyleToCurrentElement(e);
        f.appendChild(this.__wrapTextLink(d, b))
    };
    d.prototype.fillText = function(a, b, c) {
        this.__applyText(a, b, c, "fill")
    };
    d.prototype.strokeText = function(a, b, c) {
        this.__applyText(a,
            b, c, "stroke")
    };
    d.prototype.measureText = function(a) {
        this.__ctx.font = this.font;
        return this.__ctx.measureText(a)
    };
    d.prototype.arc = function(a, b, c, d, g, f) {
        if (d !== g) {
            d %= 2 * Math.PI;
            g %= 2 * Math.PI;
            d === g && (g = (g + 2 * Math.PI - .001 * (f ? -1 : 1)) % (2 * Math.PI));
            var e = a + c * Math.cos(g),
                n = b + c * Math.sin(g);
            a += c * Math.cos(d);
            b += c * Math.sin(d);
            var k = f ? 0 : 1;
            d = g - d;
            0 > d && (d += 2 * Math.PI);
            f = f ? d > Math.PI ? 0 : 1 : d > Math.PI ? 1 : 0;
            this.lineTo(a, b);
            this.__addPathCommand(h("A {rx} {ry} {xAxisRotation} {largeArcFlag} {sweepFlag} {endX} {endY}", {
                rx: c,
                ry: c,
                xAxisRotation: 0,
                largeArcFlag: f,
                sweepFlag: k,
                endX: e,
                endY: n
            }));
            this.__currentPosition = {
                x: e,
                y: n
            }
        }
    };
    d.prototype.clip = function() {
        var a = this.__closestGroupOrSvg(),
            b = this.__createElement("clipPath"),
            c = m(this.__ids),
            d = this.__createElement("g");
        this.__applyCurrentDefaultPath();
        a.removeChild(this.__currentElement);
        b.setAttribute("id", c);
        b.appendChild(this.__currentElement);
        this.__defs.appendChild(b);
        a.setAttribute("clip-path", h("url(#{id})", { id: c }));
        a.appendChild(d);
        this.__currentElement = d
    };
    d.prototype.drawImage =
        function() {
            var a = Array.prototype.slice.call(arguments),
                b = a[0],
                c = 0,
                e = 0;
            if (3 === a.length) {
                var g = a[1];
                var f = a[2];
                var h = b.width;
                var n = b.height;
                var k = h;
                var l = n
            } else if (5 === a.length) g = a[1], f = a[2], k = a[3], l = a[4], h = b.width, n = b.height;
            else if (9 === a.length) c = a[1], e = a[2], h = a[3], n = a[4], g = a[5], f = a[6], k = a[7], l = a[8];
            else throw Error("Invalid number of arguments passed to drawImage: " + arguments.length);
            a = this.__closestGroupOrSvg();
            g = "translate(" + g + ", " + f + ")";
            if (b instanceof d) {
                if (b = b.getSvg().cloneNode(!0), b.childNodes && 1 < b.childNodes.length) {
                    for (k = b.childNodes[0]; k.childNodes.length;) c = k.childNodes[0].getAttribute("id"), this.__ids[c] = c, this.__defs.appendChild(k.childNodes[0]);
                    if (b = b.childNodes[1]) k = b.getAttribute("transform"), b.setAttribute("transform", k ? k + " " + g : g), a.appendChild(b)
                }
            } else if ("CANVAS" === b.nodeName || "IMG" === b.nodeName) {
                f = this.__createElement("image");
                f.setAttribute("width", k);
                f.setAttribute("height", l);
                f.setAttribute("preserveAspectRatio", "none");
                if (c || e || h !== b.width || n !== b.height) {
                    var m = this.__document.createElement("canvas");
                    m.width = k;
                    m.height = l;
                    var p = m.getContext("2d");
                    p.drawImage(b, c, e, h, n, 0, 0, k, l);
                    b = m
                }
                f.setAttribute("transform", g);
                f.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "CANVAS" === b.nodeName ? b.toDataURL() : b.getAttribute("src"));
                a.appendChild(f)
            }
        };
    d.prototype.createPattern = function(a, b) {
        b = this.__document.createElementNS("http://www.w3.org/2000/svg", "pattern");
        var c = m(this.__ids);
        b.setAttribute("id", c);
        b.setAttribute("width", a.width);
        b.setAttribute("height", a.height);
        "CANVAS" === a.nodeName || "IMG" ===
            a.nodeName ? (c = this.__document.createElementNS("http://www.w3.org/2000/svg", "image"), c.setAttribute("width", a.width), c.setAttribute("height", a.height), c.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "CANVAS" === a.nodeName ? a.toDataURL() : a.getAttribute("src")), b.appendChild(c), this.__defs.appendChild(b)) : a instanceof d && (b.appendChild(a.__root.childNodes[1]), this.__defs.appendChild(b));
        return new t(b, this)
    };
    d.prototype.setLineDash = function(a) {
        this.lineDash = a && 0 < a.length ? a.join(",") : null
    };
    d.prototype.drawFocusRing = function() {};
    d.prototype.createImageData = function() {};
    d.prototype.getImageData = function() {};
    d.prototype.putImageData = function() {};
    d.prototype.globalCompositeOperation = function() {};
    d.prototype.setTransform = function() {};
    "object" === typeof window && (window.C2S = d);
    "object" === typeof module && "object" === typeof module.exports && (module.exports = d)
})();