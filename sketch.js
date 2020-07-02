var bullet, wall;
var speed,weight,thickness,damage;

function setup() {

  createCanvas(1600,400);

  speed = round(random(223,321));
  weight = round(random(30,52));
  thickness = round(random(22,83));
  damage = 0;

   bullet = createSprite(50, 200, 80, 30);
   bullet.velocityX = speed;
   bullet.shapeColor = "gray";

   wall = createSprite(1200,200,thickness,height/2);
   wall.shapeColor = (80,80,80);
   
}

function draw() {

  background("black"); 
  
  if(bullet.isTouching(wall)){
    damage = round(0.5*weight*speed*speed/thickness*thickness*thickness);
    bullet.velocityX = 0;
    bullet.x = 1140;
  }

  if(damage <= 10){
    wall.shapeColor = "green";
  }

  else if(damage < 10){
    wall.shapeColor = "red";
  }

  drawSprites();

  text("speed: " + speed,50,50);
  text("weight: " + weight,50,150);
  text("damage: " + damage,50,250);
  text("thickness: " + thickness,50,350)
}