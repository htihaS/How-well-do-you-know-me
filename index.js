var readlineSync = require("readline-sync");
var score = 0;

var questionAndAnswer = [{
  question: "What is my full name?",
  answer: "kodumuri sahith"
}, {
  question: "What is my school name?",
  answer: "nava bharath public school"
},
{
  question: "Where Do I work?",
  answer: "cognizant"
}];

function welcome() {
  var userName = readlineSync.question("What's your name? ");
  console.log("Hi " + userName + " how well do you know me?");
}
function quiz(question, answer) {
  var userAnswer = readlineSync.question(question);
  //var userAnswerWithNospaces = userAnswer.replace(/ /g, '');
  if (userAnswer.toUpperCase() == answer.toUpperCase()) {
    console.log("whoooop! Right Answer")
    score++;
  }
  else {
    console.log("WRONG ANSWER")
    console.log("Correct answer is: " + answer);
  }
  console.log("current score =" + score);

}


function game() {
  var questionnumber = 1;
  for (var i = 0; i < questionAndAnswer.length; i++) {
    console.log("-------------Question." + questionnumber++ + " -------------")
    var Question = questionAndAnswer[i];
    quiz(Question.question, Question.answer);
  }
}

welcome();
game();
console.log("Congratulations your Final score is " + score + " Out of 3")