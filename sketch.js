let forex

function preload(){
  forex = loadJSON('http://apilayer.net/api/live?access_key=3aaba1be11db42f57fae9a2764ba41d1')

}



function setup() {
  print(forex.quotes.USDXAU*100000)
  createCanvas(800,600, WEBGL)


}

var USDXAU;
var USDAUD;
var USDCAD;
var USDCHF;
var USDNZD;

function draw() {

  let c;
  c = color('hsl(160, 100%, 50%)');

  //drag to move the world.
  orbitControl();
  
  USDXAU = forex.quotes.USDXAU;
  USDAUD = forex.quotes.USDAUD;
  USDCAD = forex.quotes.USDCAD;
  USDCHF = forex.quotes.USDCHF;
  USDJPY = forex.quotes.USDJPY;
  USDNZD = forex.quotes.USDNZD;


  background(100)

  push();
  fill (c)
  translate(-300, 0, 0);
  rotateZ(frameCount * USDXAU);
  rotateX(frameCount * USDXAU);
  rotateY(frameCount * USDXAU);
  box(50);
  pop();

  push();
  fill (c)
  translate(-200, 0, 0);
  rotateZ(frameCount * USDAUD);
  rotateX(frameCount * USDAUD);
  rotateY(frameCount * USDAUD);
  box(50);
  pop();

  push();
  fill (c)
  translate(-100, 0, 0);
  rotateZ(frameCount * USDJPY);
  rotateX(frameCount * USDJPY);
  rotateY(frameCount * USDJPY);
  box(50);
  pop();

  push();
  fill (c)
  translate(0, 0, 0);
  rotateZ(frameCount * USDNZD);
  rotateX(frameCount * USDNZD);
  rotateY(frameCount * USDNZD);
  box(50);
  pop();

  push();
  fill (c)
  translate(100, 0, 0);
  rotateZ(frameCount * USDCHF);
  rotateX(frameCount * USDCHF);
  rotateY(frameCount * USDCHF);
  box(50);
  pop();


  push();
  fill (c)
  translate(200, 0, 0);
  rotateZ(frameCount * USDCAD);
  rotateX(frameCount * USDCAD);
  rotateY(frameCount * USDCAD);
  box(50);
  pop();


}