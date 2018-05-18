var world;

function setup() {
  createCanvas(windowWidth, windowHeight)
  world = loadImage("Newman world.png");
  textFont(LobsterTwo);
  // put setup code here
}

function mouseClicked() {
  if (mouseX > 11 && mouseY > 11 && mouseX < 286 && mouseY < 69){
    document.location.href = "https://www.newmanschool.org/page/academics/upper-school/curriculum"
  }
}

function draw() {
  image(world, 0, 0)
  mouseClicked();
  //Antartica
  if (mouseY > 490){
    textSize(45);
    text("says Hello to Penguins", 300, 65);
  }
  //Canada
  if (mouseX > 105 && mouseY > 109 && mouseX < 258 && mouseY < 180){
    textSize(30);
    text("says Hello and sometimes Bonjour", 300, 65);
  }
  //America
  if (mouseX > 49 && mouseY > 167 && mouseX < 115 && mouseY < 130 || mouseX > 90 && mouseY > 180 && mouseX < 215 && mouseY < 232){
    textSize(45);
    text("says Hello", 300, 65);
  }
  //Brazil
  if (mouseX > 189 && mouseY > 298 && mouseX < 275 && mouseY < 337 || mouseX > 226 && mouseY > 337 && mouseX < 260 && mouseY < 367){
    textSize(45);
    text("says Olá", 300, 65);
  }
  //Mexico
  if (mouseX > 98 && mouseY > 232 && mouseX < 143 && mouseY < 268) {
    textSize(45);
    text("says Hola", 300, 65);
  }
  //South America except Brazil
  if (mouseX > 157 && mouseX < 234 && mouseY > 276 && mouseY < 298 || mouseX > 157 && mouseX < 195 && mouseY > 298 && mouseY < 337 || mouseX > 189 && mouseX < 226 && mouseY > 325 && mouseY < 450){
    textSize(45);
    text("says Hola", 300, 65);
  }
  //latin america and the caribean
  if (mouseX > 142 && mouseY > 238 && mouseX < 224 && mouseY < 279){
    textSize(30);
    text("says Hola and Bonjour and all sorts of things", 300, 65);
  }
  //africa
  if (mouseX > 315 && mouseY > 217 && mouseX < 441 && mouseY < 300 || mouseX > 375 && mouseY < 399 && mouseX < 476 && mouseY > 247){
    textSize(30);
    text("says Jambo or Bonjour or marhabaan", 300, 45);
    text(" مرحبا or Hello or Hola or something else", 300, 65);
  }
  //Australia
  if (mouseX > 609 && mouseX < 704 && mouseY > 334 && mouseY < 417){
    textSize(45);
    text("says hello mate!", 300, 65);
  }
  //Asia
  if (mouseX > 425 && mouseY > 109 && mouseX < 694 && mouseY < 228 || mouseX > 471 && mouseX < 667 && mouseY > 228 && mouseY < 328){
    textSize(35);
    text ("Says there are a lot of asian languages", 300, 65);
  }
  //Europe
  if (mouseX > 333 && mouseY < 214 && mouseY > 105 && mouseX < 426){
    textSize(35);
    text("Says hello to Europe", 300, 65);
  }
  //Greenland and Iceland
  if (mouseY > 101 && mouseY < 158 && mouseX > 259 && mouseX < 330){
      textSize(35);
      text("says hello to greenland and iceland", 300, 65);
  }

  // put drawing code here

  console.log (mouseX, mouseY)
}

function preload() {
  LobsterTwo = loadFont('LobsterTwo-Regular.otf');
}
