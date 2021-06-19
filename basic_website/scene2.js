

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
   angleMode(DEGREES);
}

function draw() {
  background(0, 30, 40);

    push();
    translate(0,25);
    fill(0,0,255);
    rotateX(frameCount * 2);
    rotateY(frameCount * 2);
    box(140);
    pop();
    
    push();
    translate(-100,25);
    fill(255,0,0);
    rotateX(frameCount * 2);
    rotateY(frameCount * 2);
    box(140);
    pop();
 
    push();
    translate(100,25);
    fill(100,100,100);
    rotateX(frameCount * 2);
    rotateY(frameCount * 2);
    box(140);
    pop();

}











