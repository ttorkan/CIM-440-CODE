var hitX = 100;
var hitY = 100;
var threshold = 20;

function setup() {
  // put setup code here
  createCanvas(400,400);
}

function draw() {
  // put drawing code here
  ellipse(hitX, hitY, threshold*2, threshold*2);
  var hitDistance = dist(mouseX, mouseY, hitX, hitY);
  console.log("hitDistance " + hitDistance);
  if(hitDistance <= threshold){
    fill(127);
    text("click me", hitX, hitY+30);
  }else{
    fill(255);
  }
}

function mousePressed{
  if(hitDistance <= threshold){

  }else{

  }
}
