let img;
let sliderGroup = [];
let X;
let Y;
let Z;
let centerX;
let centerY;
let centerZ;
let h = 20;

function setup() {
  createCanvas(500, 500, WEBGL);
  // All textures were sourced from the game "Minecraft" created by Mojang.
  img1 = loadImage("dirt_texture.png");
  img2 = loadImage("glass_texture.png");
  img3 = loadImage("cobblestone_texture.png");

  // Camera Settings Garble
  for (var i = 0; i < 6; i++) {
    if (i === 2) {
      sliderGroup[i] = createSlider(10, 400, 200);
    } else {
      sliderGroup[i] = createSlider(-400, 400, 0);
    }
    h = map(i, 0, 6, 5, 85);
    sliderGroup[i].position(10, height + h);
    sliderGroup[i].style("width", "80px");
  }
}

function draw() {
  // Directional Light Settings
  let dirX = (mouseX / width - 0.5) * 2;
  let dirY = (mouseY / height - 0.5) * 2;
  directionalLight(250, 250, 250, -dirX, -dirY, -1);
  noStroke();
  sphere(40);

  // Ambient Light Settings
  ambientLight(50);

  // Camera Settings Garble Part 2, Electric Boogaloo
  X = sliderGroup[0].value();
  Y = sliderGroup[1].value();
  Z = sliderGroup[2].value();
  centerX = sliderGroup[3].value();
  centerY = sliderGroup[4].value();
  centerZ = sliderGroup[5].value();
  camera(X, Y, Z, centerX, centerY, centerZ, 0, 1, 0);
  noStroke();
  fill(255, 102, 94);
  box(0);

  background(15);

  // Glass Square
  translate(85, 100, 0);
  push();
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  texture(img2);
  box(100, 100, 100);
  pop();

  // Dirt Sphere
  noStroke();
  translate(-200, -150, 0);
  push();
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  texture(img1);
  sphere(70);
  pop();

  // Cobblestone Cylinder
  translate(250, -50, 0);
  push();
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  texture(img3);
  cylinder(70, 70);
  pop();
}
