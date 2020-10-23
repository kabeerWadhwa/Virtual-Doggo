//Create variables here
var Dog,happyDog,database,foodS,foodStock
var Feed,addFoods,feedDog
var foodObj
var lastFed, feedTime
function preload()
{
  //load images here
   Dog = loadImage("images/dogImg.png")
   happyDog = loadImage("images/dogImg1.png")
   foOd = loadImage("images/Milk.png")
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();
  dog = createSprite(250,250,20,20)
  dog.addImage(Dog)
  dog.scale = 0.5;
  foodStock = database.ref('Food')
  foodStock.on("value", readStock)
  Food = createSprite(100,100,20,20)
  Food.addImage(foOd)
  Food.scale = 0.2;

  feed=createButton("Feed the dog")
  feed.position(700,95)
  feed.mousePressed(feedDog)

  addFood=createButton("Add Foods")
  addFood.position(800,95)
  addFood.mousePressed(addFoods)
}


function draw() {  
background(46,139,87)
fedTime=database.ref('FeedTime')
fedTime.on("value",function(data){

})
  drawSprites();
  //add styles here
  Display();
  textSize(25);
  fill("black")
  text("Use the up arrow key to feed Tango", 100, 40)
  fill(255,255,254)
  textSize(15);
  if(lastFed>=12){
    text("Last Feed : "+ lastfed%12 + "PM", 350,30)
  }else if(lastFed==0){
    text("Last Feed : 12 AM", 350,30);
  }else{
    text("Last Feed :"+ lastFed + "AM", 350,30)
  }
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