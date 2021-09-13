var iss
var space
var spacecraft1
var spacecraft2
var spacecraft3
var spacecraft4

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function preload(){
 iss = loadImage()
}

function draw() {
  background(255,255,255);  
  drawSprites();
}