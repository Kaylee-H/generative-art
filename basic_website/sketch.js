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

let isOn1 = false;
let hasLeft1 = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  //block1:
        push();
        fill(0);
        stroke(255);
        rect(0,0, windowWidth/3, windowHeight);
      	pop();
        
        //block2:
        push();
        fill(0);
        stroke(255);
        rect(windowWidth/3,0, windowWidth/3, windowHeight);
        pop();
        
        //block3:
        push();
        fill(0);
        stroke(255);
        rect(windowWidth*2, 0, windowWidth/3, windowHeight);
        pop();
  
  fill(100, 0, 100);
  stroke(255);
  background(0);

  if (mouseX < width / 3 ) {
    if(hasLeft1) {
      isOn1 = !isOn1;
      hasLeft1 = false;
    }

  } else if (mouseX < width / 3) {
    hasLeft1 = false;
    rect(0, 0, width / 3, height);

  }  else if (mouseX <= width * 2 / 3) {
    hasLeft1 = false;
    rect(width / 3, 0, width / 3, height);

  } else {
    hasLeft1 = false;
    rect(width * 2 / 3, 0, width / 3, height);
  }

}

  
 



//   let locX = mouseX - height / 2;
//   let locY = mouseY - width / 2;

//   ambientLight(255);
//   directionalLight(250, 250, 250, 2, 2, 2);
//   pointLight(255, 255, 255, locX, locY, 255);

//   translate(-100, 0, 0);
//   fill (0);
//   stroke(255);
//   rotateX(frameCount * 0.01);
//   rotateY(frameCount * 0.01);
//   box(100, 100, 100);

//   fill (127,0,127);
//   stroke(255);
//   rotateX(frameCount * 0.01);
//   rotateY(frameCount * 0.01);
//   box(100, 100, 100);
 
//   fill (100,100,100);
//   stroke(255);
//   rotateX(frameCount * 0.01);
//   rotateY(frameCount * 0.02);
//   box(100, 100, 100);
// }

// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
// }