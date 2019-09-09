function setup() {
  // put setup code here
  createCanvas(500, 500);
  background("green");
}

//FUNCTIONS WORK IN A LOOP!!!
function draw() {
  // put drawing code here

  //put stroke weight at beginning of code so the last one doesnt effect it!
  strokeWeight(2);

  //left eye
  ellipse(100,100,20,20);
  //right eye
  ellipse(140,100,20,20);

  //mouth
  //rectangle-- x, y (of top left corner), width, height
  rect(70, 150, 100, 30);
  //line-- x1, y1, x2, y2
  line(70, 165, 170, 165);

  //singular pixel
  strokeWeight(5);
  point(30, 27)

  //width/2 center point of width, height/2 center point of height
  //console.log("width " + width);
  //console.log("height " + height);

  triangle(width/2, height/2, width/2 +10, height/2 + 20, width/2 - 10, height/2 +20);

  arc(50, 50, 50, 50, 0, PI);


}
