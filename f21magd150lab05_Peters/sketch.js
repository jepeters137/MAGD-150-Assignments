var rectcolor = "black";
var angle = 0.0;
var offset = 255;
var scalar = 40;
var speed = 0.05;
function setup() {
  createCanvas(500, 500);
  colorMode(RGB);
  background(128, 128, 128);
}
function draw() {
  strokeWeight(3);
  colorMode(RGB);
  fill(140, 123, 108);
  rect(100, 150, 300, 200);
  strokeWeight(2);
  colorMode(RGB);
  fill(64, 60, 52);
  rect(115, 165, 210, 170, 20);
  colorMode(RGB);
  if (rectcolor == "black") {
    fill(0);
  }
  if (rectcolor == "white") {
    fill(255)
  }
  rect(120, 170, 200, 160, 15);
  colorMode(RGB);
  fill(64, 60, 52);
  rect(335, 165, 50, 170, 20);
  colorMode(RGB);
  fill(217, 199, 184);
  circle(360, 200, 30);
  colorMode(RGB);
  fill(217, 199, 184);
  rect(345, 265, 30);
  fill(0);
  textSize(14);
  text("On", 350, 205);
  fill(0);
  textSize(14);
  text("Off", 350, 285);
  var y1 = offset + sin(angle) * scalar;
    var y2 = offset + sin(angle + 0.4) * scalar;
    var y3 = offset + sin(angle + 0.8) * scalar;
    noFill();
  strokeWeight(4);
  ellipse(175, y1, 40, 40);
    ellipse(225, y2, 40, 40);
    ellipse(275, y3, 40, 40);
    angle += speed;
}

function mouseClicked() {
  if (rectcolor == "black") {
    rectcolor = "white";
  } else {
    if (rectcolor == "white") {
      rectcolor = "black";
    }
  }
}
