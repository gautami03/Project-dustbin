
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var engine, world;
var trash1,bin1,bin2,bin3;
var platform;

function preload()
{
  
  BinImg = loadImage("images/dustbin.png");

}

function setup() {
	var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);
   
    bin1 = new Bin(920,310,30,160);
    bin2 = new Bin(720,310,30,160);
    bin3 = new Bin(820,380,180,30);
   
    trash1= new Trash(200,350,20);
   
    
    //slingshot = new Slingshot(bird.body,{x:300,y:100});
}

function draw(){
   background("black");
    Engine.update(engine);
 

    bin1.display();
    bin2.display();
    bin3.display();
    trash1.display();
    ground.display();

 

	Engine.run(engine);
  
}

function keyPressed(){
    if(keyCode === UP_ARROW)  {
   Matter.Body.applyForce(trash1.body,trash1.body.position,{x:+85,y:-55})

     }
    

    
}