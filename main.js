var bird;
var pipes = [];
var score = 0;

var backimg, backimg2,birdImg,pipeImg, pipeRevImg;
function preload() {
  backimg = loadImage("assets/flappy_bg.jpg");
  backimg2 = loadImage("assets/gameover.jpg");
  birdImg= loadImage("assets/Bird.png");
  pipeImg= loadImage("assets/pipes.png");
  pipeRevImg= loadImage("assets/pipe_rev.png");
}
function setup() {
  createCanvas(600, 500);
  bird = new Bird();
  pipes.push(new Pipe());
}
function draw() {
  background(backimg);
  for (var i = pipes.length - 1; i >= 0; i--) {
    pipes[i].show();
    pipes[i].update();
    if (pipes[i].hits(bird)) {
      noLoop();
      background(backimg2);
      textSize(56);
      
      text("score : " + score, 40, 40);
      setTimeout(() => {
        location.reload();
      }, 1000);
    }
    if (pipes[i].offscreen()) {
      pipes.splice(i, 1);
      score++;
    }
  }
  bird.update();
  bird.show();
  if (frameCount % 100 == 0) {
    pipes.push(new Pipe());
  }
}
function keyPressed() {
  if (key == " ") {
    bird.up();
  }
}
