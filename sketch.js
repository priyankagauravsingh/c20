var a,b
function setup() {
  createCanvas(800,400);
 a= createSprite(400, 200, 50, 50);
 b= createSprite(300, 399, 50, 50);
 a.shapeColor="green"
 b.shapeColor="green"
 a.velocityY=4;
 b.velocityY=5;
}

function draw() {
  background(255,255,255); 
  b.x=World.mouseX
  b.y=World.mouseY
 // console.log(a.x-b.x)
  console.log(a.y-b.y)
 if(a.x-b.x<a.width/2+b.width/2 && b.x-a.x<a.width/2+b.width/2) {
 // a.shapeColor="red"
 // b.shapeColor="red"
 a.velocityX=a.velocityX*(-1);
 b.velocityX=b.velocityX*(-1);

 }
 if(a.y-b.y<a.width/2+b.width/2 && b.y-a.y<a.width/2+b.width/2){
  
   // a.shapeColor="green"
    //b.shapeColor="green"
    a.velocityY=a.velocityY*(-1);
 b.velocityY=b.velocityY*(-1);
  }
  drawSprites();
}