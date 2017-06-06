/*
 * Copyright (c) 2017 Moritz Menzel.
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and
 * associated documentation files (the "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial
 * portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
 * PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
 * ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH
 * THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

/**
 * Created by moritz on 05.06.17.
 */

/**
 * @var materialColors
 */
var materialColors = {
    "yellow": {
        "50": "#FFFDE7",
        "100": "#FFF9C4",
        "200": "#FFF59D",
        "300": "#FFF176",
        "400": "#FFEE58",
        "500": "#FFEB3B",
        "600": "#FDD835",
        "700": "#FBC02D",
        "800": "#F9A825",
        "900": "#F57F17"
    },
    "orange": {
        "50": "#FFF3E0",
        "100": "#FFE0B2",
        "200": "#FFCC80",
        "300": "#FFB74D",
        "400": "#FFA726",
        "500": "#FF9800",
        "600": "#FB8C00",
        "700": "#F57C00",
        "800": "#EF6C00",
        "900": "#E65100"
    }
};

/**
 * @var container
 */
var container = document.getElementById('triangles');

/**
 * @class Triangle
 */

class Triangle {

    /**
     * @function constructor
     * @param width
     * @param height
     * @param color
     * @param type
     * @return {*}
     */
    constructor(width, height, color, type) {
        this.width = width;
        this.height = height;
        this.color = color;
        this.type = type;

        // Create DIV for the Triangle to be shown as
        this.element = document.createElement('div');
        this.element.className = "triangle";
        this.element.style.width = this.element.style.height = "0";

        return this.setValues();
    }

    /**
     * @function setValues
     * @return {Element|*}
     */
    setValues() {
        switch(this.type) {
            case "topLeft":
                // right angle is in the top left
                this.element.style.borderStyle = "solid";
                this.element.style.borderWidth = this.width+"px "+this.height+"px 0 0";
                this.element.style.borderColor = this.color+" transparent transparent transparent";
                break;
            case "bottomLeft":
                // right angle is in the bottom left
                this.element.style.borderStyle = "solid";
                this.element.style.borderWidth = this.width+"px 0 0 "+this.height+"px";
                this.element.style.borderColor = "transparent transparent transparent "+this.color;
                break;
            case "topRight":
                // right angle is in the top right
                this.element.style.borderStyle = "solid";
                this.element.style.borderWidth = this.width+"px "+this.height+"px 0 0";
                this.element.style.borderColor = this.color+" transparent transparent transparent";
                break;
            case "bottomRight":
                // right angle is in the bottom right
                this.element.style.borderStyle = "solid";
                this.element.style.borderWidth = "0 0 "+this.width+"px "+this.height+"px";
                this.element.style.borderColor = "transparent transparent "+this.color+" transparent";
                break;
        }
        // return div drawn as Triangle
        return this.element;
    }
}

/**
 * @function setHeadTriangles
 * @param layer
 * @return {boolean}
 */
function setHeadTriangles(layer) {
    var tri1, tri2, tri3;

    switch(layer) {
        case "upper":
            tri1  = new Triangle(window.innerHeight / 5.5, window.innerWidth * 1.2, materialColors["yellow"][600], "topLeft");
            tri2 = new Triangle(window.innerHeight / 8, parseInt(window.innerWidth), materialColors["yellow"][700], "topLeft");
            tri3 = new Triangle(window.innerHeight / 16, window.innerWidth * 0.8, materialColors["yellow"][800], "topLeft");

            // Render
            tri1.style.position = tri2.style.position = tri3.style.position = "absolute";
            tri1.style.left = tri1.style.top = 0;
            tri2.style.left = tri2.style.top = 0;
            tri3.style.left = tri3.style.top = 0;

            break;
        case "lower":
            tri1  = new Triangle(window.innerHeight / 5.5, window.innerWidth * 0.8, materialColors["orange"][600], "bottomLeft");
            tri2 = new Triangle(window.innerHeight / 8, parseInt(window.innerWidth) * 0.6, materialColors["orange"][700], "bottomLeft");
            tri3 = new Triangle(window.innerHeight / 16, window.innerWidth * 0.4, materialColors["orange"][800], "bottomLeft");

            tri1.style.transform = tri2.style.transform = tri3.style.transform = "rotate(180deg)";

            // Render
            tri1.style.position = tri2.style.position = tri3.style.position = "absolute";
            tri1.style.right = tri1.style.top = 0;
            tri2.style.right = tri2.style.top = 0;
            tri3.style.right = tri3.style.top = 0;

            break;
        default:
            tri1 = tri2 = tri3 = document.createElement('div');
            console.error("function setTriangles: Wrong value of variable 'layer'." +
                          "Possible options are 'upper' or 'lower'");
            break;
    }

    container.appendChild(tri1);
    container.appendChild(tri2);
    container.appendChild(tri3);

    return true;
}

/**
 * @type {Window.onload|Window.onresize}
 */
window.onload = window.onresize = function() {
    // Clear container content before appending new content
    container.innerHTML = "";

    setHeadTriangles('lower');
    setHeadTriangles('upper');
};