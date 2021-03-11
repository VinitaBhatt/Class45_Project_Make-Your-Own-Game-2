class Game{
    constructor(){

    }

    play(){

        gunManObject = new GunMan();
        gunManObject.display();

        enemyObject = new Enemy();
        enemyObject.spawnEnemy();
    }


}