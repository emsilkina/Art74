let angle = 0;
let radius = 400;
let angleIncrement = 0.1;
let radiusDecrement = 0.5;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  frameRate(200);  
}

function draw() {
  //set the initial x and y coordinates
  let x = windowWidth / 2 + radius * cos(angle);
  let y = windowHeight / 2 + radius * sin(angle);

  //assign a random color to each circle
  let randomR = random(0, 255);
  let randomG = random(0, 255);
  let randomB = random(0, 255);
  
  fill(randomR, randomG, randomB);
  noStroke();

  //draw the circle
  ellipse(x, y, 10, 10);

  //increment the angle and decrement the radius to form a spiral
  angle += angleIncrement;
  radius -= radiusDecrement;

  //once the center is reached, spiral out
  if (radius < 0) {
    let x = windowWidth / 2 + radius * cos(angle);
    let y = windowHeight / 2 + radius * sin(angle);

    let randomR = random(0, 255);
    let randomG = random(0, 255);
    let randomB = random(0, 255);

    fill(randomR, randomG, randomB);
    noStroke();

    ellipse(x, y, 10, 10);

    angle += angleIncrement;
    radius -= radiusDecrement;
  } 
  
  //stop the drawing once the spiral reaches the borders of the window size
  if(x > windowWidth + 100 || y > windowHeight + 100 || x < -100 || y < -100) {
    noLoop();
  }
}
