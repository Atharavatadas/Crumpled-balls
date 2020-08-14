const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var rect1,rect2,rect3,ballsprites,ball1,ground;

function preload()
{

}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	
	rect1 = createSprite(670,640,10,80);
	rect2 = createSprite(720,670,100,10);
	rect3 = createSprite(770,640,10,80);
	ground = createSprite(0,680,1900,10);
	ground.shapeColor = color("Yellow");
    ball1 = new Paper(200,200,20)
	Engine.run(engine);
   
}


function draw() {
  rectMode(CENTER);
  background(0);




  drawSprites();
 
}
function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball1.body,ball1.body.position,{x:85,y: -85})
	}
}



