var monkey, ground, bananaGroup, obstacleGroup;
var monkey_image, background, score;

function preload() {
  monkey_image = loadAnimation("Monkey_01.png", "Monkey_02.png", "Monkey_03.png", "Monkey_04.png", "Monkey_05.png", "Monkey_06.png", "Monkey_07.png", "Monkey_08.png", "Monkey_09.png", "Monkey_10.png");
  background = loadImage("jungle.jpg");
}

function setup(){
  createCanvas(400,400);
  ground = createSprite(400,350,800,10);
  ground.visible = false;
  
  score = 0;
  
  monkey = createSprite(100,340,20,50);
  monkey.addAnimation(monkey_image);
  monkey.scale = 0.1;
  
  bananaGroup = createGroup();
  obstacleGroup = createGroup();
  
  stroke("white");
  textSize = 20;
  fill("white");
}

function draw(){
  background(220);
  
  ground.velocityX = -4;
  ground.x = ground.width/2;
  
  if(keyDown(SPACE) && monkey.y === 340){
    monkey.velocityY = 5;
  }
  
  if(monkey.y < 220){
    monkey.velocityY = 5;
  }
  
  if(monkey.isTouching(ground)){
    monkey.velocityY = 0;
    monkey.y = 340;
  }
  
  if(monkey.isTouching(bananaGroup)){
    score = score + 2;
    bananaGroup.destroyEach();
  }
  
  if(monkeyGroup.isTouching(obstacleGroup)){
    score = 0;
    obstacleGroup.destroyEach();
    bananaGroup.destroyEach();
    //basically resetting everything without having to press a play button
  }
  
  text("Score:" + score, 500,50);
  
  bananaGroup();
  obstacleGroup();
  
  function bananaGroup(){
    if(World.frameCount % 80 === 0){
      var banana 
      = createSprite(280,randomNumber(220,330),20,20);
      
      banana.loadAnimation("banana.png");
      banana.scale = 0.05;
      banana.velocityX = -3;
    }
  }
  
  function obstacleGroup(){
    if(World.frameCount % 300 === 0){
      var obstacle 
      = createSprite(280,randomNumber(220,330),20,20);
      obstacle.setAnimation("stone.png");
      obstacle.scale = 0.15;
      obstacle.velocityX = -5;
    }
  }
  drawSprites();
}