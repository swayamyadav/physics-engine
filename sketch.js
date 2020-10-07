
const Engine = Matter.Engine
const World =Matter.World 

const Bodies = Matter.Bodies

var engine,world;

var object;

var spear;

function setup() {
  createCanvas(400,400);
 
  engine = Engine.create();

  world = engine.world;

  var play = {
    isStatic: true
  }
 
 

  object = Bodies.rectangle(200,380,80,20,play);
 World.add(world,object);

 var ball = {
  restitution: 1.0
}

 spear = Bodies.circle(200,100,20,ball);
 World.add(world,spear);

}

function draw() {
  background(0,0,0); 
  

  Engine.update(engine);


  rectMode(CENTER)
  rect (object.position.x,object.position.y,400,20);

 ellipseMode(RADIUS)
  ellipse (spear.position.x,spear.position.y,20,20);


 //drawSprites();
}


