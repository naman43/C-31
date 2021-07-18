
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var divisions = [];
var divisionsHeight = 300;
var particles = [];
var plinkos = [];

function preload(){
}


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
engine = Engine.create();
world = engine.world;

ground = new Ground (400,690,800,20);

for (var i = 0; i<=width; i = i=80){
  divisions.push(new Divisions(i,height-divisionsHeight/2,10,divisionsHeight));
}


for (var j=75; j<=width; j=50){
  plinkos.push(new Plinko(j,75));
}

for (var j=50; j<=width-10; j=50){
  plinkos.push(new Plinko(j,175));
}

for (var j=75; j<=width; j=50){
  plinkos.push(new Plinko(j,275));
}

for (var j=50; j<=width-10; j=50){
  plinkos.push(new Plinko(j,375));
}

engine=run(Engine);

}
function draw() {
  rectMode(CENTRE);
  background(0);  
  drawSprites();

for (var n = 0; n<divisions.length; n++){
  divisions[n].display();
}

if(frameCount %60 === 0){
particles.push(new Particle(random(width/2-30,width/2+30),10,10));
}

for (var h = 0; h<particles.length; h++){
  divisions[h].display();
}

for (var a = 0; a<plinkos.length; a++){
  divisions[a].display();
}


ground.display();
  
}