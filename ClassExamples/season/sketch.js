var seasonsSelect;
var seasonType = "";

var sunX = 0;
var sunY = 0;

var snowX = [];
var snowY = [];
var snowAmount = 100;

var leafX = [];
var leafY = [];
var leafAmount = 100;
var leafImage;

function preload(){
  leafImage = loadImage("https://openclipart.org/image/300px/svg_to_png/257622/1470680735.png");
}

function setup() {
  // put setup code here
  createCanvas(400,400);
  seasonsSelect = createSelect();
  seasonsSelect.position(10,10);
  seasonsSelect.option("");
  seasonsSelect.option("fall");
  seasonsSelect.option("winter");
  seasonsSelect.option("spring");
  seasonsSelect.option("summer");
  seasonsSelect.changed(function(){

    seasonType = seasonsSelect.value();

  });

  sunX = width/2;
  sunY = height * 2;

  for (var i = 0; i<snowAmount; i++){
    snowX[i] = random(0, width);
    snowY[i] = random(0, -500);
  }
  console.log("snowX " + snowX);
  console.log("snowY " + snowY);

  for(var i = 0; i < leafAmount; i++){
    leafX[i] = random(0,width);
    leafY[i] = random(0,-500);
  }
  console.log("leafX " + leafX);
  console.log("leafY " + leafY);

}

function draw() {
  // put drawing code here
  background(255);

  if(seasonType == "fall"){
    for (var l = 0; l<leafAmount; l++){
      image(leafImage,leafX[l], leafY[l], 20, 20);
      if (leafY[l] < height -20){
        leafY[l]++;
        leafX[l] = leafX[l] + sin(radians(frameCount));
      }
    }
    console.log("fall");

    } else if(seasonType == "winter"){
    console.log("winter");
    for(var x = 0; x < snowAmount; x++){
      snowY[x]++;
      ellipse(snowX[x], snowY[x], 10, 10);
      if(snowY[x] > height){
        snowY[x] = random(0, -500);
      }
    }
  }else if(seasonType == "spring"){
    console.log("spring");
  }else if(seasonType == "summer"){
      console.log("summer");
      fill("orange");
      stroke("red");
      ellipse(sunX, sunY, width, height);

      if(sunY > height){
          sunY = sunY -1;
      }
  }else{
    console.log("blank");
    text("Make a selection", 100,20);
  }







}//end of draw loop
