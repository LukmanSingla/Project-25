const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var c1,c2,c3,ground,ball,dustbin;
function preload()
{
dustbin=loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(1400, 400);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    c1=new Box(1100,250,20,150,"white");
    c2=new Box(1300,250,20,150,"white");
    c3=new Box(1200,320,220,20,"white");
    ball=new Ball(200,320,20,100,-75 );
	ground=new Ground(700,340,1400,20,"yellow");
  World.add(world,ball);
	Engine.run(engine);
}

function draw() {
  background(255);
  ball.display();
  ground.display();
  imageMode(CENTER);
  image(dustbin,1200,230,240,200);
  drawSprites();
}
