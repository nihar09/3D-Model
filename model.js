// Parijat Chatterjee 

var angle = 0;
var cat;
var skin;

function preload() {
  skin = loadImage('cats.jpg');
  cat = loadModel('cat.obj');
}

function setup() {
  createCanvas(700, 500, WEBGL);
}

function draw() {
  background(15,15,59);
  ambientLight(50, 70, 20);
  directionalLight(130, 130, 130, 0, 0, 1);
  translate(0,70,0);
  scale(0.5);
  rotateY(angle);
  texture(skin);
  model(cat);
  angle += 0.03;
}
