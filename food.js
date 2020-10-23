class food{
    constructor(){
        var foodStock, lastFed
    }
    Display(){
        var x=80, y=100;

        imageMode(CENTER);
        image(this.image,720,220,70,70);

        if(this.foodStock!=0){
            for(var i=0;i<this.foodstock;i++){
                if(i%10==0){
                    x=80;
                    y=y=50;
                }
                image(this.image,x,y,50,50);
                x=x+30;
            }
        }
        function feedDog(){
            dog.addImage(happyDog)

            foodObj.updateFoodStock(foodObj.getFoodStock()-1);
            database.ref('/').update({
                Food:foodObj.getFoodStock(),
                FeedTime:hour()
            })
        }
        function addFood() {
            foodS++;
            database.ref('/').update({
                Food:foodS
            })
        }
    }
}