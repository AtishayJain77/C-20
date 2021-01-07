var fixedRect, moveRect;


function setup() {
  createCanvas(1200,800);
   fixedRect = createSprite(400, 200, 50, 50);
   moveRect = createSprite(300,250,40,40);
   moveRect.shapeColor = "green";
   fixedRect.shapeColor= "green";
   moveRect.debug = true;
   fixedRect.debug=true;
}

function draw() {
  background("black");  
  moveRect.x = mouseX;
  moveRect.y = mouseY;
  // horizontal distance between the rect = the fixedRect.width/2+moveRect.width/2
  // distance between the centres of the rectangles =  moveRect.x- fixedRect.x
  if(fixedRect.x - moveRect.x < fixedRect.width/2+moveRect.width/2 &&
     moveRect.x- fixedRect.x < fixedRect.width/2+moveRect.width && 
     moveRect.y- fixedRect.y < fixedRect.height/2+moveRect.height&&
     fixedRect.y- moveRect.y < fixedRect.height/2+moveRect.height){
    moveRect.shapeColor="red";
    fixedRect.shapeColor="red";
  }

  else{
    moveRect.shapeColor="green";
    fixedRect.shapeColor="green";
  }


  drawSprites();
}