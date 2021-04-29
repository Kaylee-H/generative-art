/* Basis: grijs met vierkant in het midden */
// function setup() {
//   createCanvas(windowWidth, windowHeight);
// }

// function draw() {
//   background(150);
//   stroke(255);
//   strokeWeight (5);
//   noFill();
//   rectMode(CENTER);
//   rect(windowWidth / 2, windowHeight /2, 300, 300);
// }

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
  background(0);

  let locX = mouseX - height / 2;
  let locY = mouseY - width / 2;

  ambientLight(255);
  directionalLight(250, 250, 250, 2, 2, 2);
  pointLight(255, 255, 255, locX, locY, 255);
  sphere(40);

  fill (0);
  stroke(255);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  box(100, 100, 100);

  fill (127,0,127);
  stroke(255);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  box(100, 100, 100);

  fill (100,100,100);
  stroke(255);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.02);
  box(100, 100, 100);

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}