function setup() {
  // put setup code here
  //seting the size of the canvas
  createCanvas(500,500);

  //setting the color of the background
  background("green");
  //greyscale 0-255
  background(0); //black
  background(255); //white
  background(200); //greyish white
  //using RGB or HEX color codes
  background(255, 0, 0); //full red
  background(0, 255, 0); //full green
  background(0, 0, 255); //full blue
  background("#00FFFF"); // hexidecimal

  //elipse: (x, y, w, h)
  fill("green"); //changes inner shape color
  stroke("orange"); //changes outer edge color
  ellipse(50, 50, 100, 100);

  //if you dont change the fill or stroke before the next object, it will have the same colors.
  fill("orange");
  ellipse(100, 100, 50, 50);
}

function draw() {
  // put drawing code here
}
