var button1;
var button2;

var soundFile;

//with sound its important to get it in the preload
function preload(){
  soundFile = loadSound("assets/CowMoo.mp3");
}

function setup(){
  createCanvas(400,400);
                              //x, y, box size, color
  button1 = new hitzoneObject(100, 200, 50, "red", "Stop Button", loadImage("assets/stop.png"));
  button2 = new hitzoneObject(200, 200, 50, "green", "Play Button", loadImage("assets/play.png"));
}

function draw(){
  background(255);

  button1.display();
  button1.check();
  console.log("button1 overlay" + button1.overlay);
  button2.display();
  button2.check();
}

function mousePressed(){
  if(button1.overlay == true){
    console.log(button1.label);
    soundFile.stop();

  }

  if(button2.overlay == true){
    console.log(button2.label);
    soundFile.stop();
    soundFile.play();
  }
}

class hitzoneObject{

  constructor(tempX, tempY, tempSize, tempColor, tempLabel, tempImage){
    this.x = tempX;
    this.y = tempY;
    this.boxSize = tempSize;
    this.boxColor = tempColor;
    this.overlay = false;
    this.label = tempLabel;
    this.image = tempImage;
  }

    display(){
      fill(this.boxColor);
    //  rect(this.x, this.y, this.boxSize, this.boxSize)
      image(this.image, this.x, this.y, this.boxSize, this.boxSize);
      text(this.label, this.x, this.y-20);

      if(this.overlay == true){
        fill(127,127);
        rect(this.x, this.y, this.boxSize, this.boxSize);
      }
    }



    check(){
      if(mouseX > this.x && mouseX < (this.x + this.boxSize)
         && mouseY > this.y && mouseY < (this.y + this.boxSize)){
        //console.log("over button" + this.boxColor);
        this.overlay = true;
      } else{
        //console.log("off button" + this.boxColor);
        this.overlay = false;
      }
    }

  }
