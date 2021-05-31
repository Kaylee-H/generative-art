var scene1 = true;
var scene2 = false;
var scene3 = false;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
   angleMode(DEGREES);
}

function draw() {
  background(0, 30, 40);

  if (scene1 == true) {
    // draw scene 1
    // push();
    // fill(0,0,255);
    // rotateX(frameCount * 2);
    // rotateY(frameCount * 2);
    // box(150);
    
    // fill(255,0,0);
    // rotateX(frameCount * 2);
    // rotateY(frameCount * 2);
    // box(150);
 
    // fill(100,100,100);
    // rotateX(frameCount * 2);
    // rotateY(frameCount * 2);
    // box(150);
    // pop();
    fill(255,0,0);
    box (300);
    console.log('scene1');
 
  } else if (scene2 == true) {
    // draw scene 2
    // translate(600,0,0);
    // push();
    // fill(255,0,0);
    // rotateZ(frameCount * 2);
    // rotateX(frameCount * 2);
    // rotateY(frameCount * 2);
    // box(150);
    // pop();
  
    // translate(300,0,0);
    // push();
    // fill(0,0,255);
    // rotateZ(frameCount * 2);
    // rotateX(frameCount * 2);
    // rotateY(frameCount * 2);
    // box(150);
    // pop();
  
    // translate(300,0,0);
    // push();
    // fill(200)
    // rotateZ(frameCount * 2);
    // rotateX(frameCount * 2);
    // rotateY(frameCount * 2);
    // box(150);
    // pop(); 
    fill(0,0,255);
    box (100);
    console.log('scene2');
   
} else if (scene3 == true) {
  // draw scene 3
  // push();
  // fill(0,0,255);
  // rotateX(frameCount * 2);
  // rotateY(frameCount * 2);
  // box(150);
  
  // fill(255,0,0);
  // rotateX(frameCount * 2);
  // rotateY(frameCount * 2);
  // box(150);

  // fill(100,100,100);
  // rotateX(frameCount * 2);
  // rotateY(frameCount * 2);
  // box(150);
  // pop();
  fill(0,255,0);
  box(50);
  console.log('scene3');
} 

}

function keyPressed() {
  if (keyCode == RIGHT_ARROW) {
      scene2 = true;
    } scene1 = false;
  } 

  function keyPressed() {
    if (keyCode == LEFT_ARROW) {
        scene3 = true;
      } scene1 = false;
    } 










