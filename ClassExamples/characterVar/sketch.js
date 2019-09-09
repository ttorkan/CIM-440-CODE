var pointX = 0;
var pointY = 0;

function setup() {
  // put setup code here
  createCanvas(500, 500);
  pointX = width/2;
  pointY = width/2;

  console.log("pointX " + pointX + " pointY " + pointY);
}

//FUNCTIONS WORK IN A LOOP!!!
function draw() {

  background("white");
  pointX = mouseX;
  pointY = mouseY;

  strokeWeight(3);
  rect(pointX - 100, pointY - 100, 200, 200)
  ellipse(pointX, pointY, 10, 10);
  ellipse(pointX + 20, pointY - 20, 30, 30);
  ellipse(pointX - 20, pointY - 20, 30, 30);

  //x, y, width, height, start right corner, end left corner
  arc(pointX, pointY + 10, 50, 50, 0, PI);


}
