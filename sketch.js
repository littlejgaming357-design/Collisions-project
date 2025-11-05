// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

let particles = [];
var paused = false

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 100; i++){
    let x = random(width)
    let y = random(height)
    particles.push(new Particle(x,y))
  }
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

  //particleA.collide(particleB);

  for (let i = 0; i < particles.length; i++){
    let particleA = particles[i];
    for (let j = i + 1; j < particles.length; j++){
      particleB = particles[j]
      particleA.collide(particleB); 
    }
  }
  for (let particle of particles) {
  particle.update();
  particle.edges();
  particle.show();
  }
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





