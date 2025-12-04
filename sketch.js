let bg;
let overgrowth;
let slider;
let ambientsound;

function preload() {
  bg = loadImage('/assets/bg.png');
  overgrowth = loadImage('/assets/bgog.png');
  ambientsound = loadSound('/assets/forest.mp3')
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  ambientsound.loop(); // plays continuously
  ambientsound.setVolume(0.20);

  // Sets min-max and starting value
  slider = createSlider(0, 255, 0);
  slider.position(40, 20);
  slider.size(100)

}

function draw() {
  background(bg);

  // Get slider value
  let opacity = slider.value();

  if (opacity > 0) {
    push();                // save current drawing style
    tint(255, opacity);    // apply alpha
    image(overgrowth, 0, 0, width, height);
    pop();                 // restore drawing style (removes tint)
  }

}