function setup() {
  // put setup code here
  createCanvas(500, 500);
  background("#ADD8E6");
}

//FUNCTIONS WORK IN A LOOP!!!
function draw() {
  // put drawing code here

  //put stroke weight at beginning of code so the last one doesnt effect it!
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
  triangle(230, 220, 270, 220, 250, 200)

  //mouth
  arc(250, 250, 200, 200, 0, PI);

  line(150, 250, 350, 250);

  line(165, 300, 335, 300);
}
