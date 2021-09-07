 
 const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
var bg;
var engine,world;
var ice=[];
 var maximumsnow = 100;

function preload(){
  bg = loadImage("snow3.jpg");
}

function setup() {
  createCanvas(1300,600);
  engine = Engine.create ();
  world = engine.world;

  if(frameCount % 275 ===0){
    for (var k=0; k<maximumsnow; k++){
    ice.push(new Snow(random(0,1300), random(0,40),15,400));
    }
  }
}

function draw() {
  background(bg);  
  Engine.update(engine);
  for(var p = 0; p< maximumsnow; p++){
    ice[p].display();}
  drawSprites();
}