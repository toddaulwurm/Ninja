class Ninja {
    constructor(name, health){
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3; 
    }
    sayName(){
        console.log(this.name);
    }
    showStats(){
        console.log(this.health, this.speed, this.strength);
    }
    drinkSake(){
        this.health+= 10;
    }
}
const Todd = new Ninja("Todd", 100);
Todd.sayName();
Todd.showStats();
Todd.drinkSake();
Todd.showStats();

