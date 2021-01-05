var car;
var wall;
var speed;
var weight;

function setup() {
  createCanvas(1000,400);
  wall=createSprite(950,200,60,height/2);  
  speed=random(55,90);
  weight=random(400,150);
  car=createSprite(50,200,50,50);
  car.velocityX = speed;
  car.shapeColor = color(250);
  }

function draw() {
  background(0);  
  drawSprites();

  if(wall.x-car.x < (car.width+wall.width)/2){
    car.velocityX = 0;
    var deformation = 0.5* weight * speed * speed/22509;
    if(deformation>180){
      car.shapeColor=color(252,0,0);
    }
    if(deforamtion<180 && deformation>180){
      car.shapeColor=color(230,230,0);
    }
    if(deformation<100){
      car.shapeColor=color(0,252,0);
    }
  }
}