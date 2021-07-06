const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world,backgroundImg;
var sling;

var score=0;

function preload(){
  getbackgroundIMG();
}

function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world

  ground = new Ground()
  base1 = new Base(380,300,270,10);
  base2 = new Base(700,200,200,10);

  //SET-1
  //level-1
  block1 = new Block(280,275);
  block2 = new Block(310,275);
  block3 = new Block(340,275);
  block4 = new Block(370,275);
  block5 = new Block(400,275);
  block6 = new Block(430,275);
  block7 = new Block(460,275);
  block8 = new Block(490,275);
  //level-2
  block9 = new Block(310,235);
  block10 = new Block(340,235);
  block11 = new Block(370,235);
  block12 = new Block(400,235);
  block13 = new Block(430,235);
  block14 = new Block(360,235);
  //level-3
  block15 = new Block(340,195);
  block16 = new Block(370,195);
  block17 = new Block(400,195);
  block18 = new Block(430,195);
  //level-4
  block19 = new Block(370,155);
  block20 = new Block(400,155);
  //level-5
  block21 = new Block(385,115);

  //SET-2
  //level-1
  blocks1 = new Block(640,175);
  blocks2 = new Block(670,175);
  blocks3 = new Block(700,175);
  blocks4 = new Block(730,175);
  blocks5 = new Block(760,175);
  //level-2
  blocks6 = new Block(670,135);
  blocks7 = new Block(700,135);
  blocks8 = new Block(730,135);
  //level-3
  blocks9 = new Block(700,95);

  //polygon with sling
  ball=Bodies.circle(100,200,20);
  World.add(world,ball);

  sling = new SlingShot(this.ball,{x:150,y:200});
  
}

function draw() {
  if(backgroundImg)
  background(backgroundImg);
  noStroke();
  textSize(35);
  fill("LightBlue")
  text("Score:"+ score,width-300,50)

  Engine.update(engine);

  ground.display();
  base1.display()
  base2.display()

  
  strokeWeight(2)
  fill("orange")
  stroke("blue")
  block1.display();
  block1.score();
  block2.display();
  block2.score();
  block3.display();
  block3.score();
  block4.display();
  block4.score();
  block5.display();
  block5.score();
  block6.display();
  block6.score();
  block7.display();
  block7.score();
  block8.display();
  block8.score();

  strokeWeight(2)
  fill("lightblue")
  stroke("blue")
  block9.display();
  block9.score();
  block10.display();
  block10.score();
  block11.display();
  block11.score();
  block12.display();
  block12.score();
  block13.display();
  block13.score();
  block14.display();
  block14.score();

  strokeWeight(2)
  fill("pink")
  stroke("blue")
  block15.display();
  block15.score();
  block16.display();
  block16.score();
  block17.display();
  block17.score();
  block18.display();
  block18.score();

  strokeWeight(2)
  fill("yellow")
  stroke("blue")
  block19.display();
  block19.score();
  block20.display();
  block20.score();

  strokeWeight(2)
  fill("lightgreen")
  stroke("blue")
  block21.display();
  block21.score();

  strokeWeight(2)
  fill("green")
  stroke("black")
  blocks1.display();
  blocks1.score();
  blocks2.display();
  blocks2.score();
  blocks3.display();
  blocks3.score();
  blocks4.display();
  blocks4.score();
  blocks5.display();
  blocks5.score();

  strokeWeight(2)
  fill("blue")
  stroke("black")
  blocks6.display();
  blocks6.score();
  blocks7.display();
  blocks7.score();
  blocks8.display();
  blocks8.score();

  strokeWeight(2)
  fill("red")
  stroke("black")
  blocks9.display();
  blocks9.score();


  ellipse(ball.position.x,ball.position.y,40,40)
  sling.display();
}

function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  sling.fly();
}
function keyPressed(){
  if(keyCode===32){
     sling.attach(this.ball);   
  }
}

async function getbackgroundIMG(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Tokyo");
    var responseJSON = await response.json();
    console.log(responseJSON);

    var DateTime = responseJSON.datetime;
    console.log(DateTime);

    var Hour = DateTime.slice(11,13);
    console.log(Hour);

    if(Hour>=06 && Hour<=18){
     bg="Day.jpg";
    }
    else{
      bg="Night.jpg";
    } 
    backgroundImg=loadImage(bg);
}