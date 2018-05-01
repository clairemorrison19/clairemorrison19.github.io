//var tree;
var i = 75
var k = 25
var r = 105
var d = 30
var flower;
var stemColor = 75

function setup() {
  createCanvas (windowWidth, windowHeight)
  background (200, 200, 255)
  angleMode (DEGREES)
  //  tree = new Tree(width/2, height/2 + 200);
  flower = new Sunflower(width/6, height/2 + 200);
}

function draw() {
  WateringCan();
  if (mouseX >= 25 && mouseX <= 75 && mouseY >= 25 && mouseY <= 75) { //location of Watering can
    pour();
    flower.noPastPetals();
    flower.leaves();
    flower.display();
    flower.petals();
    flower.head();
    flower.name();
    flower.grow();
  }
  else {
    flower.display();
    flower.petals();
    flower.head();
    flower.name();
  }
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
  quad (75, 40, 100, 30, 110, 30, 75, 55)
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
    //rect (this.x - 50, this.y- 150, 100, this.h + 150);
    rect (this.x - 50, this.y - 125, 100, this.h + 150)
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
    //don't grow
     // if (this.h >= 70 && this.h <= 140) {
     //   strokeWeight(stroke(10));
     //   stroke (0, 150, 0);
     //   fill (0, 200, 0)
     //   ellipse (this.x - this.w, height/2 + 170, 25, 10);
     // }
     // if (this.h >= 140 && this.h <= 210) {
     //   strokeWeight(stroke(10));
     //   stroke (0, 150, 0);
     //   fill (0, 200, 0)
     //   ellipse (this.x + 25, height/2 + 140, 25, 10);
     //   ellipse (this.x - this.w, height/2 + 170, 30, 15);
     // }
     // if (this.h >= 180) {
     //   strokeWeight(stroke(10));
     //   stroke (0, 150, 0);
     //   fill (0, 200, 0)
     //   ellipse (this.x - this.w, height/2 + 70, 25, 10);
     //   ellipse (this.x + 25, height/2 + 120, 30, 15);
     //   ellipse (this.x - this.w, height/2 + 170, 35, 20);
     // }
  }
}

//petals = function() {
// function petals() {
//   fill(255, 255, 0);
//   push();
//   translate(flower.x + 5, flower.y + 5);
//   for (var t = 11.25; t <360; t + 11.25) {
//     rotate (t);
//     fill (245 - t/11.25, 255, 0 + t/11.25*3)
//     ellipse(0, -5, 25, 10);
//   }
//   pop();
// }

function pour() {
  noStroke();
  fill (0, 0, 255)
    // var r = 105
    // var d = 30
  ellipse(r, d, 5, 5)
  if (r <= 110) {
    r+=2;
    d--;
    //ellipse(r, d, 5, 5)
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
  //  else if (r == 200) {
  //    particles
  //  }
  //  else{
  //    ellipse (r,d, 5, 5)
  //  }
}
