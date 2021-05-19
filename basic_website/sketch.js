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

/*** GENERATIVE ART ***/
  // var t;
  // var R;
  // var G;
  // var B;

  // function setup() {
  //   createCanvas(windowWidth, windowHeight,WEBGL);
  //   background(0);
  //   t = 0;
  // }

  // function draw() {

  //   translate (-width /2,-height/2,0);
  //   stroke(3,18);
  //   R = random (255);
  //   B = random(100);
  //   G = random(100,200);
  //   noFill();

  //   var x1 = width * noise(t + 15);
  //   var x2 = width * noise(t + 25);
  //   var x3 = width * noise(t + 35);
  //   var x4 = width * noise(t + 45);
  //   var y1 = height * noise(t + 55);
  //   var y2 = height * noise(t + 65);
  //   var y3 = height * noise(t + 75);
  //   var y4 = height * noise(t + 85);

  //   bezier(x1, y1, x2, y2, x3, y3, x4, y4);
  //   endShape(CLOSE);
  //   t += 0.005;

  //   if (frameCount % 600 == 0) {
  // 	background(0);
  //   }
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

let balls = [];

// Image by Pixabay https://pixabay.com/users/OpenClipart-Vectors-30363
// Sound by Johan Deecke https://freesound.org/people/JohanDeecke/sounds/369528/
let explosion, Bang;

function preload() {
  // Load the assets used in the sketch so they're ready by setup()
  explosion = loadImage("Explo.jpg");
  bang = loadSound("Bang.wav");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);


  // Display all balls, update their positions
  for (let ball of balls) {
    ball.display();
    ball.update();

    // Check for any collisions
    for (let other of balls) {
      if (ball !== other && ball.intersects(other)) {
        // If there's an intersection, set the 'alive' variable to false
        ball.alive = false;
        other.alive = false;

        // Draw the explosion at the midpoint of the collision
        let midX = (ball.x + other.x) / 2;
        let midY = (ball.y + other.y) / 2;
        image(explosion, midX - explosion.width / 2, midY - explosion.height / 2);
      
        // Play a sound
        Bang.play();
      }
    }
    // Remove all the dead balls from the array by checking their 'alive' variable
    balls = balls.filter(alive);
  }  
}

function alive(ball) {
  // Used to filter the array
  return ball.alive;
}

function mousePressed() {
  balls.push(new Ball(mouseX, mouseY, random(-4, 4), random(-4, 4)));
}

class Ball {
  constructor(x, y, xSpeed, ySpeed, r = 20) {
    this.x = x;
    this.y = y;
    this.xSpeed = xSpeed
    this.ySpeed = ySpeed;
    this.r = r;
    this.alive = true;  // All balls are alive until they hit another one
    
    // The balls do funny things when they're created on the extreme edges,
    // so fix that potential problem by constraining the object's x and y
    this.x = constrain(this.x, this.r * 2, width - this.r * 2);
    this.y = constrain(this.y, this.r * 2, height - this.r * 2);
  }

  display() {
    // Display the ball
    noStroke();
    fill(100, 186, 191);
    ellipse(this.x, this.y, this.r * 2);
  }

  update() {
    // Move the ball
    this.bounce();
    this.x += this.xSpeed;
    this.y += this.ySpeed;
  }

  bounce() {
    // Bounce the balls off the sides and top/bottom
    
    // Check left and right sides
    if (this.x - this.r < 0 || this.x + this.r > width) {
      this.xSpeed *= -1;
    }
    // Check top and bottom
    if (this.y - this.r < 0 || this.y + this.r > height) {
      this.ySpeed *= -1;
    }
  }

  intersects(other) {
    // Determine whether the current ball intersects with another one
    let d = dist(this.x, this.y, other.x, other.y);
    return (d < this.r + other.r);
  }
}

