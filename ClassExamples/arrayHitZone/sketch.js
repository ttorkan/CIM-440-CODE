
var currentImage = 0;
var imageArray = [];

var hitX = [100, 200];
var hitY = [300, 300];

var hitSize = 50;

//preload is a function that goes before the setup, for loading media
function preload(){
  imageArray[0] = loadImage("images/puppy.jpg");
  imageArray[1] = loadImage("images/dinosaur.jpg");
  imageArray[2] = loadImage("images/sloth.jpg");
  imageArray[3] = loadImage("images/bear.jpg");
  imageArray[4] = loadImage("images/ibis.jpg");
}


function setup() {
  createCanvas(400, 400);

}


function draw() {
  // put drawing code here
  background("255");
  image(imageArray[currentImage], 0, 0, imageArray[currentImage].width/4,
    imageArray[currentImage].height/4);

  rect(hitX[0], hitY[0], hitSize, hitSize);
  rect(hitX[1], hitY[1], hitSize, hitSize);
}

function mousePressed(){
  if(mouseX > hitX[0] && mouseX < hitX[0]+hitSize && mouseY > hitY[0] &&
     mouseY < hitY[0]+hitSize){
       console.log("button 0 ");
       currentImage = currentImage + 1;
       if(currentImage == imageArray.length){
         currentImage = 0;
       }
  }

  if(mouseX > hitX[1] && mouseX < hitX[1]+hitSize && mouseY > hitY[1] &&
     mouseY < hitY[1]+hitSize){
       currentImage = currentImage - 1;
       if(currentImage == 0){
         currentImage = imageArray.length - 1;
       }
     }
}
