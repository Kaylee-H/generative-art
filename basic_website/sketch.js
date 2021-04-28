/* 👇 Start writing your p5.js code here */

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(150);
  stroke(255);
  strokeWeight (5);
  noFill();
  rectMode(CENTER);
  rect(windowWidth / 2, windowHeight /2, 300, 300);
}


// If (mouseX > 200) {
// 	Elipse (300,200,100,100);
// } else {						
// Rect (300,200,100,100)
// }


// function draw() {
//   background(0);
//   color(0);
//   stroke (100,80,100);
//   strokeWeight (7);
  
//   rect(windowWidth / 2 , windowHeight / 2, 150, 150);
// }


// // HSL color can also be specified by value
// let c = color('hsl(160, 100%, 50%)');
// noStroke();
// fill(c);
// rect(0, 10, 45, 80); // Draw rectangle
// c = color('hsla(160, 100%, 50%, 0.5)');
// fill(c);
// rect(55, 10, 45, 80); // Draw rectangle

// }



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

// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
// }