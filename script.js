//Trivia Questions
let questions = [
    "What is the single season passing record for TDs?",
    "Which team went 16-0?",
    "Which team is based out of Miami?",
    "Who was the MVP of the 2019-2020 season?",
    "In what year was the first superbowl played?"
]
//Possible choices
let answers = [
    ['55', '50', '49', '52'],
    ['Rams', 'Steelers', 'Patriots', 'Cowboys'],
    ['Heat', 'Jets', 'Dolphins', 'Colts'],
    ['Patrick Mahomes', 'Lamar Jackson', 'Russel Wilson', 'Michael Thomas'],
    ['1968', '1967', '1976', '1954']
]
//Correct choice
let correct = ['55', 'Patriots', 'Dolphins', 'Lamar Jackson', '1967']

//incrementors 
let answerIncrementor = 0;
let questionIncrementor = 0;
let clickCounter = 0;
//scorekeeper
let score = 0;

scoreboard = document.querySelector(".score")
panel = document.querySelector("body")

//when something is clicked
panel.addEventListener("click", function (event) {
    event.preventDefault();

    //check to see if answer is being clicked
    if (event.target.classList.contains('answer')) {
        clickCounter++
        //if the answer clicked text matches the correct answer in the array do the following
        if (answerIncrementor <= correct.length - 1) {
            if (event.target.innerText === correct[answerIncrementor]) {

                event.target.style.background = "green"
                event.target.style.fontWeight = "bold";
                event.target.innerText = correct[answerIncrementor] + " correct"
                //console.log("correct")


                //update the score
                if (clickCounter < 2) {
                    score = score + 100;
                    scoreboard.innerText = `Score: ${score}`
                } else if (clickCounter == 2) {
                    score = score + 50;
                    scoreboard.innerText = `Score: ${score}`
                }
                else if (clickCounter == 3) {
                    score = score + 25;
                    scoreboard.innerText = `Score: ${score}`
                } else {
                    score = score + 0
                }

                //incorrect gives a red div block  
            } else {
                console.log("incorrect!")
                event.target.style.background = "red"
            }
            //reached last question game is over  
        } else {
            console.log("game over")
            gameOver()
        }
    } else if (event.target.classList.contains('next')) {
        nextQuestion(panel)
    } else if (event.target.classList.contains('reset')) {
        resetgame()
    }
})

let answerDivs = panel.getElementsByClassName('answer');
let quesDivs = panel.getElementsByClassName('question')

function nextQuestion(panel) {
    //setting the question and answer incrementors to the next number to set up the next question
    questionIncrementor++
    answerIncrementor++
    clickCounter = 0

    //set the 1 length quesDivs array to the value of questions at the current index
    if (questionIncrementor < correct.length) {
        quesDivs[0].innerText = questions[questionIncrementor]
        //the same for answer divs/ loop is because of multiple answer divs
        for (i = 0; i < answerDivs.length; i++) {
        answerDivs[i].innerText = answers[answerIncrementor][i]
        answerDivs[i].style.background = "rgb(4, 21, 53)"
        answerDivs[i].style.fontWeight = "normal";
        console.log(answerDivs[i].innerText)
    }
    } else { gameOver() }
    
}

gameOverDiv = document.querySelector(".gameover")

function gameOver() {
    gameOverDiv.style.display = "block"
    scoreboard.style.fontSize = "40px"
}

function resetgame() {
    clickCounter = 0
    answerIncrementor = 0;
    questionIncrementor = 0;
    quesDivs[0].innerText = questions[questionIncrementor]

    for (i = 0; i < answerDivs.length; i++) {
        answerDivs[i].innerText = answers[answerIncrementor][i]
        answerDivs[i].style.background = "rgb(4, 21, 53)"
        answerDivs[i].style.fontWeight = "normal";
    }
    score = 0;
    scoreboard.style.fontSize = "20px"
    scoreboard.innerText = `Score: ${score}`
    gameOverDiv.style.display = "none"

}
