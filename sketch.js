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
  database = firebase.database();
  dog = createSprite(250,250,20,20)
  dog.addImage(Dog)
  dog.scale = 0.5;
  foodStock = database.ref('Food')
  foodStock.on("value", readStock)
}


function draw() {  
background(46,139,87)
if(keyDown(UP_ARROW)){
  writeStock(foodS)
  dog.addImage(happyDog)
}
  drawSprites();
  //add styles here
  textSize(25);
  fill("black")
  text("Use the up arrow key to feed Tango", 100, 40)
}
//Function to read values from DB
function readStock(data){
  foodS=data.val();
}

//Function to write values in DB
function writeStock(x){

  if(x<= 0){
    x= 0;
  }else{
    x= x-1;
  }
    database.ref('/').update({
      Food:x
    })
}