
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var engine,world
var block8

function setup() {
	createCanvas(800, 700);


engine = Engine.create();
	world = engine.world;
     block8= new Block(330,235,30,40)
	


//	Engine.run(engine);
  
}


function draw() {
 background(190);
 Engine.update(engine)
  block8.display();
  
 
 
}
