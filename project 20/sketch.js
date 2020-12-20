var z, wall
var speed, weight 

function setup() {
  createCanvas(1600,400);

  speed=random(55,90)
  weight=random(400,1500)

  //car = createSprite(50,200,50,50)
  z = createSprite(50,200,50,50)
  wall = createSprite(1300,200,60, height/2)
  console.log(speed)
  //car.velocityX = 10 ; 
  z.velocityX = speed ;
}

function draw() {
  background("black");  
  //drawSprites();

  if(wall.x - z.x < z.width/2 + wall.width/2){
    z.velocityX=0; 
    var deformation=0.5 * weight * speed * speed/22500; 
    if(deformation>180) 
    { z.shapeColor=color(255,0,0);
     }
     if(deformation<180 && deformation>100) { 
       z.shapeColor=color(230,230,0); } 
     if(deformation<100) { 
       z.shapeColor=color(0,255,0);
     }
  }
 drawSprites() ; 
}