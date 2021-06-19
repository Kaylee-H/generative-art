var scene1 = true;
var scene2 = false;
var scene3 = false;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
   angleMode(DEGREES);
}

function draw() {
  background(0, 30, 40);
  
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
}









