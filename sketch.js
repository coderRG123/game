var player;
var wall1, wall2, wall3, wall4;
var up, left, right, down;
function preload(){
  back=loadImage("Artic.png");
}
function setup() {
createCanvas(displayWidth*4, displayHeight*4);


  player=createSprite(200, 200, 20, 20);
  player.shapeColor="red";
 
  
  
 

  wall1=createSprite(350, 5, 700, 10);
  wall2=createSprite(350, 695, 700, 10);
  wall3=createSprite(5, 350, 10, 700);
  wall4=createSprite(695, 350, 10, 700);

  up=createButton("UP");
  left=createButton("LEFT");
  right=createButton("RIGHT");
  down=createButton("DOWN");
}


function draw() {
  background(back);

  up.position(player.x+100, player.y+100);
  right.position(player.x+150, player.y+120);
  left.position(player.x+50, player.y+120);
  down.position(player.x+100, player.y+150);

  if(keyDown("right")){
    player.x+=5;
    camera.x-=5;
  }

  if(keyDown("left")){
    player.x-=5;
    camera.x+=5;
  }

  if(keyDown("up")){
    player.y-=5;
    camera.y+=5;
  }

  if(keyDown("down")){
    player.y+=5;
    camera.y-=5;
  }


  up.mousePressed(()=>{
    player.y-=15;
  })

  down.mousePressed(()=>{
    player.y+=15;
  })

  right.mousePressed(()=>{
    player.x+=15;
  })

  left.mousePressed(()=>{
    player.x-=15;
  })
  
player.bounceOff(wall1);
player.bounceOff(wall2);
player.bounceOff(wall3);
player.bounceOff(wall4);

  drawSprites();
}

