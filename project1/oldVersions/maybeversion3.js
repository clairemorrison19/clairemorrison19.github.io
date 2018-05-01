var tree;
var i = 75;
var k = 25;
var r = 105;
var d = 30;
var lm = 200; //leaf movement
var lc = 0; //leaf (center?circle?)
var flower;
var stemColor = 75;
var particles = [];
var mg = 0.05;
var radius = 5;
var isTree = false;
var isFlower = false;


function setup() { //merged
  createCanvas (windowWidth, windowHeight);
  background (200, 200, 255);
  angleMode (DEGREES);
  tree = new Tree(width/2, height/2 + 200);
  flower = new Sunflower(width/6, height/2 + 219);
  particles = new Particle(201, 177, +1);
}

function draw() {
  WateringCan();
  TreeSeeds();
  SunflowerSeeds();
  mouseClicked();
  if (isTree === true){
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
  }
  if (isFlower === true){
    if (mouseX >= 25 && mouseX <= 75 && mouseY >= 25 && mouseY <= 75) { //location of Watering can
      pour();
      flower.noPastPetals();
      flower.leaves();
      flower.display();
      flower.petals();
      flower.head();
      flower.name();
      flower.grow();
      flower.pot();
    }
    else {
      flower.display();
      flower.petals();
      flower.head();
      flower.name();
      flower.pot();
    }
  }
  for(var i = 0; i < particles.length; i++) {
    particles[i].display();
    particles[i].move();
  }
  if (r == 201) {
    particles.display()
    particles.move();
  }
}

//*************************** \/ \/ \/ \/ \/ WORK HERE \/ \/ \/ \/ \/ ********************************************************
function mouseClicked() {
  if(mouseIsPressed){
    if(mouseX > 25 && mouseX < 45 && mouseY > 85 && mouseY < 105){
      isTree = true;
    }
    else if(mouseX < 25 || mouseX > 45 || mouseY < 85 || mouseY > 105){
      isTree = false;
    }
  }
  if(mouseIsPressed){
    if(mouseX > 55 && mouseX < 75 && mouseY > 85 && mouseY < 105){
      isFlower = true;
    }
    else if(mouseX < 55 || mouseX > 75 || mouseY < 85 || mouseY > 105){
      isFlower = false;
    }
  }
}

// function choose() {
//   ...
// }

function TreeSeeds() {
  fill (100, 255, 100);
  rect (25, 85, 20, 20);
  fill(0);
  textSize(15);
  text ("T", 27, 85, 20, 20);
}

function SunflowerSeeds() {
  fill(255, 255, 0);
  rect(55, 85, 20, 20);
  fill(0);
  textSize(15);
  text("S", 57, 85, 20, 20);
}

function WateringCan() {
  strokeWeight(stroke(1));
  stroke(75);
  fill(100);
  ellipse (50.5, 25, 50, 35);
  fill(200,200,255);
  ellipse (50, 25, 35, 20);
  fill(100);
  rect (25, 25, 50, 50);
  quad (75, 40, 100, 30, 110, 30, 75, 55);
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

function Tree(x,y) {
  this.x = x;
  this.y = y;
  this.w = 25;
  this.h = 75;
  this.display = function() {
    fill (63, 30, 4);
    noStroke();
    rect (this.x, this.y, this.w, this.h);
  }
  this.name = function() {
    textSize(25);
    text("Oak Tree", width/2 - 50, 50);
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

function Sunflower(x,y) {
  this.x = x;
  this.y = y;
  this.w = 5;
  this.h = 25;
  this.display = function() {
    strokeWeight(stroke(1.5))
    stroke(0, 150, 0)
    fill (0, 200, 0)
    //for(var stemColor = 255; stemColor >= 0; stemColor -=40){
    //  fill (0, 255, stemColor)
      //stemColor -=40;
    //}
    rect (this.x, this.y, this.w, this.h)
  }
  this.head = function() {
    strokeWeight(stroke(5));
    stroke (50, 20, 0)
    fill (90, 50, 0)
    ellipse (this.x + this.w/2, this.y - 5, this.w*1.75, this.w*1.75)
  }
  this.name = function() {
    textSize(25);
    text("Sunflower", width/2 - 50, 50);
  }
  this.grow = function() {
    if (this.h <= 70) {
      this.h +=1/10;
      this.w +=1/75;
      this.x -=1/120;
      this.y -=1/10;
    }
    else if (70 <= this.h && this.h <= 200) {
      this.h +=1/10;
      this.y -= 1/10;
    }
  }
  this.petals = function() {
    // strokeWeight(stroke(1))
    // fill(255, 255, 0);
    push();
    translate(this.x + this.w/2, this.y - this.w/2);
    //for (var t = 0; t <360; t += 11.25) {
    for (var t= 0; t <360; t += 22.5) {
      rotate (t);
          // \/ \/ \/ getting rid of the outline slidng marks
      // fill (200, 200, 255)
      // noStroke();
      // ellipse(0, -10, 7.75, -9-this.w)
      //fill (245 - t/11.25, 255, 0 + t/11.25*3)
      strokeWeight(stroke(1))
      fill(255,255,0)
      ellipse(0, -10, 8, -15-this.w);
      // fill (200, 200, 255)
      // noStroke();
      // ellipse(0, -9, 5, -15+t/2)
    }
    pop();
  }
  this.noPastPetals = function() {
    fill (200, 200, 255);
    rect (this.x - 50, this.y - 110, 115, this.h + 150)
  }
  this.leaves = function() {
    if (this.h >= 40) {
      strokeWeight(stroke(10));
      stroke (0, 150, 0);
      fill (0, 200, 0);
      ellipse (this.x - this.w, this.y + 40, this.w*16/17 + 10, this.w*18/19 + 2.5);
    }
    if (this.h >= 70) {
      strokeWeight(stroke(10));
      stroke (0, 150, 0);
      fill (0, 200, 0);
      ellipse (this.x + 25, this.y + 70, this.w*8/9 + 15, this.w*12/13 + 5);
    }
    if (this.h >= 115) {
      strokeWeight(stroke(10));
      stroke (0, 150, 0);
      fill (0, 200, 0);
      ellipse (this.x - this.w, this.y + 115, this.w*4/5 + 20, this.w*8/9 + 7.5);
    }
    if (this.h >= 165) {
      strokeWeight(stroke(10));
      stroke (0, 150, 0);
      fill (0, 200, 0);
      ellipse (this.x + 25, this.y + 165, this.w*2/3 + 25, this.w*5/6 + 10);
    }
  }
  this.pot = function() {
    fill(200, 45, 0);
    quad(this.x - 40, this.y + this.h + 3, this.x + 45, this.y + this.h + 3, this.x + 30, this.y + this.h + 30, this.x - 25, this.y + this.h + 30);
    rect(this.x - 45, this.y + this.h, 95, 10); //45 used to be 50
  }
}

function pour() {
  noStroke();
  fill (0, 0, 255)
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
    noStroke();
    particles.display();
    particles.move();
  }
  else{
    ellipse (r,d, 5, 5)
  }
}
