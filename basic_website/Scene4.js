let balls = [];
let vorms = [];
let r, g, b;
let explosion; 
let bang;

// function preload() {
//   explosion = loadImage('file:///Users/kheilijgers/Documents/HvA/Minor%20VID/Generative%20art/%3F/generative-art/basic_website/Gek.png')
//   // bang = loadSound('Raar.wav');
// }

function setup() {
  createCanvas(windowWidth, windowHeight);
  r = random(255);
  g = random(255);
  b = random(255);
}

function draw() {
  background(0, 30, 40);

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
        // image(explosion, midX - explosion.width / 2, midY - explosion.height / 2);
      
        // Play a sound
        // bang.play();
      }
    }
    // Remove all the dead balls from the array by checking their 'alive' variable
    balls = balls.filter(alive);
  }  
  
  
  for (let vorm of vorms) {
    vorm.display();
    vorm.update();

    // Check for any collisions
    for (let other of vorms) {
      if (vorm !== other && vorm.intersects(other)) {
        // If there's an intersection, set the 'alive' variable to false
        vorm.alive = false;
        other.alive = false;

        // Draw the explosion at the midpoint of the collision
        let midX = (vorm.x + other.x) / 2;
        let midY = (vorm.y + other.y) / 2;
        // image(explosion, midX - explosion.width / 2, midY - explosion.height / 2);
      
        // Play a sound
        // bang.play();
      }
    }
    // Remove all the dead balls from the array by checking their 'alive' variable
    vorms = vorms.filter(alive);
  } 
}

function alive(ball) {
  // Used to filter the array
  return ball.alive;
}
function alive(vorm) {
  // Used to filter the array
  return vorm.alive;
}

// function mousePressed() {
//   balls.push(new Ball(mouseX, mouseY, random(-4, 4), random(-4, 4)));
//     r = random(255);
//     g = random(255);
//     b = random(255);
// }

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
    fill(r, g, b);
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

class vorm {
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
    fill(r, g, b);
    rect(this.x, this.y, 50,50);
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
function mousePressed() {
  if(mouseX > 250){
    vorms.push(new vorm (mouseX, mouseY, random(-4, 4), random(-4, 4)));
    r = random(255);
    g = random(255);
    b = random(255);
  }
  if(mouseY < 250) {
    balls.push(new Ball(mouseX, mouseY, random(-4, 4), random(-4, 4)));
    r = random(255);
    g = random(255);
    b = random(255);
  }
}