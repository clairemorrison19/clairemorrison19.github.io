//Credit to John Brannon for the Particle parts and he helped with explaining some other random parts that he happened to also have in his code

var tree;
var i = 75;
var k = 25;
var r = 105; //right
var d = 30; //down
var lm = 200; //leaf movement
var lc = 0; //leaf (center?circle?)
var flower;
var stemColor = 75;
var particles = [];
var mg = 0.05;
var radius = 5;
var isTree = false;
var isFlower = false;
var isRose = false;
var isCherry = false;
var rose;
var cherry;
var counter = 0;


function setup() { //merged
  createCanvas (windowWidth, windowHeight);
  background (200, 200, 255);
  angleMode (DEGREES);
  tree = new Tree(width/2, height/2 + 200);
  flower = new Sunflower(width/2, height/2 + 219);
  rose = new Roses(width/2, height/2 + 219);
  cherry = new CherryTree(width/2, height/2+200);
  //particles = new Particle(201, 177, +1);
  particles = new Particle(201, 177, +1)
}

function draw() {
  WateringCan();
  TreeSeeds();
  SunflowerSeeds();
  CherrySeeds();
  RoseSeeds();
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
      pour();
      flower.leaves();
      flower.display();
      flower.petals();
      flower.head();
      flower.name();
      flower.grow();
      flower.pot();
    }
    else {
      flower.leaves();
      flower.display();
      flower.petals();
      flower.head();
      flower.name();
      flower.pot();
    }
  }
  if (isRose === true){
    if (mouseX >= 25 && mouseX <= 75 && mouseY >= 25 && mouseY <= 75) { //location of Watering can
      pour();
      rose.noPastPetals();
      //rose.background();
      pour();
      rose.thorns();
      rose.display();
      rose.petals();
      rose.bud();
      rose.name();
      rose.grow();
      rose.pot();
    }
    else {
      rose.display();
      rose.petals();
      rose.bud();
      rose.name();
      rose.pot();
    }
  }
  if (isCherry === true){
    if (mouseX >= 25 && mouseX <= 75 && mouseY >= 25 && mouseY <= 75) { //location of Watering can
      pour();
      cherry.leaves();
      cherry.display();
      cherry.grow();
      cherry.leaves();
      cherry.name();
    }
    else {
      cherry.display();
      cherry.name();
    }
  }
  for(var i = 0; i < particles.length; i++) {
    particles[i].display();
    particles[i].move();
    // particles[i].display();
    // particles[i].run();
  }
  // if (r == 201) {
  //   particles.display();
  //   particles.move();
  //   // particles.display();
  //   // particles.run();
  // }
  WateringCan();
  TreeSeeds();
  SunflowerSeeds();
  CherrySeeds();
  RoseSeeds();
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
function mouseClicked() {
  if(mouseX > 25 && mouseX < 45 && mouseY > 85 && mouseY < 105){
    isTree = true;
  }
  else if(mouseX < 25 || mouseX > 45 || mouseY < 85 || mouseY > 105){
    isTree = false;
  }
  if(mouseX > 55 && mouseX < 75 && mouseY > 85 && mouseY < 105){
    isFlower = true;
  }
  else if(mouseX < 55 || mouseX > 75 || mouseY < 85 || mouseY > 105){
    isFlower = false;
  }
  if(mouseX > 25 && mouseX < 47.5 && mouseY > 112.5 && mouseY < 130){
    isRose = true;
  }
  else if(mouseX < 25 || mouseX > 47.5 || mouseY < 112.5 || mouseY > 130){
    isRose = false;
  }
  if(mouseX > 55 && mouseX < 75 && mouseY > 112.5 && mouseY < 130){
    isCherry = true;
  }
  else if(mouseX < 55 || mouseX > 75 || mouseY < 112.5 || mouseY > 130){
    isCherry = false;
  }
}
function TreeSeeds() {
  fill(0, 135, 5);
  rect(25, 85, 22.5, 22.5);
  fill(60, 30, 5);
  textSize(18);
  text ("T", 31, 102.5);
}
function SunflowerSeeds() {
  fill(255, 255, 0);
  rect(52.5, 85, 22.5, 22.5);
  fill(0, 135, 5);
  textSize(18);
  text("S", 58, 102.5);
}
function CherrySeeds() {
  fill(255, 175, 175);
  rect(52.5, 112.5, 22.5, 22.5);
  fill(60, 30, 5);
  textSize(18);
  text ("C", 58, 130);
}
function RoseSeeds() {
  fill(225, 25, 25);
  rect(25, 112.5, 22.5, 22.5);
  fill(0, 135, 5);
  text("R", 30, 130);
}


function Particle(locx, locy, direction) {
  this.loc = createVector(locx, locy);
  this.direction = direction;
  this.velocity = createVector(0,0);
  this.pathNum = floor(random([-1, 0, 1]));
  this.routeNum = floor(random([1]));
  this.display = function(){
    fill(0,0,255);
    noStroke();
    ellipse(this.loc.x, this.loc.y, radius);
  }
  this.move = function() {
    this.velocity.add(0, mg);
    this.loc.add(this.velocity.x, this.velocity.y);
    if(this.loc.x >= 201 && this.loc.y >= 177) {
      this.velocity.add(this.pathNum, this.routeNum);
    }
    console.log("pathNum is equal to the value " + this.pathNum);
    console.log("routeNum is equal to the value " + this.routeNum);
  }
}

//plants
function Tree(x,y) {
  this.x = x;
  this.y = y;
  this.w = 25;
  this.h = 75;
  this.display = function() { //trunk
    fill (63, 30, 4);
    noStroke();
    rect (this.x, this.y, this.w, this.h);
  }
  this.name = function() {
    textSize(25);
    fill(0, 135, 5)
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
    stroke (50, 20, 0);
    fill (90, 50, 0);
    ellipse (this.x + this.w/2, this.y - 5, this.w*1.75, this.w*1.75);
  }
  this.name = function() {
    fill(255, 255, 0);
    textSize(25);
    text("Sunflower", width/2 - 50, 85);
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
    rect (this.x - 55, this.y - 110, 115, this.h + 150)
  }
  this.background = function(){
    background(200, 200, 255);
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

function Roses(x,y) {
  this.x = x;
  this.y = y;
  this.w = 2;
  this.h = 25;
  this.display = function() {
    strokeWeight(stroke(1.5));
    stroke(0, 150, 0);
    fill (0, 200, 0);
    //middle flower
    rect(this.x, this.y, this.w, this.h);
    //left flower
    rect(this.x - 32.5, this.y + 20, this.w, this.h - 20);
    //right flower
    rect(this.x + 27.5, this.y + 35, this.w, this.h - 35);
  }
  this.bud = function() {
    //middle flower
    push();
    translate(this.x + this.w/2, this.y - this.w/2);
    for (var b = 0; b < 360; b += 45) {
      rotate (b);
      strokeWeight(stroke(1));
      fill(255, 0, 0);
      ellipse(0, -6, 8, -8-this.w);
    }
    pop();
    //left flower
    push();
    translate(this.x - 32.5 + this.w/2, this.y + 20 - this.w/2);
    for (var b = 0; b < 360; b += 90) {
      rotate (b);
      strokeWeight(stroke(1));
      fill(200, 0, 0);
      ellipse(0, -4, 6, -4-this.w);
    }
    pop();
  }
  this.name = function() {
    fill(225, 25, 25);
    textSize(25);
    stroke(0);
    text("Roses", width/2 - 50, 110);
  }
  this.grow = function() {
    if (this.h <= 35) {
      this.h +=1/20;
      this.w +=1/150;
      this.x -=1/240;
      this.y -=1/20;
    }
    else if (35 <= this.h && this.h <= 70) {
      this.h +=1/10;
      this.y -= 1/10;
    }
  }
  this.petals = function() {
    //middle flower
    push();
    translate(this.x + this.w/2, this.y - this.w/2);
    for (var t = 0; t < 360; t += 45) {
      rotate (t);
      strokeWeight(stroke(1))
      fill(225, 25, 25)
      ellipse(0, -10, 15, -15-this.w);
    }
    pop();
    //left flower
    push();
    translate(this.x - 32.5 + this.w/2, this.y + 20 - this.w/2);
    for (var t = 0; t < 360; t += 45) {
      rotate (t);
      strokeWeight(stroke(1))
      fill(255, 0, 0)
      ellipse(0, -7, 10, -12-this.w);
    }
    pop();
    //right flower
    push();
    translate(this.x + 27.5 + this.w/2, this.y + 35 - this.w/2);
    for (var t = 0; t < 360; t += 45) {
      rotate (t);
      strokeWeight(stroke(1))
      fill(225, 75, 75)
      ellipse(0, 5, 5, -5-this.w);
    }
    pop();
  }
  this.noPastPetals = function() {
    fill (200, 200, 255);
    rect (this.x - 55, this.y - 110, 115, this.h + 150)
  }
  this.background = function() {
    background(200, 200, 255);
  }
  this.thorns = function() {
    //middle flower top leaf
    if (this.h >= 20) {
      strokeWeight(stroke(10));
      stroke (0, 150, 0);
      fill (0, 200, 0);
      ellipse (this.x - ((this.w + 12.5)/2), this.y + 35, this.w + 14.5, this.w + 4.5);
    }
    //left flower leaf
    if (this.h >= 25) {
      strokeWeight(stroke(10));
      stroke (0, 150, 0);
      fill (0, 200, 0);
      ellipse (this.x - 32.5 + ((this.w + 10)/2) + this.w, this.y + 47, this.w + 11.5, this.w + 2.5);
    }
    //right flower top leaf
    if (this.h >= 30) {
      strokeWeight(stroke(10));
      stroke (0, 150, 0);
      fill (0, 200, 0);
      ellipse (this.x + 27.5 - ((this.w + 8)/2), this.y + 49, this.w + 8, this.w + 1.75);
    }
    //middle flower bottom leaf
    if (this.h >= 35) {
      strokeWeight(stroke(10));
      stroke (0, 150, 0);
      fill (0, 200, 0);
      ellipse (this.x + this.w, this.y + 53, this.w + 11, this.w*8/9 + 2.5);
    }
    //right flower bottom leaf
    if (this.h >= 40) {
      strokeWeight(stroke(10));
      stroke (0, 150, 0);
      fill (0, 200, 0);
      ellipse (this.x + 27.5 , this.y + 165, this.w*2/3 + 25, this.w*5/6 + 10);
    }
  }
  this.pot = function() {
    stroke(0)
    fill(200, 45, 0);
    quad(this.x - 40, this.y + this.h + 3, this.x + 45, this.y + this.h + 3, this.x + 30, this.y + this.h + 30, this.x - 25, this.y + this.h + 30);
    rect(this.x - 45, this.y + this.h, 95, 10); //45 used to be 50
  }
}

function CherryTree(x,y) {
  this.x = x;
  this.y = y;
  this.w = 25;
  this.h = 75;
  this.display = function() { //trunk
    fill (63, 30, 4);
    noStroke();
    rect (this.x, this.y, this.w, this.h);
  }
  this.name = function() {
    textSize(25);
    fill(255, 175, 175)
    text("Cherry Tree", width/2 - 50, 50);
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
    fill(255, random(115, 200), random(160,215));
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
  fill (0, 0, 255);
  //ellipse(r, d, 5, 5)
  if (counter <= 5) {
    r+=2;
    d--;
    counter+=2;
    ellipse(r, d, 5, 5);
  }
  else if(5 <= counter && counter <= 25){
    r++;
    counter++;
    ellipse(r, d, 5, 5);
  }
  else if(25 <= counter && counter <= 55) {
    r++;
    d++;
    counter++;
    ellipse(r, d, 5, 5);
  }
  else if(55 <= counter && counter <= 95){
    r++;
    d+=3;
    counter++;
    ellipse(r, d, 5, 5);
  }
  else if(counter >= 95 && counter <= 245) {
    noStroke();
    particles.display();
    particles.move();
    counter++;
  }
  else if(counter == 246) {
    r = 105;
    d = 30;
    counter = 0;
  }
  else{
  //  ellipse (r,d, 5, 5);
  }
  console.log("r=" + r);
  console.log("d=" + d);
  console.log("counter=" + counter);
}
