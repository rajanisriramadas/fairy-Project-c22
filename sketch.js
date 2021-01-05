var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;
var myengine, myworld

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	// fairyVoice.play();

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	myengine = Engine.create();
	myworld = myengine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(myworld, starBody);
	
	Engine.run(myengine);


	fairy.debug = true;

	fairy.setCollider("circle",0,0,500);
	star.debug = true;

}


function draw() {
  background(bgImg);


  star.x = starBody.position.x;
  star.y = starBody.position.y;

  keyPressed();

  drawSprites();

}

function keyPressed() {
	if(keyDown("left_arrow"))
	{
		fairy.x = fairy.x-3;
	}
	
	if(keyDown("right_arrow"))
	{
		fairy.x = fairy.x+3;
	}
  
  
	if(keyDown("down_arrow"))
	{
		Matter.Body.setStatic(starBody,false);
	}



	if(star.y>470 && fairy.isTouching(star))
	{
	  Matter.Body.setStatic(starBody,true);
	}
  
}
