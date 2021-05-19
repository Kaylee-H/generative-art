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

// let detailY;
// var t;

// function setup() {
//   createCanvas(windowWidth, windowHeight, WEBGL);  
//   stroke(0, 100);
//   noFill();
// }

// function draw() {
//   background(0);

//   let lightX = mouseX - height / 2;
//   let lightY = mouseY - width / 2;

//   ambientLight(255);
//   directionalLight (250,250,250,2,2,2);
//   pointLight (255,255,255,lightX,lightY,255);

//   fill(255,0,0);
//   rotateX(frameCount * 0.01);
//   rotateY(frameCount * 0.01);
//   box(100);

//   fill(0,0,255);
//   rotateX(frameCount * 0.03);
//   rotateY(frameCount * 0.01);
//   box(100);

//   fill(100,100,100);
//   rotateX(frameCount * 0.01);
//   rotateY(frameCount * 0.02);
//   box(100);
//   } 

//     function mousePressed(){
//     if (mouseX < width/2) {
//       translate (100,100);
//       fill(255,0,0);
//       stroke(255,0,0);
//       square(230,190,200);
//     } else if (mouseX <= width*2) {
//       stroke(0,0,255);
//       strokeWeight(5);
     
//     }

//   }

   
// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
// }

var scene1 = true;
var scene2 = false;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
   angleMode(DEGREES)
}

const faces = [
  [0,   0, 0, '255, 0, 0'],
  [0,  90, 0, '0, 255, 0'],
  [0, 180, 0, '255, 0, 0'],
  [0, -90, 0, '0, 255, 0'],
  [90,  0, 0, '0, 0, 255'],
  [270, 0, 0, '0, 0, 255'],
  ];
const edgeLength = 180;
const explodeFactor = 1.2;
const animationFrames = 300;
const transparency = 0.8;

function draw() {
  background(0, 30, 40);

  if (scene1 == true) {
    push();
    fill(0,0,255);
    rotateX(frameCount * 2);
    rotateY(frameCount * 2);
    box(150);
    
    fill(255,0,0);
    rotateX(frameCount * 2);
    rotateY(frameCount * 2);
    box(150);
 
    fill(100,100,100);
    rotateX(frameCount * 2);
    rotateY(frameCount * 2);
    box(150);
    pop();
    // draw scene 1

    // const doneness = min(frameCount/ animationFrames, 1);
    // background('black');
    // noStroke();
    // rotateY(frameCount);
    // faces.forEach(face => {
    //   fill(`rgba(${face[3]}, ${transparency})`);
    //   push();
    //   [rotateX, rotateY, rotateZ].forEach((fn, i) => 
    //     fn(face[i] * doneness));
    //   translate(0, 0, edgeLength / 2 * explodeFactor * doneness);
    //   plane(edgeLength);
    //   pop();
    // });

  } else if (scene2 == true) {
    // draw scene 2
    translate(-100,0, 0);
    push();
    fill(255,0,0);
    rotateZ(frameCount * 2);
    rotateX(frameCount * 2);
    rotateY(frameCount * 2);
    box(150);
    pop();
  
    translate(100, 0, 0);
    push();
    fill(0,0,255);
    rotateZ(frameCount * 2);
    rotateX(frameCount * 2);
    rotateY(frameCount * 2);
    box(150);
    pop();
  
    translate(100, 0, 0);
    push();
    fill(200)
    rotateZ(frameCount * 2);
    rotateX(frameCount * 2);
    rotateY(frameCount * 2);
    box(150);
    pop();
  
    
  } 

}

function keyPressed(keyCode = RIGHT_ARROW) {
  if (scene1 == true) {
      scene2 = true;
    } scene1 = false;
  } 










