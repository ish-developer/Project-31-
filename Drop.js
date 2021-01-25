class Drop{
    constructor(x,y,radius){
    
        this.body = Bodies.circle(x,y,radius);
        this.radius = radius;
        this.x = x;
        this.y = y;
        this.velocityY = random(2,5);
        this.color = fill("blue");
        World.add(world,this.body);
    }
    fall(speed){
        this.y +=speed;
    }
    display(){
        push();
        noStroke();
              
        ellipse(this.x, this.y, this.radius);
        pop();
    }
}