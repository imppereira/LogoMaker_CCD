
let canvas;
let font;
let icon;
let color;

function preload() {


}

function setup() {
    canvas = createCanvas(700, 700);
    stroke(255);
    frameRate(30);

    font = loadFont(fileRandomFont);
}

function draw() {
    background(255);

    fill(0);
    textSize(12);
    textFont(font);
    text('Sou uma frase', 12, 30);
}
