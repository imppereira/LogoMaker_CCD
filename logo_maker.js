let canvas;
var widthCanvas = 130;
var heightCanvas = 130;

//TEXT
var font;
var textSize;
var textLogo;
var textW;
var xText;
var yText;

//SHAPE
var xShape;
var yShape;
var shapeW;
var shapeH;
var c;
var colorInput1;
var colorInput2;
var shape;

var link = document.createElement('link');
link.type = 'text/css';
link.rel = 'stylesheet';

link.href = "https://fonts.googleapis.com/css2?family=" + randomFont + ":wght@300&display=swap";
document.head.appendChild(link);



function preload() {

}

function setup() {
    canvas = createCanvas(widthCanvas, heightCanvas);
    stroke(255);
    frameRate(30);

    //TEXT
    //TO DO: Ir buscar fonts API
    //font = loadFont(fileRandomFont);

    //font = loadFont("Roboto Flex");

    textLogo = "Olááá";
    textW = textWidth(textLogo);
    xText = random(textW / 2 + 10, widthCanvas - textW / 2 - 10);
    yText = random(10, heightCanvas - 10);

    //TO DO: Alterar tamanho fonte!!
    textSize = 12;
    if (textW > widthCanvas) {
        textSize = 5;
    }

    //SHAPE
    //TO DO: Ir buscar a cor da forma ao input!
    c = color(200, 40, 30);
    //TO DO: Ir buscar imagem à API Noun Project
    //shape = loadImage('assets/laDefense.jpg');
    shapeW = random(widthCanvas / 4, widthCanvas - 10);
    shapeH = random(heightCanvas / 4, heightCanvas - 10);
    xShape = random(shapeW / 2 + 10, widthCanvas - shapeW / 2 - 10);
    yShape = random(shapeH / 2 + 10, heightCanvas - shapeH / 2 - 10);
}

colorInput1 = document.getElementById("colorpicker1");
colorInput2 = document.getElementById("colorpicker2").value;

colorInput1.onchange = function () {
    console.log('CORRRRR COR COR' + colorInput1.value);
}

var colorWell;
var defaultColor = "#0000ff";

window.addEventListener("load", startup, false);

function startup() {
    colorWell = document.querySelector("#colorWell");
    colorWell.value = defaultColor;
    colorWell.addEventListener("input", updateFirst, false);
    colorWell.addEventListener("change", updateAll, false);
    colorWell.select();
}

function updateFirst(event) {
    var p = document.querySelector("p");

    if (p) {
        p.style.color = event.target.value;
    }
}

function updateAll(event) {
    document.querySelectorAll("p").forEach(function (p) {
        p.style.color = event.target.value;
    });
}

function draw() {
    background(255);

    //Text
    TextLogo();

    //Shape
    ShapeLogo();
}

function TextLogo() {
    //TO DO: Preto (ver se há sobreposição com forma preta)
    fill(0);
    textAlign(CENTER);
    //TO DO: Alteração da fonte random API
    textFont(randomFont);
    //textFont('Poppins');
    text(textLogo, xText, yText);
}

function ShapeLogo() {
    fill(0);
    //resize(shapeW, shapeH);
    //image(shape, xShape, yShape);
}


//Population
/*class Population {
    constructor() {
        var generations;
        var fitness;
        var individuals;
        var population_size;

        //Initialise individuals’ genotypes



    }
}*/

