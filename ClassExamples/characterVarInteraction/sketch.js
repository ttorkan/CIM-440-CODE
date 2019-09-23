var pointX = 0;
var pointY = 0;

var point2;
var faceColor = "blue";

var colorButton;


function setup() {
  // put setup code here
  createCanvas(500, 500);
  pointX = width/2;
  pointY = width/2;

  console.log("pointX " + pointX + " pointY " + pointY);
  console.log(point2);

  //creating a button
  colorButton = createButton("Click to turn purple");//createButton is a function that is part of the
                                          //p5.dom library, and creates an HTML tag. should not be in drawfunction
  colorButton.position(20, 20);
  colorButton.mousePressed(function(){
    faceColor = "purple";
  });

}


//FUNCTIONS WORK IN A LOOP!!!
function draw() {


  pointX = mouseX;
  pointY = mouseY;

  //use an if statement to change background color
  if(mouseX < width/2){
    console.log("left side");
  }
  if(mouseX > width/2){
    console.log("right side");
  }



  strokeWeight(3);
  fill(faceColor);
  rect(pointX - 100, pointY - 100, 200, 200)
  fill("white");
  ellipse(pointX, pointY, 10, 10);
  ellipse(pointX + 20, pointY - 20, 30, 30);
  ellipse(pointX - 20, pointY - 20, 30, 30);

  //x, y, width, height, start right corner, end left corner
  arc(pointX, pointY + 10, 50, 50, 0, PI);


}

function mousePressed(){
  faceColor = "red";
}

function mouseReleased(){
  faceColor = "blue";
}

function keyPressed(){
  console.log("keyCode " + keyCode);
  console.log("key " + key);

  if(key == "w"){
    faceColor = "white";
  }
  if(key == "r"){
    faceColor = "red";
  }
}

function keyReleased(){
  faceColor = "blue";
}
