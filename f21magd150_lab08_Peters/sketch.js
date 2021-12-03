var fade;
var fadeAmount = 1;

let yoda, wattambor;
let font1, font2;

function preload() {
  yoda = loadImage("yoda.png");
  wottambor = loadImage("wottambor.png");
  font1 = loadFont("Starjedi.ttf");
  font2 = loadFont("comicsans.ttf");
}

function setup() {
  createCanvas(400, 500);
  fade = 0;
}

function draw() {
  background(0);
  image(wottambor, 150, 200);
  image(yoda, 0, 300);
  colorMode(RGB);
  fill(255, 255, 0);
  textSize(50);
  textFont(font1);
  text("Star Wars:", 40, 90);
  textSize(25);
  textAlign(LEFT);
  textFont(font2);
  text("Yoda Commits War Crimes", 60, 120);
  textSize(20);
  textFont(font2);
  fill(255, 255, 0, fade);
  text("coming never lol.", 125, 450);
  if (fade < 0) fadeAmount = 1;

  if (fade > 255) fadeAmount = -10;

  fade += fadeAmount;
  print(fade);
}
