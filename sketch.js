
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob1,bob2,bob3,bob4,bob5;
var roof;
var rope1,rope2,rope3,rope4,rope5;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	
	BOBDiameter=50;

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new BOB(260,400,60);
	bob2 = new BOB(330,400,60);
	bob3 = new BOB(400,400,60);
	bob4 = new BOB(470,400,60);
	bob5 = new BOB(540,400,60);

	roof = new ROOF(200,10,400,20);

	rope1 = new ROPE(bob1.body,roof.body,53,0);
	rope2 = new ROPE(bob2.body,roof.body,123,0);
	rope3 = new ROPE(bob3.body,roof.body,193,0);
	rope4 = new ROPE(bob4.body,roof.body,263,0);
	rope5 = new ROPE(bob5.body,roof.body,333,0);
	
	Engine.run(engine);
  
}


function draw() {
  
  background(400);
 
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  

 
 

 
}

function keyPressed()
{
	 if(keyCode === UP_ARROW)
	 {
		 console.log("pressed");
		 Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45});
	 }
}


