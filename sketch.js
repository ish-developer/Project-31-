const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
drops = []
var batman;
var thunder,thunderimg;

function preload(){
    batmanImg = loadImage("walking_1.png");
    thunderimg = loadImage("1.png"); 
    thunderimg2 = loadImage("2.png");
}

function setup(){
    var canvas = createCanvas(1000,800);
    engine = Engine.create();
    world = engine.world;
    
    batman= createSprite(500,300,20,20);
    batman.addImage(batmanImg);
    batman.scale=0.2;

    thunder = createSprite(600,5,10,40);
 thunder2 = createSprite(250,2,10,10);
}

function draw(){
    background("black");

    if(frameCount%1===0){
        var raindrops = new Drop(random(0, windowWidth), -100,10);
        drops.push(raindrops);
    }
    if(frameCount % 10 === 0) {
        var rand = Math.round(random(1,2));
          switch(rand) {
            case 1:thunder.addImage(thunderimg);
                   thunder.scale = 2;
                    break;
            case 2:thunder.addImage(thunderimg2);
                   thunder.scale = 1.3;
                    break;
             default: break;
          }
        }   
        if(frameCount % 10 === 0) {
          var rand = Math.round(random(1,2));
            switch(rand) {
              case 1:thunder2.addImage(thunderimg2);
                     thunder2.scale = 2;
                      break;
              case 2:thunder2.addImage(thunderimg);
                     thunder2.scale = 1.7;
                      break;
               default: break;
            }
          }   

    for(var i = 0; i < drops.length; i++){
        drops[i].fall(40);
        drops[i].velocityY++
        drops[i].display();
        drops[i].color;
      }
      drawSprites();
}

