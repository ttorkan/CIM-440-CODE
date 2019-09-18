var puppyImage;

var show;
var hide;

var showAndHide = false;

//preload runs first. its good for when you're working with media
function preload(){
  puppyImage = loadImage("puppy.jpg");
}


function setup() {
  createCanvas(400, 400);
  show = createButton("Show");
  hide = createButton("Hide");

  show.mousePressed(function(){
    showAndHide = true;
  });
  hide.mousePressed(function(){
    showAndHide = false;
  })
}


function draw() {
  background(225);
  if(showAndHide == true){
    image(puppyImage, 0, 0, puppyImage.width/4, puppyImage.height/4);
  }
}
