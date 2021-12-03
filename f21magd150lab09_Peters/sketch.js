let playing = false;
let video;
let button;
let soundFile, reverb;

// This is for loading the soundfile to sync with the video.
function preload() {
  soundFile = loadSound("mustache.mp3");
}

function setup() {
  // Here I'm setting up the video and the sound clip I recorded.
  let cnv = createCanvas(200, 100);
  reverb = new p5.Reverb();
  soundFile.disconnect();
  reverb.process(soundFile, 3, 2);
  cnv.mousePressed(playSound);
  video = createVideo(["mirror.mp4"]);
  button = createButton("Play Video");
  button.mousePressed(toggleVid);
}
// Here is the code for the "reverb button."
function draw() {
  let dryWet = constrain(map(mouseX, 0, width, 0, 1), 0, 1);
  reverb.drywet(dryWet);
  background(200);
  text("start vid, then click this sentence.", 10, 20);
  text("reverb percentage: " + round(dryWet * 100) + "%", 10, height - 20);
}
// Here's the code for the video, including a play/pause button.
function toggleVid() {
  if (playing) {
    video.pause();
    button.html("Play");
  } else {
    video.loop();
    button.html("Pause");
  }
}
// This is tied to the sound stuff.
function playSound() {
  soundFile.play();
}
