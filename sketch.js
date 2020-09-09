//Create variables here
var dog, happyDog, database, foodS, foodStock;
function preload()
{
  //load images her
dog = loadImage("../images/dogImg.png");
}

function setup() {
	createCanvas(500, 500);
  dog = createSprite(200,200);
  dog = loadImage("../images/dogImg.png");
  database = firebase.database();
  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
}

function draw() {  
background(46, 139, 87);
drawSprites();
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage("../images/dogImg1.png");
}  

//add styles here
text("Note: Press UP_ARROW Key to feed Drago Milk!",200);
textSize(50,30);
text.fill("red");
text.stroke();
}