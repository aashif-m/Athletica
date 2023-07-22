const questions = [
    {
        //Question 1
        question: "Which athlete is often referred to as 'The Flying Sikh' and represented India in the 1960 and 1964 Summer Olympics?",
        optionA: "Milkha Singh",
        optionB: "Usain Bolt",
        optionC: "Carl Lewis",
        optionD: "Jesse Owens",
        correctOption: "optionA"
    },

    {
        //Question 2
        question: "In which sport did Michael Phelps win a record-breaking 23 gold medals in the Olympics?",
        optionA: "Track and Field",
        optionB: "Swimming",
        optionC: "Gymnastics",
        optionD: "Boxing",
        correctOption: "optionB"
    },

    {
        //Question 3
        question: "Who is the only tennis player to achieve the 'Golden Slam', winning all four Grand Slam tournaments and an Olympic gold medal in a single calendar year?",
        optionA: "Rafael Nadal",
        optionB: " Serena Williams",
        optionC: "Roger Federer",
        optionD: "Steffi Graf",
        correctOption: "optionD"
    },

    {
        //Question 4
        question: "Which country hosted the first-ever FIFA World Cup in 1930?",
        optionA: "Brazil",
        optionB: "Italy",
        optionC: "Germany",
        optionD: "Uruguay",
        correctOption: "optionD"
    },

    {
        //Question 5
        question: "Which golfer completed the famous 'Tiger Slam' by holding all four major championship titles concurrently from 2000 to 2001?",
        optionA: "Phil Mickelson",
        optionB: "Ernie Els",
        optionC: "Tiger Woods",
        optionD: "Rory McIlroy",
        correctOption: "optionC"
    },

    {
        //Question 6
        question: "In which city were the 2016 Summer Olympics held?",
        optionA: "London, UK",
        optionB: "Beijing, China",
        optionC: "Rio de Janeiro, Brazil",
        optionD: "Tokyo, Japan",
        correctOption: "optionC"
    },

    {
        //Question 7
        question: "Which Winter Olympics saw the introduction of snowboarding as an official medal sport?",
        optionA: "1992 Albertville, France",
        optionB: "1998 Nagano, Japan",
        optionC: "2002 Salt Lake City, USA",
        optionD: "2010 Vancouver, Canada",
        correctOption: "optionB"
    },

    {
        //Question 8
        question: "Who holds the record for the most career points scored in the NBA?",
        optionA: "Kobe Bryant",
        optionB: "LeBron James",
        optionC: "Michael Jordan",
        optionD: "Kareem Abdul-Jabbar",
        correctOption: "optionD"
    },

    {
        //Question 9
        question: "Which Formula 1 driver famously won the 1976 World Championship, overcoming a near-fatal crash earlier in the season?",
        optionA: "Niki Lauda",
        optionB: "Ayrton Senna",
        optionC: "Alain Prost",
        optionD: "James Hunt",
        correctOption: "optionA"
    },

    {
        //Question 10
        question: "Which country has won the most field hockey World Cup titles in the history of the tournament?",
        optionA: "Australia",
        optionB: "Netherlands",
        optionC: "Germany",
        optionD: "India",
        correctOption: "optionB"
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
    // if (playerScore <= 3) {
    //     remark = "Bad Grades, Keep Practicing."
    //     remarkColor = "red"
    // }
    // else if (playerScore >= 4 && playerScore < 7) {
    //     remark = "Average Grades, You can do better."
    //     remarkColor = "orange"
    // }
    // else if (playerScore >= 7) {
    //     remark = "Excellent, Keep the good work going."
    //     remarkColor = "green"
    // }

    if(playerScore > 7){
        remark = "Excellent 🥳, Keep working hard!!"
        remarkcolor = "green"
    } else if (playerScore > 4){
        remark = "Good 🙌, Can do better!!"
        remarkcolor = "orange"
    } else {
        remark="Missed it 😔, Keep Practicing and better luck!!"
        remarkcolor = "red"
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



