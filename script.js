let questions = [
    "What is the single season passing record for TDs?",
    "Which team went 16-0?"
]

let answers = [
    ['55', '50', '49', '52']
    ['Rams', 'Steelers', 'Patriots', 'Cowboys']
]

let correct = ['55', 'Patriots']

panel = document.querySelector(".container")

panel.addEventListener("click", function (event) {
    event.preventDefault();

    if (event.target.classList.contains('answer')) {
        if(event.target.innerText === correct[0]){
            console.log("corect!")
            
           nextQuestion(panel)
        }else {
            console.log("incorrect!")
            event.target.style.background = "red"
        }
    }
})


answerDiv = document.querySelector('.answer')
let answerIncrementor = 0;
function nextQuestion(panel){
    answerIncrementor++
    var childDivs = panel.getElementsByTagName('div');

    for( i=0; i< childDivs.length; i++ )
    {
      childDivs[i].innerText = correct[answerIncrementor][i]
    }
}

