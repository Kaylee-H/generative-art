/* 👇 Start writing your p5.js code here */

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(200,200,100);
  ellipse(width / 2, height / 2, 50, 50);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}