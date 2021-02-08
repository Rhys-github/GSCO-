var bullet , wall;
var thickness , speed , weight

function setup(){
  createCanvas(1600,400)
  speed = random(223 , 321);
  weight = random (30 , 52);

bullet = createSprite(500,20,50,50)
wall = createSprite(1200,200,60,100)

bullet.velocityX = 5;

thickness= random(22,83)

}

function draw() {

background("black")

if(hasCollided(bullet,wall)){
  bullet.velocityX = 0
  var damage = 0.5 * weight * speed * spped/(thickness * thickness * thickness )

  if (damage>10){
    wall.shapeColor = ("red")
  }
  if (damage<10){
    wall.shapeColor = ("green")
  }
}

drawSprites();
