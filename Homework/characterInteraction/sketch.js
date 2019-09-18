var mouthOpen;

var pointX = 0;
var pointY = 0;

function setup() {
  createCanvas(500, 500);

}


function draw() {
  background("#ADD8E6");
  fill("white");


  pointX = mouseX;
  pointY = mouseY;

  strokeWeight(4);

  //left eye
  ellipse(200,160,40,40);
  //right eye
  ellipse(300,160,40,40);

  fill("black");
  //left pupil
  ellipse(200,160,20,20);
  //right pupil
  ellipse(300,160,20,20);

  fill("white");
  triangle(230, 220, 270, 220, 250, 200);

  //mouth
  arc(250, 250, 200, 200, 0, PI);

  //x1, y1, x2, y2
  line(150, 250, 350, 250);

  line(165, 300, 335, 300);

  if (pointX > 150 && pointX < 350 && pointY > 200 && pointY < 400){
    line(155, 278, 343, 278);
    line(172, 312, 327, 312);
    fill("#ADD8E6");
    strokeWeight(0);
    //x, y, width, height, top left, top right, bottom right, bottom left
    rect(150, 280, 200, 30);
  }

  strokeWeight(4);
  fill("yellow");
  //pizza
  triangle(pointX - 30, pointY + 30, pointX + 30, pointY + 30, pointX, pointY - 20);
  //crust
  strokeWeight(3);
  fill("#DEB887")
  rect(pointX - 32, pointY + 30, 64, 10);
  //peperoni
  strokeWeight(0);
  fill("red");
  ellipse(pointX, pointY, 10, 10);
  ellipse(pointX + 10, pointY + 20, 10, 10);
  ellipse(pointX - 10, pointY + 15, 10, 10);


}
