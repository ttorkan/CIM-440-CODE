var puppyImage;

//preload runs first. its good for when you're working with media
function preload(){
  puppyImage = loadImage("puppy.jpg");
}


function setup() {
  createCanvas(400, 400);
}


function draw() {
  //image var, x, y
  image(puppyImage, 0, 0);
  //image var, x pos, y pos, width, height
  image(puppyImage, 0, 0, puppyImage.width/4, puppyImage.height/4);

}
