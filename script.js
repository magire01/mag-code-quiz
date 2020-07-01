
//TIMER
var timerDiv = document.querySelector("#timer");
var secondsLeft = 60;

function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timerDiv.textContent = secondsLeft + " seconds remaining"
    }, 1000);

    if(secondsLeft === 0) {
        clearInterval(timerInterval);
        //Send a message GAME OVER
    }
}

document.createElement("p", setTime());

//Question Answer Variables
var questionAnswer = {
    question1: "How many states are in the US?",
    correctAnswer1: "50",
    allAnswer1: ["50", "40", "52", "49"],

    question2: "How many continents are there in the US?",
    corrrectAnswer2: "7",
    allAnswer2: ["7", "2", "3", "4"],

    question3: "How many fingers am I holding up?",
    corectAnswer3: "1",
    allAnswer3: ["1", "3", "4", "5"],

    question4: "What is the Capitol of Kentucky",
    corectAnswer4: "Frankfort",
    allAnswer4: ["Frankfort", "Lexington", "Louisville", "Bowling Green"]
};

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

    //Remove Answer Buttons
    var oldButton0 = document.getElementById("button-correct10");
    document.getElementById("answer1-div").removeChild(oldButton0);
    var oldButton1 = document.getElementById("button-incorrect11");
    document.getElementById("answer1-div").removeChild(oldButton1);
    var oldButton2 = document.getElementById("button-incorrect12");
    document.getElementById("answer1-div").removeChild(oldButton2);
    var oldButton3 = document.getElementById("button-incorrect13");
    document.getElementById("answer1-div").removeChild(oldButton3);
    


    //Answer Buttons
    var createAnswer0 = document.createElement("button");
    createAnswer0.textContent = questionAnswer.allAnswer2[0];
    answer1Div.appendChild(createAnswer0);

    var createAnswer1 = document.createElement("button");
    createAnswer1.textContent = questionAnswer.allAnswer2[1];
    answer1Div.appendChild(createAnswer1);

    var createAnswer2 = document.createElement("button");
    createAnswer2.textContent = questionAnswer.allAnswer2[2];
    answer1Div.appendChild(createAnswer2);

    var createAnswer3 = document.createElement("button");
    createAnswer3.textContent = questionAnswer.allAnswer2[3];
    answer1Div.appendChild(createAnswer3);  
};

//Question 3 Function
function question3() {
    document.createElement("h3", question1Div.textContent = questionAnswer.question3);
    var createAnswer0 = document.createElement("button");
    createAnswer0.textContent = questionAnswer.allAnswer3[0];
    answer1Div.appendChild(createAnswer0);

    var createAnswer1 = document.createElement("button");
    createAnswer1.textContent = questionAnswer.allAnswer3[1];
    answer1Div.appendChild(createAnswer1);

    var createAnswer2 = document.createElement("button");
    createAnswer2.textContent = questionAnswer.allAnswer3[2];
    answer1Div.appendChild(createAnswer2);

    var createAnswer3 = document.createElement("button");
    createAnswer3.textContent = questionAnswer.allAnswer3[3];
    answer1Div.appendChild(createAnswer3);  
};

//Question 4 Function
function question4() {
    document.createElement("h3", question1Div.textContent = questionAnswer.question4);
    var createAnswer0 = document.createElement("button");
    createAnswer0.textContent = questionAnswer.allAnswer4[0];
    answer1Div.appendChild(reateAnswer0);

    var createAnswer1 = document.createElement("button");
    createAnswer1.textContent = questionAnswer.allAnswer4[1];
    answer1Div.appendChild(createAnswer1);

    var createAnswer2 = document.createElement("button");
    createAnswer2.textContent = questionAnswer.allAnswer4[2];
    answer1Div.appendChild(createAnswer2);

    var createAnswer3 = document.createElement("button");
    createAnswer3.textContent = questionAnswer.allAnswer4[3];
    answer1Div.appendChild(createAnswer3);  
};


//Home screen
function startScreen() {
    
    document.createElement("h1", question1Div.textContent = "Welcome to Code Quiz!");
    var createStartButton = document.createElement("button");
    createStartButton.setAttribute("id", "button-start")
    createStartButton.textContent = "Start!";
    answer1Div.appendChild(createStartButton);
    startButton();
    
};

// Call startScreen function
startScreen();

//Start Button - User clicks "Start" button and question1 generates
function startButton() {
    var startButtonClick = document.getElementById("button-start");
    startButtonClick.addEventListener("click", question1);
}

//Question 1 to 2 Buttons
function answer1Button(){
    //correct Answer
    var correctAnswerClick = document.getElementById("button-correct10");
    correctAnswerClick.addEventListener("click", question2);
    //incorrect answers
    var correctAnswerClick = document.getElementById("button-incorrect11");
    correctAnswerClick.addEventListener("click", question2);
    var correctAnswerClick = document.getElementById("button-incorrect12");
    correctAnswerClick.addEventListener("click", question2);
    var correctAnswerClick = document.getElementById("button-incorrect13");
    correctAnswerClick.addEventListener("click", question2);
}


