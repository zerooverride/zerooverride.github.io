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
    var canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent('sketch');
    // set default mouse-press color
    fillColor = color("red");
}

var saved = []

function draw() {
    // always start with the saved state
    // clear everything
    clear();
    // draw whats saved
    for(var i = 0; i < saved.length; i++){
        fill(fillColor);
        ellipse(saved[i][0], saved[i][1], 80, 80)
    }

    // show an empty circle whevere the mouse is
    fill(0,0,0,0);
    var el = ellipse(mouseX, mouseY, 80, 80);

    // if the mouse gets pressed, save that location
    if (mouseIsPressed) {
        saved.push([mouseX, mouseY])
    }
}
