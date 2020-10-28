
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball
var bin 
var ground
var box1 , box2 , box3

function preload()
{
	
}

function setup() {
	createCanvas(4000, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = new Ball(200,600);
	ground = new Ground(2000,690,4000,10);

	box1 = new Bin(3800,height - 35,150,20);
	box2 = new Bin(3720,height - 75,20,100);
	box3 = new Bin(3880,height - 75,20,100);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ball.display();
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  drawSprites();
 
}


function keyPressed()
{
	if(keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(ball.body, ball.body.position, {x:50,y:-60});
	}
}



