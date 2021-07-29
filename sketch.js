const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var playerBase, player,comp,compbase;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
   playerBase=new Playerbase(300,random(450,height-300),180,150);
   player=new Player(285,playerBase.body.position.y-153,50,180);
  compbase= new ComputerBase(870,random(450,height-300),180,150);

   comp = new ComputerPlayer(885,compbase.body.position.y-153,50,180);



 }

function draw() {

  background(180);

  Engine.update(engine);

  

  
  

   //Display Playerbase and computer base
    playerBase.display()
    compbase.display()


   //display Player and computerplayer
   player.display()
   comp.display()

}
