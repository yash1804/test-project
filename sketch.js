
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob;
var ground;
var roof;
var rope1, bobDiameter;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
bob = new Bob(200,500,40,40);
bob2 = new Bob(281,500,40,40);
bob3 = new Bob(362,500,40,40);
bob4 = new Bob(443,500,40,40);
bob5 = new Bob(524,500,40,40);
ground = new Ground(400,690,800,20);
roof = new Roof(370,300,450,30);
rope1 = new Rope(bob.body,roof.body, -bobDiameter*2,0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bob.display()
  ground.display()
  bob2.display()
bob3.display()
bob4.display()
bob5.display()
roof.display()
rope1.display()

  drawSprites();
 
}



