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
 * Script to calculate and add Triangles to the document
 */

var triangles = [];
var container = document.getElementById('triangles');

class Triangle {
    constructor(width, height, color, type) {
        this.width = width;
        this.height = height;
        this.color = color;
        this.type = type;
        // init
        this.element = document.createElement('div');
        this.element.className = "triangle";
        this.element.style.width = this.element.style.height = "0";

        return this.setValues();
    }
    setValues() {
        switch(this.type) {
            case "topLeft":
                this.element.style.borderStyle = "solid";
                this.element.style.borderWidth = this.width+"px "+this.height+"px 0 0";
                this.element.style.borderColor = this.color+" transparent transparent transparent";
                break;
            case "bottomLeft":
                this.element.style.borderStyle = "solid";
                this.element.style.borderWidth = this.width+"px 0 0 "+this.height+"px";
                this.element.style.borderColor = "transparent transparent transparent "+this.color;
                break;
            case "topRight":
                this.element.style.borderStyle = "solid";
                this.element.style.borderWidth = this.width+"px "+this.height+"px 0 0";
                this.element.style.borderColor = this.color+" transparent transparent transparent";
                break;
            case "bottomRight":
                this.element.style.borderStyle = "solid";
                this.element.style.borderWidth = "0 0 "+this.width+"px "+this.height+"px";
                this.element.style.borderColor = "transparent transparent "+this.color+" transparent";
                break;
        }

        return this.element;
    }
}

/** Colors */

var materialColors = [
    [
        "#EF5350",
        "#F44336",
        "#E53935"
    ],
    [
        "#F06292",
        "#EC407A",
        "#E91E63"
    ],
    [
        "#AB47BC",
        "#9C27B0",
        "#8E24AA"
    ],
    [
        "#7E57C2",
        "#673AB7",
        "#5E35B1"
    ],
    [
        "#3F51B5",
        "#3949AB",
        "#303F9F"
    ],
    [
        "#2196F3",
        "#1E88E5",
        "#1976D2"
    ],
    [
        "#03A9F4",
        "#039BE5",
        "#0288D1"
    ],
    [
        "#26C6DA",
        "#00BCD4",
        "#00ACC1"
    ],
    [
        "#26A69A",
        "#009688",
        "#00897B"
    ],
    [
        "#66BB6A",
        "#4CAF50",
        "#43A047"
    ],
    [
        "#9CCC65",
        "#8BC34A",
        "#7CB342"
    ],
    [
        "#CDDC39",
        "#C0CA33",
        "#AFB42B"
    ],
    [
        "#FDD835",
        "#FBC02D",
        "#F9A825"
    ],
    [
        "#FFB300",
        "#FFA000",
        "#FF8F00"
    ],
    [
        "#FB8C00",
        "#F57C00",
        "#EF6C00"
    ],
    [
        "#FF7043",
        "#FF5722",
        "#F4511E"
    ]
];


/** Generate Colors */

/** DEACTIVATED

function generateColors(colorList) {
    var min = 0, max = colorList.length - 1 - 2;
    var rand = Math.floor(Math.random() * (max - min + 1) + min);
    var rand2 = Math.floor(Math.random() * (max - min + 1) + min);
    while(rand2 === rand) {
        rand2 = Math.floor(Math.random() * (max - min + 1) + min);
    }
    return [
        colorList[rand],
        colorList[rand+2]
    ]
}

var colorset = generateColors(materialColors);
*/


/** SET 1 */

var tri1  = new Triangle(window.innerHeight / 5.5, window.innerWidth * 0.8, materialColors[14][0], "bottomLeft");
var tri2 = new Triangle(window.innerHeight / 8, parseInt(window.innerWidth) * 0.6, materialColors[14][1], "bottomLeft");
var tri3 = new Triangle(window.innerHeight / 16, window.innerWidth * 0.4, materialColors[14][2], "bottomLeft");

tri1.style.transform = tri2.style.transform = tri3.style.transform = "rotate(180deg)";

// Render
tri1.style.position = tri2.style.position = tri3.style.position = "absolute";
tri1.style.right = tri1.style.top = 0;
tri2.style.right = tri2.style.top = 0;
tri3.style.right = tri3.style.top = 0;

container.appendChild(tri1);
container.appendChild(tri2);
container.appendChild(tri3);

/** SET 2 */

tri1  = new Triangle(window.innerHeight / 5.5, window.innerWidth * 1.2, materialColors[12][0], "topLeft");
tri2 = new Triangle(window.innerHeight / 8, parseInt(window.innerWidth), materialColors[12][1], "topLeft");
tri3 = new Triangle(window.innerHeight / 16, window.innerWidth * 0.8, materialColors[12][2], "topLeft");

// Render
tri1.style.position = tri2.style.position = tri3.style.position = "absolute";
tri1.style.left = tri1.style.top = 0;
tri2.style.left = tri2.style.top = 0;
tri3.style.left = tri3.style.top = 0;

container.appendChild(tri1);
container.appendChild(tri2);
container.appendChild(tri3);