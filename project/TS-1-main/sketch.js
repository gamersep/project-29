const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,polygon,ground;
var stand1,stand2;
var polygon;
var slingShot;
var polygon_img;
function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);
  b1=new Block(300,275,30,40)
  b2=new Block(330,275,30,40)
  b3=new Block(360,275,30,40)
  b4=new Block(390,275,30,40)
  b5=new Block(420,275,30,40)
  b6=new Block(450,275,30,40)
  b7=new Block(480,275,30,40)
  //polygon holder with slings
  b8=new Block(330,235,30,40)
  b9=new Block(360,235,30,40)
  b10=new Block(390,235,30,40)
  b11=new Block(420,235,30,40)
  b12=new Block(450,235,30,40)
  b13=new Block(360,195,30,40)
  b14=new Block(390,195,30,40)
  b15=new Block(420,195,30,40)
  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);
  
  slingShot = new Slingshot(this.polygon,{x:100,y:200});

}
function draw() {
  background(56,44,44); 
 
  //Engine.update(engine);
  text(mouseX + ',' + mouseY, 10, 15);
  textSize(20);
  fill("lightyellow");
  text("Drag the polygon to destroy the blocks",300,30);
  textSize(10);
  text("Press Space to get a second Chance to Play!!",650 ,350);
  ground.display();
  stand1.display();
  stand2.display();
  strokeWeight(2);
  stroke(15);
  
  fill("gold");
  imageMode(CENTER)
  image(polygon_img ,polygon.position.x,polygon.position.y,40,40);
  fill("blue")
  b1.display()
  b2.display()
  b3.display()
  b4.display()
  b5.display()
  b6.display()
  b7.display()
  fill("pink")
  b8.display()
  b9.display()
  b10.display()
  b11.display()
  b12.display()
fill("green")
b13.display()
b14.display()
b15.display()

  slingShot.display();
  
}
function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();
}
