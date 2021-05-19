/* Basis: grijs met vierkant in het midden */
// function setup() {
//   createCanvas(windowWidth, windowHeight);
// }

// function draw() {
//   background(150);
//   // stroke(255);
//   // strokeWeight (5);
//   // noFill();
//   // rectMode(CENTER);
//   rect(windowWidth / 2, windowHeight /2, 300, 300);
// }

// function mouseClicked(){
//   background(255,0,0);
// }

let detailY;
var t;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);  
  stroke(0, 100);
  noFill();
}

function draw() {
  background(0);

  let lightX = mouseX - height / 2;
  let lightY = mouseY - width / 2;

  ambientLight(255);
  directionalLight (250,250,250,2,2,2);
  pointLight (255,255,255,lightX,lightY,255);

  fill(255,0,0);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  box(100);

  fill(0,0,255);
  rotateX(frameCount * 0.03);
  rotateY(frameCount * 0.01);
  box(100);

  fill(100,100,100);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.02);
  box(100);
  } 

    function mousePressed(){
    if (mouseX < width/2) {
      translate (100,100);
      fill(255,0,0);
      stroke(255,0,0);
      square(230,190,200);
    } else if (mouseX <= width*2) {
      stroke(0,0,255);
      strokeWeight(5);
     
    }

  }

   
// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
// }



