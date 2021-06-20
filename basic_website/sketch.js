
let r, g, b;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
   angleMode(DEGREES);
}

function draw() {
  background(0, 30, 40);
  
    push();
    fill(255,0,0);
    rotateX(frameCount * 2);
    rotateY(frameCount * 2);
    box(150);
    
    fill(r,g,b);
    r = random(255);
    g = random(255);
    b = random(255);
    rotateX(frameCount * 2);
    rotateY(frameCount * 2);
    box(150);

    fill(0,0,255);
    rotateX(frameCount * 2);
    rotateY(frameCount * 2);
    box(150);
    pop();
}









