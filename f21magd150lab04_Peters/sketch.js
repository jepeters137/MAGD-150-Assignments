function setup() {
  createCanvas(400, 400);
  background(252, 245, 229);
  textSize(32);
  fill(0); 
text('The Pizza Maker 3000!', 30, 50);
textFont('Palatino');
loop();
}
function draw() {
  // Let's start with our pizza crust and spread out some tomato sauce! (Click the mouse to roll out the dough and spread the sauce.)
  if (mouseIsPressed) {
    strokeWeight(3);
    circle(200, 200, 200);
    colorMode(RGB);
    fill(227, 66, 52);
    strokeWeight(2);
    circle(200, 200, 180);
    colorMode(RGB);
    fill(218, 160, 109);
  }
  //Now let's add the cheese and our topping, I chose pepperoni!  (Press any key to sprinkle the cheese and lay down the pepperoni slices.)
  if (keyIsPressed === true) {
    strokeWeight(3);
    circle(200, 200, 170);
    colorMode(RGB);
    fill(164, 42, 4);
    strokeWeight(2);
    circle(150, 175, 20);
    circle(200, 150, 20);
    circle(250, 175, 20);
    circle(150, 225, 20);
    circle(250, 225, 20);
    circle(200, 250, 20);
    circle(200, 200, 20);
    colorMode(RGB);
    fill(250, 218, 94);
  }
}
