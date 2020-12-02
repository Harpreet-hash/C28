
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var tree,stone,ground,boy,base,mango1,mango2,mango3,mango4,mango5,boyImage,chainy;
function preload()
{
	boyImage=loadImage("Plucking mangoes/boy.png");
}

function setup() {
	createCanvas(1000, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	//base=new Base();
	
	ground=new Ground(400,580,1000,20,{isStatic:true});
	tree=new Tree(632,270);
	mango1=new Mango(580,220,{isStatic:true})
	mango2=new Mango(628,148)
	mango3=new Mango(691,172)
	mango4=new Mango(674,68)
	mango5=new Mango(763,139)

	stone=new Stone(156,347);

	chainy=new Launcher(stone,{x:152,y:359});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  tree.display();
  stone.display();
  
  detectCollision(mango1,stone);
  detectCollision(mango2,stone);
  detectCollision(mango3,stone);
  detectCollision(mango4,stone);
  detectCollision(mango5,stone);


  image(boyImage,200,450,150,400);

 

  

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  chainy.display();
  
  text(mouseX+" "+mouseY,mouseX,mouseY)
 
 
}
function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
	
	chainy.chain.bodyA=null;
}
function detectCollision(mango,stone){
	var mangoPos=mango.body.position;
	var stonePos=stone.body.position;
	var dis=dist(stonePos.x,stonePos.y,mangoPos.x,mangoPos.y)
	if(dis<=50){
		Matter.Body.setStatic(mango.body,false);
	}

}
function keyPressed(){
	if (keyCode===32){
		chainy.attach();
	}
}



