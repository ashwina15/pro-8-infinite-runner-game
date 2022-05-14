var alien_Image, coin_Image, space_Image, water_Image, ufo_Image, person_Image, ground;

function preload() {
  alien_Image=loadImage("alien.png");
  coin_Image=loadImage("coin.png");
  space_Image=loadImage("spacebg.jpg");
  ufo_Image=loadImage("ufo.png");
  water_Image=loadImage("water.png");
  person_Image=loadImage("person.png");

}

function setup() {
  createCanvas(800, 600);

ground=createSprite(400, 580, 800, 30);
ground.x=ground.width/2
ground.visible=false;

alien=createSprite(100, 505, 20, 50)
alien.addImage("alien",alien_Image);
alien.scale=0.15

coin=createSprite(290,570,20,50)
coin.addImage("coin",coin_Image);
coin.scale=0.01

person=createSprite(200, 525, 20, 50)
person.addImage("person",person_Image);
person.scale=0.14

ufo=createSprite(290,570,20,50)
ufo.addImage("ufo",ufo_Image);
ufo.scale=0.01

}

function draw() {
  background(space_Image);  
  ground.velocityX=-1;

  if(ground.x<0){
  ground.x=ground.width/2 
  }

  drawSprites();
  


}