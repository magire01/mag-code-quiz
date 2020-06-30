console.log("Hello world");

//Variable for main div
var mainDiv = document.getElementById("main-content-div");
mainDiv.children[0].style.fontSize = "50px";

mainDiv.children[0].style.color = "purple";


//variable for timerDiv
var timerDiv = document.querySelector("#timer");
var secondsLeft = 60;

function setTime() {
    vartimerInterval = setInterval(function() {
        secondsLeft--;
        timerDiv.textContent = secondsLeft + " seconds remaining"
    }, 1000);
}

document.createElement("p", setTime());