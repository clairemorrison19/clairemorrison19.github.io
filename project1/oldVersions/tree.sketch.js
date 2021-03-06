
var tree;
var i = 75
var k = 25
var r = 105
var d = 30
var lm = 200 //leaf movement
var lc = 0 //leaf (center?circle?)
var particles = [];
var mg = 0.05
var radius = 5

function setup() {
  createCanvas (windowWidth, windowHeight)
  background (200, 200, 255)
  tree = new Tree(width/2, height/2 + 200);
  particles = new Particle(201, 177, +1)
}

function draw() {
  WateringCan();
  if (mouseX >= 25 && mouseX <= 75 && mouseY >= 25 && mouseY <= 75) { //location of Watering can
    pour();
    tree.leaves();
    tree.display();
    tree.grow();
    tree.leaves();
    tree.name();
  }
  else {
    tree.display();
    tree.name();
  }
  for(var i = 0; i < particles.length; i++) {
    particles[i].display();
    particles[i].move();
  }
  if (r == 201) {
    particles.display()
    particles.move();
  }
  //console.log(lm)
  // console.log(i);
  // console.log(k);
  // console.log(r);
  // console.log(d);
}

function Particle(locx, locy, direction) {
  this.loc = createVector(locx, locy);
  this.direction = direction;
  this.velocity = createVector(0,0)
  this.display = function(){
    fill(0,0,255)
    ellipse(this.loc.x, this.loc.y, radius)
  }
  this.move = function() {
    this.velocity.add(0,mg);
    this.loc.add(this.velocity.x, this.velocity.y);
  }
}

function WateringCan() {
  fill(100);
  ellipse (50.5, 25, 50, 35);
  fill(200,200,255);
  ellipse (50, 25, 35, 20);
  fill(100);
  rect (25, 25, 50, 50);
  quad (75, 40, 100, 30, 110, 30, 75, 55)
}

// function leafGrow(){
//   fill(200, 200, 255)
//   quad ()
// }

function Tree(x,y) {
  this.x = x;
  this.y = y;
  this.w = 25;
  this.h = 75;
  this.display = function() {
    fill (63, 30, 4)
    rect (this.x, this.y, this.w, this.h)
  }
  this.name = function() {
    textSize(25);
    text("Oak Tree", width/2 - 50, 50)
  }
  this.grow = function() {
    if (this.h <= 300) {
      this.h +=1/10;
      this.w+=1/60;
      this.x -=1/120;
      this.y -=1/10;
      //this.y -=1/4;
    }
    else {
    }
  }
  this.leaves = function() {
    fill(random(0,80), random(0,255), 0);
    ellipse (random(this.x + this.w + lc, this.x - lc), random(this.y, this.y - lm), random(5,20), random(5,20));
    lm-=1/2000;
    if (lm >= 199) {
      lc+=1/15;
    }
    else if (lm >=198.5 && lm <= 199) {
    }
    else if (lm >= 197.5 && lm <= 198.5){
      lc-=1/20;
    }
    else{
    }
  }
}

function pour() {
  noStroke();
  fill (0, 0, 255)
  //var r = 105
  //var d = 30
  ellipse(r, d, 5, 5)
  if (r <= 110) {
    r+=2;
    d--;
    ellipse(r, d, 5, 5)
  }
  else if(110 <= r && r<= 130){
    r++;
  }
  else if(130<= r && r <= 160) {
    r++;
    d++;
  }
  else if (160 <= r && r <= 200){
    r++;
    d+= 3;
  }
  //else if (200 <= r && r <= )
  else if (r == 200) {
    particles.display();
    particles.move();
  }
  else{
  }
  ellipse (r,d, 5, 5)
}
