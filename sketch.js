var pacman;
var pacmanrImage;
var pacmanlImage;
var pacmanuImage;
var pacmandImage;
var line1,line2,line3,line4,line5,line6,line7,line8,line9,line10;
function preload(){
  pacmanrImage= loadImage("bgrightpacman.png")
  pacmanlImage= loadImage("bgleftpacman.png")
  pacmandImage= loadImage("bgdownpacman.png")
  pacmanuImage= loadImage("bguppacman.png")
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  
  pacman=createSprite(width-500,height-300)
  pacman.scale=.3     
  
  line1=createSprite(width-700,height-250,600,5);
  line1.shapeColor="yellow"
 
  
  line2=createSprite(width-700,height-340,600,5);
  line2.shapeColor="red"
  
  line3=createSprite(width-405,height-200,5,100)
  line3.shapeColor="red"

  line4=createSprite(width/2-50,height/2-height/2.15,width-width/8,10)
  line4.shapeColor="yellow"
  
  line5=createSprite(width/2-width/2.109,height/2,10,height-53)
  line5.shapeColor="yellow"

  line6=createSprite(width/2-50,height-25,width-width/8,10)
  line6.shapeColor="red"

  line7=createSprite(width/2-width/600,height/2,10,height-53)
  line7.shapeColor="red"

  line8=createSprite(width-1000,height-387,5,100)
  line8.shapeColor="red"

  
  line9=createSprite(width-700,height-440,600,5);
  line9.shapeColor="red"
}

function draw() {
  background("black");
  if(keyDown("LEFT_ARROW")){
    pacman.addImage("left",pacmanlImage)
    pacman.scale=.25
    pacman.velocityX=-5
    pacman.velocityY=0
  }
  if(keyDown("DOWN_ARROW")){
    pacman.addImage("left",pacmandImage)
    pacman.scale=.25
    pacman.velocityY=5
    pacman.velocityX=0
  }
  if(keyDown("RIGHT_ARROW")){
    pacman.addImage("left",pacmanrImage)
    pacman.scale=.25
   pacman.velocityX=5
   pacman.velocityY=0

  }
  if(keyDown("UP_ARROW")){
    pacman.addImage("left",pacmanuImage)
    pacman.scale=.25
    pacman.velocityY=-5
    pacman.velocityX=0
  }
  createEdgeSprites();
  pacman.bounceOff(line1);
  pacman.bounceOff(line2);
  pacman.bounceOff(line3);
  pacman.bounceOff(line4);
  pacman.bounceOff(line5);
  pacman.bounceOff(line6);
  pacman.bounceOff(line7);
  pacman.bounceOff(line8);
  pacman.bounceOff(line9);

 drawSprites();
    
}

  