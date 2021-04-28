/* 👇 Start writing your p5.js code here */

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(200);
  Rect (witdh / 2, height / 2, 50, 50);

}




// let rad = 50; // Width of the shape
// let xpos, ypos; // Starting position of shape

// let xspeed = 1; // Speed of the shape
// let yspeed = 1; // Speed of the shape

// let xdirection = 5; // Left or Right
// let ydirection = 6; // Top to Bottom

// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   colorMode(HSB);
//   frameRate(50);
//   ellipseMode(RADIUS);
//   // Set the starting position of the shape
//   xpos = width / 7;
//   ypos = height / 7;
//   stroke(255)
//   strokeWeight(5);
//   noFill();
// }

// function draw() {
//   background(0);

//   // Update the position of the shape
//   xpos = xpos + xspeed * xdirection;
//   ypos = ypos + yspeed * ydirection;

//   // Test to see if the shape exceeds the boundaries of the screen
//   // If it does, reverse its direction by multiplying by -1
//   if (xpos >= width - rad || xpos <= rad) {
//     xdirection *= -1;
//     stroke(random(5, 245), 255, 255);
//   }
//   if (ypos >= height - rad || ypos <= rad) {
//     ydirection *= -1;
//     stroke(random(5, 245), 255, 255);
//   }

//   // Draw the shape
//   ellipse(xpos, ypos, rad, rad);

// }

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}