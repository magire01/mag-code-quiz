//TIMER
var timerDiv = document.querySelector("#timer");
var secondsLeft = 30;

function setTime() {
    document.createElement("p")
    document.textContent = secondsLeft;
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timerDiv.textContent = secondsLeft + " seconds remaining"

        if (secondsLeft <= 0) {
            clearInterval(timerInterval);
            console.log("Game Over!!")
        } 
    }, 1000);    
}


//Question Answer Variables
var questionAnswer = {
    question1: "What is the standard markup language for Web pages?",
    correctAnswer1: "HTML",
    allAnswer1: ["HTML", "Java", "CSS", "C#"],

    question2: "What is a scripting or programming language that allows you to implement complex features on web pages?",
    corrrectAnswer2: "JavaScript",
    allAnswer2: ["JavaScript", "CSS", "HTML", "iTunes"],

    question3: "______ tag is an extension to HTML that can enclose any number of JavaScript",
    corectAnswer3: "<script>",
    allAnswer3: ["<script>", "<code>", "<function>", "<time>"],

    question4: "Which one of these options would print something to the console?",
    corectAnswer4: "console.log()",
    allAnswer4: ["console.log()", "printText", "console.text", "printConsole"]
};

// Correct Answer Counter
var correctAnswerCount = 0;
function correctAnswerCounter(){
    localStorage.setItem("Correct Answers", correctAnswerCount++);
}
//This will set correctAnswerCount to 0
correctAnswerCounter();

// Question Answer Divs
var question1Div = document.querySelector("#question1-div");
var answer1Div = document.querySelector("#answer1-div");

//Question 1 Function
function question1() {
    // Question 1
    document.createElement("h3", question1Div.textContent = questionAnswer.question1);

    //Remove Start Button
    var oldButton = document.getElementById("button-start");
    document.getElementById("answer1-div").removeChild(oldButton);

    //Answer Buttons
    var createAnswer0 = document.createElement("button");
    createAnswer0.setAttribute("id", "button-correct10");
    createAnswer0.textContent = questionAnswer.allAnswer1[0];
    answer1Div.appendChild(createAnswer0);

    var createAnswer1 = document.createElement("button");
    createAnswer1.setAttribute("id", "button-incorrect11");
    createAnswer1.textContent = questionAnswer.allAnswer1[1];
    answer1Div.appendChild(createAnswer1);

    var createAnswer2 = document.createElement("button");
    createAnswer2.setAttribute("id", "button-incorrect12");
    createAnswer2.textContent = questionAnswer.allAnswer1[2];
    answer1Div.appendChild(createAnswer2);

    var createAnswer3 = document.createElement("button");
    createAnswer3.setAttribute("id", "button-incorrect13");
    createAnswer3.textContent = questionAnswer.allAnswer1[3];
    answer1Div.appendChild(createAnswer3);  

    //Call answer1Button function
    answer1Button();
    
};

//Question 2 Function
function question2() {
    document.createElement("h3", question1Div.textContent = questionAnswer.question2);

    //Remove Answer1 Buttons
    var oldButton0 = document.getElementById("button-correct10");
    document.getElementById("answer1-div").removeChild(oldButton0);
    var oldButton1 = document.getElementById("button-incorrect11");
    document.getElementById("answer1-div").removeChild(oldButton1);
    var oldButton2 = document.getElementById("button-incorrect12");
    document.getElementById("answer1-div").removeChild(oldButton2);
    var oldButton3 = document.getElementById("button-incorrect13");
    document.getElementById("answer1-div").removeChild(oldButton3);

    //Generate Answer2 Buttons
    var createAnswer0 = document.createElement("button");
    createAnswer0.setAttribute("id", "button-correct20");
    createAnswer0.textContent = questionAnswer.allAnswer2[0];
    answer1Div.appendChild(createAnswer0);

    var createAnswer1 = document.createElement("button");
    createAnswer1.setAttribute("id", "button-incorrect21");
    createAnswer1.textContent = questionAnswer.allAnswer2[1];
    answer1Div.appendChild(createAnswer1);

    var createAnswer2 = document.createElement("button");
    createAnswer2.setAttribute("id", "button-incorrect22");
    createAnswer2.textContent = questionAnswer.allAnswer2[2];
    answer1Div.appendChild(createAnswer2);

    var createAnswer3 = document.createElement("button");
    createAnswer3.setAttribute("id", "button-incorrect23");
    createAnswer3.textContent = questionAnswer.allAnswer2[3];
    answer1Div.appendChild(createAnswer3);
    
    //Call answer2Button function
    answer2Button();
};

//Question 3 Function
function question3() {
    //Remove Answer2 Buttons
    var oldButton0 = document.getElementById("button-correct20");
    document.getElementById("answer1-div").removeChild(oldButton0);
    var oldButton1 = document.getElementById("button-incorrect21");
    document.getElementById("answer1-div").removeChild(oldButton1);
    var oldButton2 = document.getElementById("button-incorrect22");
    document.getElementById("answer1-div").removeChild(oldButton2);
    var oldButton3 = document.getElementById("button-incorrect23");
    document.getElementById("answer1-div").removeChild(oldButton3);

    //Generate Answer3 buttons
    document.createElement("h3", question1Div.textContent = questionAnswer.question3);
    var createAnswer0 = document.createElement("button");
    createAnswer0.setAttribute("id", "button-correct30");
    createAnswer0.textContent = questionAnswer.allAnswer3[0];
    answer1Div.appendChild(createAnswer0);

    var createAnswer1 = document.createElement("button");
    createAnswer1.textContent = questionAnswer.allAnswer3[1];
    createAnswer1.setAttribute("id", "button-incorrect31");
    answer1Div.appendChild(createAnswer1);

    var createAnswer2 = document.createElement("button");
    createAnswer2.setAttribute("id", "button-incorrect32");
    createAnswer2.textContent = questionAnswer.allAnswer3[2];
    answer1Div.appendChild(createAnswer2);

    var createAnswer3 = document.createElement("button");
    createAnswer3.setAttribute("id", "button-incorrect33");
    createAnswer3.textContent = questionAnswer.allAnswer3[3];
    answer1Div.appendChild(createAnswer3); 
    
    //Call answer3Button function
    answer3Button();
};

//Question 4 Function
function question4() {
    document.createElement("h3", question1Div.textContent = questionAnswer.question4);

    //Remove Answer3 Buttons
    var oldButton0 = document.getElementById("button-correct30");
    document.getElementById("answer1-div").removeChild(oldButton0);
    var oldButton1 = document.getElementById("button-incorrect31");
    document.getElementById("answer1-div").removeChild(oldButton1);
    var oldButton2 = document.getElementById("button-incorrect32");
    document.getElementById("answer1-div").removeChild(oldButton2);
    var oldButton3 = document.getElementById("button-incorrect33");
    document.getElementById("answer1-div").removeChild(oldButton3);

    var createAnswer0 = document.createElement("button");
    createAnswer0.setAttribute("id", "button-correct40");
    createAnswer0.textContent = questionAnswer.allAnswer4[0];
    answer1Div.appendChild(createAnswer0);

    var createAnswer1 = document.createElement("button");
    createAnswer1.setAttribute("id", "button-incorrect41");
    createAnswer1.textContent = questionAnswer.allAnswer4[1];
    answer1Div.appendChild(createAnswer1);

    var createAnswer2 = document.createElement("button");
    createAnswer2.setAttribute("id", "button-incorrect42");
    createAnswer2.textContent = questionAnswer.allAnswer4[2];
    answer1Div.appendChild(createAnswer2);

    var createAnswer3 = document.createElement("button");
    createAnswer3.setAttribute("id", "button-incorrect43");
    createAnswer3.textContent = questionAnswer.allAnswer4[3];
    answer1Div.appendChild(createAnswer3);
    
    answer4Button();
};

//Game Over Screen
function gameOverScreen() {

    //Remove Answer4 Buttons
    var oldButton0 = document.getElementById("button-correct40");
    document.getElementById("answer1-div").removeChild(oldButton0);
    var oldButton1 = document.getElementById("button-incorrect41");
    document.getElementById("answer1-div").removeChild(oldButton1);
    var oldButton2 = document.getElementById("button-incorrect42");
    document.getElementById("answer1-div").removeChild(oldButton2);
    var oldButton3 = document.getElementById("button-incorrect43");
    document.getElementById("answer1-div").removeChild(oldButton3);

    //Game Over Title
    document.createElement("h1", question1Div.textContent = "Game Over! Here is how you did:");
    //Show how many user got correct / incorrect
    var scoreCard = document.createElement("card");
    scoreCard.setAttribute("id", "score-card")
    scoreCard.textContent = "You got " + localStorage.getItem("Correct Answers") + " out of 4 questions correct with " + secondsLeft + " seconds remaining!";
    answer1Div.appendChild(scoreCard);
    //Show how many seconds remain(Actual Score to be stored)
    var scoreRecord = document.createElement("card");
    scoreRecord.setAttribute("id", "score-record");
    scoreRecord.textContent = "Your score is: " + secondsLeft;
    answer1Div.appendChild(scoreRecord);
    //Play Again Button
    var createPlayAgainButton = document.createElement("button");
    createPlayAgainButton.setAttribute("id", "button-play-again");
    createPlayAgainButton.textContent = "Play Again!";
    answer1Div.appendChild(createPlayAgainButton);
    //Save High Score to storage
    localStorage.setItem("Score", secondsLeft);
    // get high score from storage to high-score id
    var highScore = document.getElementById("high-score");
    highScore.textContent = localStorage.getItem("Score");
    playAgainButton();
}

// clear page and save high score
function playAgain() {
    //get score from loc storage and create element in top of page
    var removeScoreCard = document.getElementById("score-card");
    document.getElementById("answer1-div").removeChild(removeScoreCard);
    var removeScoreRecord = document.getElementById("score-record");
    document.getElementById("answer1-div").removeChild(removeScoreRecord);


}

//Home screen
function startScreen() {
    
    document.createElement("h1", question1Div.textContent = "Welcome to Code Quiz! Answer the questions in 30 seconds. Your score will be the time left when you finish. Be careful, any wrong answers will remove 10 seconds from the timer!");
    var createStartButton = document.createElement("button");
    createStartButton.setAttribute("id", "button-start")
    createStartButton.textContent = "Start!";
    answer1Div.appendChild(createStartButton);
    startButton();
    
};

// Call startScreen function (opening page)
startScreen();


//Start Button - User clicks "Start" button -> Timer starts and question1 generates
function startButton() {
    var startButtonClick = document.getElementById("button-start");
    //Starts Timer
    startButtonClick.addEventListener("click", setTime);
    //Loads Question1
    startButtonClick.addEventListener("click", question1);
    
}

//Play Again - Brings user back to StartScreen and logs high score
function playAgainButton() {
    var playAgainButtonClick = document.getElementById("button-play-again");
    //return to Start Page
    playAgainButtonClick.addEventListener("click", playAgain);
    playAgainButtonClick.addEventListener("click", startScreen);
    playAgainButtonClick.addEventListener("click", removePlayAgainButton);
}

//Remove Play Again Button
function removePlayAgainButton() {
    var removePlayAgainButton = document.getElementById("button-play-again");
    document.getElementById("answer1-div").removeChild(removePlayAgainButton);
}

//Question 1 to 2 Buttons
function answer1Button(){
    //correct Answer
    var correctAnswerClick10 = document.getElementById("button-correct10");
    // CorrectAnswerCounter for question 1
    correctAnswerClick10.addEventListener("click", function() {
        console.log("Question 1 Correct!");
        correctAnswerCounter();
    });
    correctAnswerClick10.addEventListener("click", question2);
    //incorrect answers
    var incorrectAnswerClick11 = document.getElementById("button-incorrect11");
    incorrectAnswerClick11.addEventListener("click", function() { // This subtracts the time by 10 seconds
        console.log("Question 1 Incorrect!");
        secondsLeft -= 10;
    });
    incorrectAnswerClick11.addEventListener("click", question2);
    var incorrectAnswerClick12 = document.getElementById("button-incorrect12");
    incorrectAnswerClick12.addEventListener("click", function() { // This subtracts the time by 10 seconds
        console.log("Question 1 Incorrect!");
        secondsLeft -= 10;
    });
    incorrectAnswerClick12.addEventListener("click", question2);
    var incorrectAnswerClick13 = document.getElementById("button-incorrect13");
    incorrectAnswerClick13.addEventListener("click", function() { // This subtracts the time by 10 seconds
        console.log("Question 1 Incorrect!");
        secondsLeft -= 10;
    });
    incorrectAnswerClick13.addEventListener("click", question2);
}

//Question 2 to 3 Buttons
function answer2Button(){
    //correct Answer
    var correctAnswerClick20 = document.getElementById("button-correct20");
    // CorrectAnswerCounter for question 2
    correctAnswerClick20.addEventListener("click", function() {
        console.log("Question 2 Correct!");
        correctAnswerCounter();
    });
    //Take to Question3 Event listener
    correctAnswerClick20.addEventListener("click", question3);
    //incorrect answers
    var incorrectAnswerClick21 = document.getElementById("button-incorrect21");
    incorrectAnswerClick21.addEventListener("click", function() { // This subtracts the time by 10 seconds
        console.log("Question 2 Incorrect!");
        secondsLeft -= 10;
    });
    incorrectAnswerClick21.addEventListener("click", question3);
    var incorrectAnswerClick22 = document.getElementById("button-incorrect22");
    incorrectAnswerClick22.addEventListener("click", function() { // This subtracts the time by 10 seconds
        console.log("Question 2 Incorrect!");
        secondsLeft -= 10;
    });
    incorrectAnswerClick22.addEventListener("click", question3);
    var incorrectAnswerClick23 = document.getElementById("button-incorrect23");
    incorrectAnswerClick23.addEventListener("click", function() { // This subtracts the time by 10 seconds
        console.log("Question 2 Incorrect!");
        secondsLeft -= 10;
    });
    incorrectAnswerClick23.addEventListener("click", question3);
}

//Question 3 to 4 Buttons
function answer3Button(){
    //correct Answer
    var correctAnswerClick30 = document.getElementById("button-correct30");
    // CorrectAnswerCounter for question 2
    correctAnswerClick30.addEventListener("click", function() {
        console.log("Question 3 Correct!");
        correctAnswerCounter();
    });
    correctAnswerClick30.addEventListener("click", question4);
    //incorrect answers
    var incorrectAnswerClick31 = document.getElementById("button-incorrect31");
    incorrectAnswerClick31.addEventListener("click", function() { // This subtracts the time by 10 seconds
        console.log("Question 3 Incorrect!");
        secondsLeft -= 10;
    });
    incorrectAnswerClick31.addEventListener("click", question4);
    var incorrectAnswerClick32 = document.getElementById("button-incorrect32");
    incorrectAnswerClick32.addEventListener("click", function() { // This subtracts the time by 10 seconds
        console.log("Question 3 Incorrect!");
        secondsLeft -= 10;
    });
    incorrectAnswerClick32.addEventListener("click", question4);
    var incorrectAnswerClick33 = document.getElementById("button-incorrect33");
    incorrectAnswerClick33.addEventListener("click", function() { // This subtracts the time by 10 seconds
        console.log("Question 3 Incorrect!");
        secondsLeft -= 10;
    });
    incorrectAnswerClick33.addEventListener("click", question4);
}

//Question 4 to Game Over Buttons
function answer4Button() {
    //correct Answer
    var correctAnswerClick40 = document.getElementById("button-correct40");
    correctAnswerClick40.addEventListener("click", function() {
        console.log("Question 4 Correct!");
        correctAnswerCounter();
    });
    correctAnswerClick40.addEventListener("click", gameOverScreen);
    //incorrect answers
    var incorrectAnswerClick41 = document.getElementById("button-incorrect41");
    incorrectAnswerClick41.addEventListener("click", function() { // This subtracts the time by 10 seconds
        console.log("Question 4 Incorrect!");
        secondsLeft -= 10;
    });
    incorrectAnswerClick41.addEventListener("click", gameOverScreen);
    var incorrectAnswerClick42 = document.getElementById("button-incorrect42");
    incorrectAnswerClick42.addEventListener("click", function() { // This subtracts the time by 10 seconds
        console.log("Question 4 Incorrect!");
        secondsLeft -= 10;
    });
    incorrectAnswerClick42.addEventListener("click", gameOverScreen);
    var incorrectAnswerClick43 = document.getElementById("button-incorrect43");
    incorrectAnswerClick43.addEventListener("click", function() { // This subtracts the time by 10 seconds
        console.log("Question 4 Incorrect!");
        secondsLeft -= 10;
    });
    incorrectAnswerClick43.addEventListener("click", gameOverScreen);

}

