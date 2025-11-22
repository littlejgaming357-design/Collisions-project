// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

let particles = [];
var paused = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0, 100, 0);
  for (let i = 0; i < 50; i++){
    let x = random(width)
    let y = random(height)
    particles.push(new Particle(x,y))
  }
}

function draw() {

  if (paused) {
    //draw paused stuff
    drawPausedScreen();
  } else {
  background(backgroundColor);

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
  backGroundButton()
  
  

  }
}

function drawPausedScreen() {

  let resCY = height / 2 + 130

  push();
  textSize(130);
  textAlign(CENTER, CENTER);
  fill('blue');
  textFont('Courier New')
  text ('PAUSED', width/2 + 2, height/2 +2);
  fill('rgb(129, 6, 6)');
  text('PAUSED', width/2, height/2);
  pop();

  push();
  rectMode(CENTER);
  fill('gray');
  rect(width / 2, resCY, 400, 100);
  pop();

  push();
  textAlign(CENTER);
  fill(139, 0, 0);
  textSize(100);
  textFont('Courier New')
  textStyle(BOLD);
  text('RESUME', width/2, resCY + 25);
  pop();

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function keyPressed() {
  if (key === 'p') {
    paused = !paused;
  }
}

function changeBackgroundColor() {
  // Example: Change to a random color
  backgroundColor = color(random(255), random(255), random(255));
}

function mousePressed() {

  let resCY = height / 2 + 130
  let redCY = height/2 + 280
  
  if(mouseX >= width/2 - 200 &&
     mouseY >= resCY - 50 &&
     mouseX <= width/2 + 200 &&
     mouseY <= resCY + 50
  ) {
    paused = false;
  } else {
  
  if(mouseX >= width/2 - 300 &&
     mouseY >= redCY - 50 &&
     mouseX <= width/2 + 300 &&
     mouseY <= redCY + 50) {
    changeBackgroundColor(r, g, b);
  }
  }
}

function backGroundButton() {
  
  let redCY = height/2 + 280
  
  push();
  rectMode(CENTER)
  fill(25, 255, 255)
  rect(width / 2, redCY , 600, 100);
  pop();
  
  push();
  textSize(43);
  textAlign(CENTER, CENTER);
  textStyle(BOLD);
  fill('blue');
  textFont('Courier New')
  text ('Change Background Color', width/2 + 2, height/2 + 280 +2);
  fill('rgb(129, 6, 6)');
  text('Change Background Color', width/2, height/2 + 280);
  pop();
  
}








