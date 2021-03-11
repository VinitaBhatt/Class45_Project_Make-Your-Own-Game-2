class GunMan{
    constructor(){
        

    }

    display(){
        gunMan.collide(invisibleRoad);
        camera.position.x = gunMan.x+550;

        if (bg.x < 0) {
            bg.x = bg.width / 2;
        }
         
        if (keyWentDown("right") && !keyDown("down")) {
            bg.velocityX = -3;
            gunMan.changeAnimation("GunMan_Running", gunManAnimation);
            gunMan.x = gunMan.x + 6;
          }

          if (keyDown("up")) {
            gunMan.velocityY = -12;
          }

          gunMan.velocityY = gunMan.velocityY + 0.8;
    }
}