let bg;
let overgrowth;
let slider;
let ambientsound;
let begin = false; 
let font;

function preload() {
  bg = loadImage('assets/bg.png'); // Loads Background
  overgrowth = loadImage('assets/bgog.png'); // Loads overgrown layer
  ambientsound = loadSound('assets/forest.mp3'); // Loads ambient sounds
  font = loadFont('assets/Pixeled.ttf') // Loads custom font
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Slider setup
  slider = createSlider(0, 255, 0); //Creates physical slider
  slider.position(65, 30); // Sets Slider position
  slider.size(100); // Sets Slider size
}

function draw() {
  background(bg);

  // Allows audio to play in browser
  if (!begin) { // If false ...
    if (frameCount % 60 < 30) {
    fill(255);
    textAlign(CENTER, CENTER); //Centers text
    textFont(font);
    stroke(0)
    strokeWeight(3)
    textSize(20);
    text("Click to start", width / 2, height / 2);
    return; // 
    }
  }

  // Slider transparceny setup
  let opacity = slider.value();

  if (opacity > 0) {
    push(); // Stores tint and image
    tint(255, opacity); // Adds tint/transparency valuie
    image(overgrowth, 0, 0, width, height);
    pop(); //Restores 
  }
}

function mousePressed() { // Mouse Press event
  if (!begin) { // If false, mouse press sets begin to true and activates sound
    begin = true;
    ambientsound.loop(); // Loops sound
    ambientsound.setVolume(0.15); // Sets Volume
  }
}