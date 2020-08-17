//Create variables here
var dog,happydog;
var  database;
var foodS,foodStock;
function preload()
{
  dog.loadImage("dogImg.png");
  happydog.loadImage("dogImg1.png");
}

function setup() {
	createCanvas(500, 500);
  foodStock=database.ref('food');
  foodStock.on("value",readStock);

  function readStock(data){
    foodS=data.val();
  }
  function writeStock(x){

    database.ref('/').update({
      food:x
    })
  }
}


function draw() {  
  background(46,139,87);
  Text('foodStock'+':'+ foodS);
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogImg1.png);
    foodStock=foodStock-1;

  }
  drawSprites();
  //add styles here
  textSize(30);
  fill('red');
  stroke(2);
  
}

function writeStock(x){
  if(x<=0){
    x=0;
  }
  else{
    x=x-1;
  }

}



