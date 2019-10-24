var answer = "hello";
var banner;
var body = 0;
var letter = "";

var showH = false;
var showE = false;
var showL = false;
var showO = false;

var won = false;


function preload(){
  banner = loadImage('images/banner.png');
  song = loadSound('images/win_music.mp3');
}

function setup() {
  // START OVER BUTTON
  createCanvas(600,600);
  button = createButton('Start Over');
  button.position(465,535);
  button.mousePressed(function(){
    body = 0;
     showH = false;
     showE = false;
     showL = false;
     showO = false;
     won = false;
  });
}

function keyPressed(){
  if(won == false){
    var checkLetter = false;
    for (var i = 0; i < answer.length; i++){
      if (key == answer[i]){
        checkLetter = true;
        letter = i;

        if(key == "h"){
          showH = true;
        }
        if(key == "e"){
          showE = true;
        }
        if(key == "l"){
          showL = true;
        }
        if(key == "o"){
          showO = true;
        }
      }
    }

    if(checkLetter != true){
      body++;
    }
  }
}

function draw() {
  // put drawing code here
  background("#ADD8E6");
  image(banner, 150, -50, 250, 250);

  strokeWeight(3);
  fill("white");

  //lines for letters
  line(20, 550, 60, 550);
  line(80, 550, 120, 550);
  line(140, 550, 180, 550);
  line(200, 550, 240, 550);
  line(260, 550, 300, 550);

  line(450, 500, 550, 500); //bottom hang
  line(500, 150, 500, 500); //long hang
  line(350, 150, 500, 150); //horiontal top like
  line(350, 150, 350, 220); //connected to head

  if (body >= 1){
    circle(350, 250, 70); //head
  }
  if (body >= 2){
    strokeWeight(2);
    circle(340, 240, 15); //left eye
    circle(360, 240, 15); //right eye
    fill("black");
    circle(340, 240, 5); //left pupil
    circle(360, 240, 5); //right pupil
  }
  if (body >= 3){
    noFill();
    arc(350, 255, 35, 35, 0, PI); //mouth
  }
  if (body >= 4){
    strokeWeight(3);
    line(350, 285, 350, 400); //body
  }
  if (body >= 5){
    line(350, 320, 320, 370); //left arm
  }
  if (body >= 6){
    line(350, 320, 380, 370); //right arm
  }
  if (body >= 7){
    line(350, 400, 320, 450); //left leg
  }
  if (body >= 8){
    line(350, 400, 380, 450); //right leg
    textSize(40);
    fill("red");
    text('GAME OVER', 35, 300);
    fill("white");
    circle(350, 250, 70);
    strokeWeight(2);
    circle(340, 240, 15); //left eye
    circle(360, 240, 15); //right eye
    fill("black");
    circle(340, 240, 5); //left pupil
    circle(360, 240, 5); //right pupil
    noFill();
    //  x     y   w   h
    arc(350, 270, 35, 35, PI, TWO_PI);
  }

  //LETTERS APPEARING

    fill("black");
    textSize(40);
    text("!", 320, 545);
    if(showH == true){
      var textH = text("h", 30, 540);
    }
    if(showE == true){
      text("e", 90, 540);
    }
    if(showL == true){
      text("l", 155, 540);
      text("l", 215, 540);
    }
    if(showO == true){
      text("o", 270, 540);
    }

  if (showH == false){
    //hide textH
  }

  //if all keys are pressed, you win!
  if (showH == true && showE == true && showL == true && showO == true){
    fill("red");
    text('YOU WIN!', 35, 300);
    won = true;
      //for loop draw confetti
    }

}
