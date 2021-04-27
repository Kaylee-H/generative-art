/* 👇 Start writing your p5.js code here */
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0, 100, 0, 1);
  
  orbitControl();
  
  push();
  blendMode(SCREEN);
  stroke(mouseX, 100, 100, 0.1);
  noFill();
  // noStroke();
  for (let i = 0; i < 10; i++) {
    // // strokeCap(ROUND);
    // strokeJoin(ROUND);
    // strokeWeight(10);
    box(100 - i * 1);
  }
  fill(mouseX + 180, 100, 100, 0.1);
  // stroke(0);
  noStroke();
  box(100);
  pop();



// function draw() {
//   background(0);
//   ellipse(width / 2, height / 2, 50, 50);
// }

// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
// }