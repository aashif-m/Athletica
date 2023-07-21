const questions = [
    {
        //Question 1
        question: "What do we call if the ball goes to the boundary without hitting the bat and any part of batsman?",
        optionA: "Wide",
        optionB: "Leg bye",
        optionC: "Bye",
        optionD: "Dead ball",
        correctOption: "optionC"
    },

    {
        //Question 2
        question: "What is the maximum number of overs a bowler can bowl in T-20 cricket?",
        optionA: "5 overs",
        optionB: "4 overs",
        optionC: "6 overs",
        optionD: "3 overs",
        correctOption: "optionB"
    },

    {
        //Question 3
        question: "How many days is an official test match played across?",
        optionA: "2 days",
        optionB: "3 days",
        optionC: "4 days",
        optionD: "5 days",
        correctOption: "optionD"
    },

    {
        //Question 4
        question: "How long should a pitch be in a cricket ground?",
        optionA: "22 yards",
        optionB: "25 yards",
        optionC: "27 yards",
        optionD: "30 yards",
        correctOption: "optionA"
    },

    {
        //Question 5
        question: "In what is the color of the ball used in a One Day International?",
        optionA: "Red",
        optionB: "Pink",
        optionC: "Green",
        optionD: "White",
        correctOption: "optionD"
    },

    {
        //Question 6
        question: "Who has taken the most test wickets of all time?",
        optionA: "Anil Kumble",
        optionB: "Muttiah Muralitharan",
        optionC: "Shane Warne",
        optionD: "Wasim Akram",
        correctOption: "optionB"
    },

    {
        //Question 7
        question: "Who has scored the most test match runs in a career?",
        optionA: "Ricky Ponting",
        optionB: "Jacques Kallis",
        optionC: "Brian Lara",
        optionD: "Sachin Tendulkar",
        correctOption: "optionD"
    },

    {
        //Question 8
        question: "Which country recorded the highest team total ever scored in a one day international of 50 overs?",
        optionA: "Australia",
        optionB: "South Africa",
        optionC: "Sri Lanka",
        optionD: "England",
        correctOption: "optionD"
    },

    {
        //Question 9
        question: "Which country has won the most World cups in the cricket history?",
        optionA: "Australia",
        optionB: "England",
        optionC: "India",
        optionD: "West Indies",
        correctOption: "optionA"
    },

    {
        //Question 10
        question: "Who scored the most individual runs in a single test match innings?",
        optionA: "Sachin Tendulkar",
        optionB: "Kumar Sangakkara",
        optionC: "Virat Kohli",
        optionD: "Brian Lara",
        correctOption: "optionD"
    },

]


let shuffledQuestions = [] //empty array to hold shuffled selected questions

function handleQuestions() { 
    //function to shuffle and push 10 questions to shuffledQuestions array
    while (shuffledQuestions.length <= 9) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}


let questionNumber = 1
let playerScore = 0  
let wrongAttempt = 0 
let indexNumber = 0

let secondsLeft = 100;

const timer = setInterval(function() {
  secondsLeft--;
  document.getElementById("time-display").textContent = secondsLeft;
  document.getElementById("time-header").textContent = secondsLeft;
  if (secondsLeft === 0) {
    clearInterval(timer);
    alert("Time's up!");
    window.location.href = "../../Student_2/Quiz-ThumnailPage/Quiz_thumbnail.html";
  }
}, 1000);


// function for displaying next question in the array to dom
function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;
}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] //gets current Question 
    const currentQuestionAnswer = currentQuestion.correctOption //gets current Question's answer
    const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            //get's correct's radio input with correct answer
            correctOption = option.labels[0].id
        }
    })
   
    //checking to make sure a radio input has been checked or an option being chosen
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    //checking if checked radio button is same as answer
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "#3ee739"
            playerScore++
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "#ff5858"
            document.getElementById(correctOption).style.backgroundColor = "#3ee739"
            wrongAttempt++
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}



//called when the next button is called
function handleNextQuestion() {
    checkForAnswer()
    unCheckRadioButtons()
    //delays next question displaying for a second
    setTimeout(() => {
        if (indexNumber <= 9) {
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()
        }
        resetOptionBackground()
    }, 1000);
}

//sets options background back to null after display the right/wrong colors
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)
function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

// function for when all questions being answered
function handleEndGame() {
    let remark = null
    let remarkColor = null

    // condition check for player remark and remark color
    if (playerScore <= 3) {
        remark = "Bad Grades, Keep Practicing."
        remarkColor = "red"
    }
    else if (playerScore >= 4 && playerScore < 7) {
        remark = "Average Grades, You can do better."
        remarkColor = "orange"
    }
    else if (playerScore >= 7) {
        remark = "Excellent, Keep the good work going."
        remarkColor = "green"
    }
    const playerGrade = (playerScore / 10) * 100

    //data to display to score board
    clearInterval(timer);
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('time-display').innerHTML = 100 - secondsLeft;
    document.getElementById('score-modal').style.display = "flex"

}

//closes score modal and resets game
function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}

//function to close warning modal
function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}


var userName = document.getElementById('userName');     
userName.innerText = "NickName : " + localStorage.getItem('name');