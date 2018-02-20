function populate()
{
if(quiz.isEnded())
{
    showScore();
}
  else{
      
      var element = document.getElementById("questions");
      element.innerHTML = quiz.getquestionIndex().text;
      
      var choices = quiz.getquestionIndex().choices;
      for(var i=0;i< choices.length;i++)
          {
              var element =document.getElementById("choices"+i);
              element.innerHTML=choices(i);
              guess("btn" +i,choices(i))
          }
      showProgress();
  }
    
};
function guess(id,guess){
    var button =document.getElementById(id);
    button.oneclick = function(){
        quiz.guess(guess);
        populate();
    }
};
function showProgress(){
    var currentQuestionNumber = quiz.questionIndex +1;
    var element = document.getElementById("progress");
    element.innerHTML= "Question" + currentQuestionNumber +"of"+ quiz.questions.length;
    
}
function showScore(){
    var gameOverHtml ="<h1>Result</h1>";
    gameOverHtml += "<h2 id= 'scores'> your scores:" +quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML= gameOverHtml;
};







var questions= [
    new question("which one is not an object oriented langueage",["java","c++","c#","c"],"c"),
    new question("which language is used for styling web page?",["HTML","CSS","JQuery","XML"],"CSS"),
    new question("There are ___ main componenets of object oriented programming?",["1","6","2","4"],"4"),
    new question("which language is used for web applications?",["PHP","Python","Javascript","All"],"All"),
    new question("MVC is ___?",["Language","Library","Framework","All"],"Framework")
];
var quiz = new Quiz(questions);


populate();
