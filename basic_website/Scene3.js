var ball=[];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0, 30, 40);
 for(x=0;x<ball.length;x++){
   ball[x].display();
    ball[x].move();
  }
}

function mousePressed(){
  ball[ball.length] =new BouncingBall(mouseX,mouseY,random(width),random(height));
  
}
class BouncingBall{
 constructor(tempx,tempy){
  this.x=tempx;
   this.y=tempy;
    this.d=20;
   this.w=20;
    this.h=20;
   this.xspeed=1;
   this.yspeed=1;
   this.xdirection=2;
   this.ydirection=2;
 }
  display(){
   rect(this.x,this.y,this.w, this.h); 
  } 

  move(){
   this.x+=this.xspeed*this.xdirection;
    this.y+=this.yspeed*this.ydirection;
    if(this.x>width||this.x<0){
      this.xdirection=-this.xdirection;
    }
    if (this.y>height||this.y<0){
      this.ydirection=-this.ydirection;
    }
  }
  
}










