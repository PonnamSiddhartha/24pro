const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,paper,paperobject;
var box1,box2,box3;
var boxPosition;
//var border1,border2,border3;
function preload()
{
	
}

function setup() {
	createCanvas(1095, 400);
    engine = Engine.create();
	world = engine.world;
	paperobject= new Paper(100,200,50,100,500);
	ground = new Ground(500,height,3200,55);
	
	box.Position=200;
	boxY=210;
	
	box2=new Dustbin(900,305,20,130);
	box2.shapeColor="white";
	
	box1=new Dustbin(800,360,200,20);
	box1.shapeColor="white";
	
	box3=new Dustbin(700,305,20,130);
	box3.shapeColor="white";

	Engine.run(engine);
	
}


function draw() {
  rectMode(CENTER);
  background(0);
  paperobject.display();
  box1.display();
  box2.display();
  box3.display();
  ground.display();
  drawSprites();
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paperobject.body,paperobject.body.position,{x:115,y:-115});
	}
}


