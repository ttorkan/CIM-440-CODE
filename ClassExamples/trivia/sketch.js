var questions = ["Is Iceland always covered in ice?", "What ocean lies east of the US?"];
var options = ["1) True, 2) False", "1) Pacific 2) Eastern 3) Indian 4) Atlantic"];
var answers = [1, 3]; //this is your answer key

var buttons = [];

var currentOption = -1;

var currentQuestion = 0;

var answerText = "";

function setup() {
  // put setup code here
  createCanvas(400, 400);
 
  buttons[0] = createButton("1");
  buttons[0].position(10, 300);
  buttons[0].mousePressed(function(){
    currentOption = 0;
  });

  buttons[1] = createButton("2");
  buttons[1].position(50, 300);
  buttons[1].mousePressed(function(){
    currentOption = 1;
  });

  buttons[2] = createButton("3");
  buttons[2].position(100, 300);
  buttons[2].mousePressed(function(){
    currentOption = 2;
  });

  buttons[3] = createButton("4");
  buttons[3].position(150, 300);
  buttons[3].mousePressed(function(){
    currentOption = 3;
  });
}

function draw() {
  // put drawing code here
  background(255);
  //array pos, x int, y int
  text(questions[currentQuestion], 20, 100);
  text(options[currentQuestion], 20, 150);

  text(answerText, 20, 200);

  if(currentOption != -1){
    if(currentOption == answers[currentQuestion]){
      currentQuestion ++;
      answerText = "Correct!";
      if(currentQuestion == questions.length){
        currentQuestion = 0;
      }

    }else{
      answerText = "Incorrect, try again";
    }

    //reset to innactive state
    currentOption = -1;
  }
}
