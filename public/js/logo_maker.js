let canvas;
var widthCanvas;
var heightCanvas;

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

//ICONS 
let icon; 

function loadInfo () {
    fetch('/dog').then(function(res) {
       return res.json();
    }).then(function (data) {
        console.log(data);
        data.forEach(function (el) {
            drawIcon(el.preview_url);
        });
    }).catch(function (err) {
        console.error(err);
    })
}

function preload() {
}

function setup() {

    // widthCanvas = 100;
    // heightCanvas = 100;
    // canvas = createCanvas(widthCanvas, heightCanvas);
    stroke(255);
    frameRate(30);

    
    loadInfo();

    //TEXT
    console.log('font ttf ', localStorage.getItem("fileRandomFontStorage"));
    font = loadFont(localStorage.getItem("fileRandomFontStorage"));


    textLogo = "GOATS";
    textW = textWidth(textLogo);
    // xText = random(textW / 2 + 10, widthCanvas - textW / 2 - 10);
    // yText = random(10, heightCanvas - 10);

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

function draw() {
    // background(255);

    // //Text
    // // TextLogo();

    // //Shape
    // ShapeLogo();
}


function TextLogo() {
    //TO DO: Preto (ver se há sobreposição com forma preta)
    fill(0);
    textAlign(CENTER);
    textFont(font);
    text(textLogo, xText, yText);
}


//"canvas" onde irá ser desenhado o icon + texto
function drawIcon(url){
    let boxArea = createDiv();
    let icon = createImg(url);
    let text = createSpan(textLogo);

    boxArea.style('width', '200px');
    boxArea.style('height', '200px');

    xText = random(text.width/2, boxArea.width - text.width);
    yText = random(10, boxArea.height);

    // xText = random(textW / 2 + 10, widthCanvas - textW / 2 - 10);
    // yText = random(10, heightCanvas - 10);
    
    text.position(xText, yText);
    text.style('font-family', loadFont(localStorage.getItem("fileRandomFontStorage")));

    text.parent(boxArea);
    icon.parent(boxArea);
}

// colorInput1 = document.getElementById("colorpicker1");
// colorInput2 = document.getElementById("colorpicker2").value;

// colorInput1.onchange = function () {
//     console.log('CORRRRR COR COR' + colorInput1.value);
// }

/*var colorWell;
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
}*/