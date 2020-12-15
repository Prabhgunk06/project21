var bullet,wall,thickness;
var bullet,speed,weight;

function setup() {
  createCanvas(1600,400);
  bullet=createSprite(50, 200, 80, 30);
  bullet.shapeColor=color("white")
  wall=createSprite(1200, 200, thickness , height/2);
  wall.shapeColor=color(80,80,80)
  speed=random(223,321);
  thickness=random(22,83);
  weight=random(30,52);
  bullet.velocityX = speed;
}

function draw() {
  background("grey");  
  if(wall.x-bullet.x < (bullet.width+wall.width)/2){
  bullet.velocityX=0;
  var deformation=0.5*weight*speed*speed/22509;
  if(deformation>180){
    bullet.shapeColor=color(255,0,0);
  }
  if(deformation<180 && deformation > 100){
  bullet.shapeColor=color(230,230,0);
  }
  if(deformation < 100){
  bullet.shapeColor=color(0,255,0);
  }
  }
   if(hasCollided(bullet,wall)){
     bullet.velocityX=0;
     var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
     
     if(damage>10){
       wall.shapeColor=color(255,0,0)
     }
    if(damage<10){
      wall.shapeColor=color(0,255,0);

    }

   }



  drawSprites();
}
function hasCollided(bullet,wall){
  bulletRightEdge=bullet.x+ bullet.width;
  wallLeftEdge=wall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true;
    }
    return false
}