//cirle drawing https://www.vexels.com/png-svg/preview/154555/hand-drawn-circle-icon
//cup drawing https://www.vectorstock.com/royalty-free-vector/tea-cup-hand-drawn-cup-icon-vector-8077510
//wave drawing https://www.vexels.com/png-svg/preview/153193/high-waves-hand-drawn
//water drop drawing https://www.123rf.com/photo_96783857_stock-vector-water-drop-hand-drawn-outline-doodle-icon-clear-fresh-water-drop-vector-sketch-illustration-for-prin.html
//reference opening/ closing circle https://editor.p5js.org/TimSherbert/sketches/ryC0T0caX
//reference for bubbles https://editor.p5js.org/jd/sketches/rJ5MX7jPm
//ocean sounds https://www.youtube.com/watch?v=wasGNXNdVgo&t=12s
//rain sounds https://www.youtube.com/watch?v=HbVYuPogyP0
//bubble popping sound https://www.youtube.com/watch?v=FCDeiBFju6M


var page = 0;

var bubbles = [];

//for circle
var diam = 100;
var inOut = true;

let myFont;

function preload(){
  circle = loadImage('images/circle.png');
  cup = loadImage("images/cup.png");
  wave = loadImage("images/wavee.png");
  waterdrop = loadImage("images/waterdrop.png")
  waves = loadSound('sounds/waves.m4a');
  rain = loadSound('sounds/rain.mp3');
  pop = loadSound('sounds/pop.m4a');
  myFont = loadFont('images/Mathlete-Bulky.otf');

}

function setup() {
  page = 0;
  var cnv = createCanvas(700,600);

  textFont(myFont);
  cnv.id("mycanvas");

  backButton = createButton('Back');
  backButton.mousePressed(function(){
    page = 0;
    backButton.hide();
    rain.stop();
    waves.stop();
  });

  var container0 = createDiv();
  container0.id("container0");

  select("#container0").style("width", "700px");
  select("#container0").style("margin", "20px auto");
  cnv.parent("#container0");
  select('body').style("background-color","#EFDECD");
  backButton.hide();

  //bubbles
	for (var i = 0; i < 10; i++) {
		bubbles.push({
			x: random(width),
			y: random(height),
			radius: random(50, 100)
		});
	}
}

function draw() {
  clear();
  fill("black");

  if (page == 0){
    textSize(80);
    text('Feeling Anxious?', 200, 100);
    textSize(55);
    text('Pick an exercise.', 245, 160);

    image(circle, 50, 300, 150, 150);
    text('breathing', 65, 520);
    image(cup, 280, 300, 150, 150);
    text('distracting', 280, 520);
    image(wave, 500, 300, 150, 150);
    text('calming', 525, 520);
  }

  if (page == 1){
    breathingExercise();
  }

  if (page == 2){
    relaxingExercise();
  }

  if (page == 3){
    distractingExercise();
  }
}


function mousePressed(){
  //changing pages
  if(page == 0){
    if(mouseX > 50 && mouseX < 200 && mouseY > 300 && mouseY < 600){
      console.log('breathing');
      page = 1;
      backButton.show();

    }
    if(mouseX > 280 && mouseX < 430 && mouseY > 300 && mouseY < 600){
      console.log('relaxing');
      page = 2;
      backButton.show();
    }
    if(mouseX > 500 && mouseX < 650 && mouseY > 300 && mouseY < 600){
      console.log('distracting');
      page = 3;
      backButton.show();

    }
  }else if(page == 3){
      if(mouseX > 120 && mouseX < 270 && mouseY > 220 && mouseY < 420){
          console.log('play rain');
          if (rain.isPlaying()) {
              rain.stop();
            } else {
              rain.play();
          }
      }
      if(mouseX > 425 && mouseX < 575 && mouseY > 220 && mouseY < 420){
        console.log('play waves');
          if (waves.isPlaying()) {
              waves.stop();
            } else {
              waves.play();
          }
      }
  }
}


function breathingExercise(){
  clear();
  fill("black");

  backButton.position(10,10);

  text('Breathe in and out with the circle.', 130, 130);

  fill("grey");
  noStroke();
  ellipse(360,370,300,300);
  fill("white");
  ellipse(360,370,diam)
	if(diam > 300){
  	inOut = false;
	}
	if(diam < 10){
	   inOut = true;
	}
	if(inOut){
	   diam++
	}
	if(!inOut){
	   diam--
	}
}



function relaxingExercise(){
  clear();

  for (var i = 0; i < bubbles.length; i++) {
		var bubble = bubbles[i];

    if (dist(mouseX, mouseY, bubble.x, bubble.y) < bubble.radius) {
			if (mouseIsPressed) {
				bubbles.splice(i, 1); // remove this bubble!
        pop.play();
			}
			fill("grey");
		} else {
			fill("white");
		}

    ellipse(bubble.x, bubble.y, bubble.radius*2);
	//	bubble.x += random(-1,1);
	  bubble.y += random(-1,1);
	}

  fill("black");
  text('Pop the bubbles.', 180, 100);
}


function distractingExercise(){
  clear();

  text('Pick a sound to listen to.', 180, 100);
  text('Click once to play and again to stop.', 100, 150);

  text('rain', 170, 420);
  image(waterdrop, 120, 220, 150, 150);
  text('ocean waves', 420, 420);
  image(wave, 425, 220, 150, 150);


}
