
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	;
var world;
var paper;
var ground;

function setup() {
	createCanvas(1500, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new Ground(width/2,670,width,20);
	wall=new Ground(height/2,10,height*4,20)
	wall1=new Ground(10,345,20,670)
	wall2=new Ground(1490,345,20,670)
	dustbinObj=new dustbin(1200,650);
	


	paper=new Paper(200,150,50,50)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 
keyPressed();
  groundObject.display();
  dustbinObj.display();
  paper.display();
wall.display();
wall1.display();
wall2.display();

}
function keyPressed(){
		if (keyCode === RIGHT_ARROW) {
		  Matter.Body.applyForce(paper.body, paper.body.position, {x: 12,y: -13 });
		}
		if (keyCode === LEFT_ARROW) {
			Matter.Body.applyForce(paper.body, paper.body.position, { x: -12,y: -10});
		  }
		  if (keyCode === UP_ARROW) {
			Matter.Body.applyForce(paper.body, paper.body.position, {x: 13, y: -15});
		}
			if (keyCode === RIGHT_ARROW) {
				Matter.Body.applyForce(paper.body, paper.body.position, { x: 12,y: -1});
		}
	  
	}

