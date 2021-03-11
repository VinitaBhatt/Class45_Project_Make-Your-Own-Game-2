class Enemy{
    constructor(){

    }

    spawnEnemy() {
        var randomFrame = Math.round(random(50, 100));
        if (frameCount % randomFrame === 0) {
          enemy = createSprite(displayWidth, displayHeight-225, 20, 20);
          enemy.collide(invisibleRoad);
          enemy.velocityX = -4;
          enemy.scale = .45;
          enemy.addAnimation("enemy_running", enemyAnimation)
          enemyGroup.add(enemy);
          enemy.lifetime = displayWidth/4;
          enemyCount++;
          //console.log("enemy count" + enemyCount);
        }
      }
}