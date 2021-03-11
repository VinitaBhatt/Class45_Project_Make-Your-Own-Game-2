var bg, bgImage;
var game;
var gunMan,gunManStandingAnimation, gunManAnimation, gunManSittingAnimation, gunManKilledAnimation;
var gameState="play";
var gunManObject,enemyObject;
var enemyAnimation, enemy, enemyImage, enemyGroup;
var enemyCount;
var enemyBulletImage;

function preload(){
   bgImage = loadImage("images/City_BG2.jpg");
   gunManStandingAnimation = loadAnimation("images/gunMan_stand.png");
   gunManAnimation = loadAnimation("images/GM1T.png", "images/GM2T.png", "images/GM5T.png", "images/GM6T.png", "images/GM1T.png");
   gunManSittingAnimation = loadAnimation("images/gunMan_sit2.png");
   gunManKilledAnimation = loadAnimation("images/gunMan_killed4.png");
   enemyAnimation = loadAnimation("images/enemy1.png", "images/enemy2.png", "images/enemy3.png", "images/enemy4.png", "images/enemy5.png");
   enemyImage = loadImage("images/enemy1.png");
   enemyBulletImage = loadImage("images/normal bullet.png");
}


function setup(){

  createCanvas(displayWidth, displayHeight-150);
  bg = createSprite(displayWidth/2, displayHeight/2-80);
  bg.addImage(bgImage);
  bg.scale = 0.95;

  game = new Game();

  gunMan = createSprite(displayWidth/4, displayHeight/4);
  gunMan.addAnimation("gunManStanding", gunManStandingAnimation);
  gunMan.addAnimation("GunMan_Running", gunManAnimation);
  gunMan.addAnimation("GunMan_Sitting", gunManSittingAnimation);
  gunMan.addAnimation("GunMan_Killed",gunManKilledAnimation);
  gunMan.scale = 0.7;

  invisibleRoad = createSprite(bg.width / 2, displayHeight-150, bg.width, 20);
  invisibleRoad.visible = false;

  bulletGroup = new Group();
  enemyGroup = new Group();
  enemy2Group = new Group();
  enemyFireGroup = new Group();

  enemyCount=0;
  
}

function draw(){
    if(gameState === "play"){
        game.play();
    }
    
    drawSprites();
}