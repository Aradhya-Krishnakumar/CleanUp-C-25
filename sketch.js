const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObj,ballObj    
var world;

function setup() {
    createCanvas(1600, 700);
    rectMode(CENTER);

    engine = Engine.create();
    world = engine.world;
    
    groundObj= new ground(width/2,670,width,20);
    dustbinObj= new dustbin(1200,650);
    ballObj= new paper(200,650,25)   

    Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(230);
 

  groundObj.display();
  dustbinObj.display();
  ballObj.display();    
  
  keyPresed()
}

function keyPresed()
{
	if(keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(ballObj.body,ballObj.body.position,{x:2,y:-7});
	}
}