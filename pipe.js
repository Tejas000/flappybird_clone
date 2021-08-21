function Bird() {
    this.y = height / 2;
    this.x = 64;
    this.r = 50;
  
    this.gravity = 0.6;
    this.velocity = 0;
    this.lift = -16;
    this.show = function () {
      fill(255);
      push();
      imageMode(CENTER);
      translate(this.x, this.y);
      image(birdImg, 0, 0, this.r, this.r);
      pop();
    };
    this.up = function () {
      this.velocity += this.lift;
    };
    this.update = function () {
      print(this.velocity);
  
      this.velocity += this.gravity;
      this.velocity *= 0.9;
      this.y += this.velocity;
      if (this.y > height) {
        this.y = height;
        this.velocity = 0;
      }
      if (this.y < 0) {
        this.y = 0;
        this.velocity = 0;
      }
    };
  }
  