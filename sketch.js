//Create variables here
var dog,dog_img,dog_img1;
var database,stock;

function preload()
{
 dog_img = loadImage("images/dogimg.png");
 dog_img1 = loadImage("images/dogimg1.png");
}

function setup() {
  createCanvas(800, 700);
  dog = createSprite(400,350,50,50);
  dog.addImage(dog_img);
  //stock = 20
  dog.scale = 0.3;
  database = firebase.database();
  console.log(database);
  
}


function draw() {  
  background(255);
  stockremain();
  drawSprites();
  text("food: "+stock,400,200)
  textSize(10);
  fill("red"); 
  //add styles here
  if(keyWentDown(UP_ARROW)){
    stockGive(stock);
    dog.addImage(dog_img1);

  }

  if(keyWentUp(UP_ARROW)){
    dog.addImage(dog_img);
  }

}

function stockremain(){
  database.ref("dog/food").on("value",function(data){
    stock = data.val();
  })
}

function stockGive(){
  stock = stock-1;
  if(stock<0){
    stock = 20;
  }
  database.ref("dog").update({food:stock});
  
}

