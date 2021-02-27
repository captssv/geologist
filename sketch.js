
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var sound;
function preload(){

}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var landoption = {
		isStatic:true,
	  }
	land = Bodies.rectangle(480,680,800, 20,landoption);
	World.add(world,land);

hammer1 = new Hammer(10,10,130,15);

stone1 = new Stone(300,400);

iron1 = new Iron(400,300);

rubber1 = new Rubber(350,320);

sand1 = new Sand(340,200);
sand2 = new Sand(350,200);
sand3 = new Sand(360,200);
sand4 = new Sand(370,200);
sand5 = new Sand(380,200);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

  fill("brown")
  rectMode(CENTER)
  rect(land.position.x,land.position.y,1200,20)
 
  hammer1.show();
  stone1.show();
  iron1.show();
  rubber1.show();

  sand1.show();
  sand2.show();
  sand3.show();
  sand4.show();
  sand5.show();
}



