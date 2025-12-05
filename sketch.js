let bg;
let overgrowth;
let slider;
let ambientsound;
let started = false; // track if user has clicked

function preload() {
  bg = loadImage('assets/bg.png');
  overgrowth = loadImage('assets/bgog.png');
  ambientsound = loadSound('assets/forest.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Slider setup
  slider = createSlider(0, 255, 0);
  slider.position(40, 20);
  slider.size(100);
}

function draw() {
  background(bg);

  // Show "Click to start" until user interacts
  if (!started) {
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(24);
    text("Click to start", width / 2, height / 2);
    return; // stop drawing rest until started
  }

  // Get slider value
  let opacity = slider.value();

  if (opacity > 0) {
    push();
    tint(255, opacity);
    image(overgrowth, 0, 0, width, height);
    pop();
  }
}

function mousePressed() {
  if (!started) {
    started = true;
    ambientsound.loop();
    ambientsound.setVolume(0.20);
  }
}