// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

let particleA;
let particleB;
var paused = false

function setup() {
  createCanvas(640, 360);
  particleA = new Particle(320, 60);
  particleB = new Particle(320, 300);
}

function draw() {

  if (paused) {
    push();
    background('grey') 
    textSize(32);
    textAlign(CENTER, CENTER);
    fill('blue');
    text ('PAUSED', width/2 + 2, height/2 +2)
    fill('rgb(129, 6, 6)');
    text('PAUSED', width/2, height/2)
    pop();
  } else {
  background(255);

  particleA.collide(particleB);

  particleA.update();
  particleB.update();

  particleA.edges();
  particleB.edges();

  particleA.show();
  particleB.show();

  // let speedA = particleA.velocity.mag();
  // let speedB = particleB.velocity.mag();
  // let kinA = 0.5 * particleA.mass * speedA * speedA;
  // let kinB = 0.5 * particleB.mass * speedB * speedB;
  // console.log(kinA + kinB);
  
  
  

  }
}

function keyPressed() {
  if (key === 'p') {
    if (paused === false) {
      paused = true;
    } else {
      paused = false
    }
  }
}





