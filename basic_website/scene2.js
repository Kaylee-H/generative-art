
let r,g,b;
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
   angleMode(DEGREES);
}

function draw() {
  background(0, 30, 40);

    push();
    translate(0,25);
    fill(r,g,b);
    r = random(255);
    g = random(255);
    b = random(255);
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
    fill(0,0,255);
    rotateX(frameCount * 2);
    rotateY(frameCount * 2);
    box(140);
    pop();

}











