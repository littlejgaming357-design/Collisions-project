// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

let particleA;
let particleB;
let particleD;
var paused = false

function setup() {
  createCanvas(windowWidth, windowHeight);
  particleA = new Particle(320, 60);
  particleB = new Particle(320, 300);
  particleD = new Paricle(320, 200)
}

function draw() {

  if (paused) {
    push();
    textSize(32);
    textAlign(CENTER, CENTER);
    fill('blue');
    text ('PAUSED', width/2 + 2, height/2 +2)
    fill('rgb(129, 6, 6)');
    text('PAUSED', width/2, height/2)
    pop();
  } else {
  background(240);

  particleA.collide(particleB);

  particleA.update();
  particleB.update();
  particleD.update();

  particleA.edges();
  particleB.edges();
  particleD.edges();

  particleA.show();
  particleB.show();
  particleD.show();

  // let speedA = particleA.velocity.mag();
  // let speedB = particleB.velocity.mag();
  // let kinA = 0.5 * particleA.mass * speedA * speedA;
  // let kinB = 0.5 * particleB.mass * speedB * speedB;
  // console.log(kinA + kinB);
  
  
  

  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
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





