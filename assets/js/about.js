var fillColor;

function loaded() {
    document.getElementById("red").addEventListener("click", () => {
        fillColor = color("red");
    });
    document.getElementById("blue").addEventListener("click", () => {
        fillColor = color("blue");
    });
}

window.onload = loaded;

function setup() {
    var canvas = createCanvas(400, 400);
    canvas.parent('sketch');
    // set default mouse-press color
    fillColor = color("red");
}

var saved = []

function draw() {
    clear();
    for(var i = 0; i < saved.length; i++){
        fill(fillColor);
        ellipse(saved[i][0], saved[i][1], 80, 80)
    }
    fill(0,0,0,0);
    var el = ellipse(mouseX, mouseY, 80, 80);
    if (mouseIsPressed) {
        fill(fillColor);
        ellipse(mouseX, mouseY, 80, 80)
        saved.push([mouseX, mouseY])
    } else {
    }
    //if (mouseIsPressed) {
    //    fill(fillColor);
    //} else {
    //    fill(255);
    //    els += el;
    //}
}
