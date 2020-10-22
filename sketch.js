//Create variables here
var Dog,happyDog,database,foodS,foodStock
function preload()
{
  //load images here
   Dog = loadImage("images/dogImg.png")
   happyDog = loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(500, 500);
  dog = createSprite(250,250,20,20)
  dog.addImage("Dog")
  foodStock = database.ref('Food')
  foodStock.on("Value", readStock)
}


function draw() {  
background(46,139,87)
if(keyWentDown(UP_ARROW)){
  writeStock(foodS)
  dog.addImage(happyDog)
}
  drawSprites();
  //add styles here

}
text("foodStock", 50,20)
textSize(20)

//Function to read values from DB
function readStock(data){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }
  foodS-data.val();
}

//Function to write vlaues in DB
function writeStock(x){

    database.ref('/').update({
      Food:x
    })
}