//Namespacing for matter.js 
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body=Matter.Body;
const Constraint = Matter.Constraint;

//Variable declaration for Bodies
var pentagon;
var ground1,ground2,ground3;
var block1,block2,block3,block4,block5;
var block6,block7,block8,block9,block10;
var block11,block12,block13,block14,block15;
var block16,block17,block18,block19,block20;
var block21,block22,block23,block24,block25;
var score = 0;

function preload()
{

}
//Setup function
function setup() {
  //To create canvas
  createCanvas(1200,600);
  //createCanvas(1000,400);

  //Creating small engine and world
  engine = Engine.create();
  world = engine.world;

  //first ground
  ground1=new Ground(450+120,450,360,14);

  // +120

  //First level
  block1=new Box(330+120,416,40,54);
  block2=new Box(370+120,416,40,54);
  block3=new Box(410+120,416,40,54);
  block4=new Box(450+120,416,40,54);
  block5=new Box(490+120,416,40,54);
  block6=new Box(530+120,416,40,54);
  block7=new Box(570+120,416,40,54);

  //Second level
  block8=new Box1(370+120,362,40,54);
  block9=new Box1(410+120,362,40,54);
  block10=new Box1(450+120,362,40,54);
  block11=new Box1(490+120,362,40,54);
  block12=new Box1(530+120,362,40,54);

  //Third level
  block13=new Box2(410+120,308,40,54);
  block14=new Box2(450+120,308,40,54);
  block15=new Box2(490+120,308,40,54);
  
  //Fourth level
  block16=new Box3(450+120,254,40,54);

  //Second ground
  ground2=new Ground(850+120,300,270,14);

  //Bottom level
  block17=new Box(770+120,266,40,54);
  block18=new Box(810+120,266,40,54);
  block19=new Box(850+120,266,40,54);
  block20=new Box(890+120,266,40,54);
  block21=new Box(930+120,266,40,54);

  //Middle level 
  block22=new Box2(810+120,212,40,54);
  block23=new Box2(850+120,212,40,54);
  block24=new Box2(890+120,212,40,54);

  //Top level
  block25=new Box1(850+120,158,40,54);

  //Lower Ground
  ground3=new Ground(width/2,height-10,width,28);

  //pentagon
  pentagon=new polygon(height/2,300,26);

  //constraint
  sling=new SlingShot(pentagon.body,{x:200,y:300})
}

function draw() {

  //To assign brown background color
  background(0,0,140); 

  Engine.update(engine);
  
  //console.log(block20.body.position);

  //Displaying ground
  ground1.display();

  //Displaying first level
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();

  //Displaying second level
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();

  //Displaying third level
  block13.display();
  block14.display();
  block15.display();

  //Displaying fourth level
  block16.display();
  
  //displaying second ground
  ground2.display();

  //Displaying bottom level
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();

  //Display middle level
  block22.display();
  block23.display();
  block24.display();
  block25.display();
 
  //Displaying pentagon
  pentagon.display();
  
  //displaying ground 3
  ground3.display();

  //displaying constraint line
  sling.display();

  //score
  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();
  block16.score();
  block17.score();
  block18.score();
  block19.score();
  block20.score();
  block21.score();
  block22.score();
  block23.score();
  block24.score();
  block25.score();

  //Addiding instructions
  strokeWeight(0);
  fill("white");
  textSize(22);
  text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",50,30);
  text("Press Space Bar to get another chance",50,60);
  text("- by coder Kushal Naik",960,595);
  text("Tower Siege v3.0",20,595);
  text("Score : " +score, 1000,30);
}
//Mouse drag function to adjust the aim of hexagon
function mouseDragged()
{
  Matter.Body.setPosition(pentagon.body,{x:mouseX,y:mouseY});
}

//mouse release function to null the bodyA nd let it fly
function mouseReleased()
{
   sling.fly();
}

//keypressed function to attach stone back to constraint
function keyPressed()
{
  if(keyCode===32)
  {
    Matter.Body.setPosition(pentagon.body,{x:100,y:200});
    sling.attacher(pentagon.body);
  }
}