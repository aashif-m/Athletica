const questions = [
    {
        question: "Which athlete is often referred to as 'The Flying Sikh' and represented India in the 1960 and 1964 Summer Olympics?",
        optionA: "Milkha Singh",
        optionB: "Usain Bolt",
        optionC: "Carl Lewis",
        optionD: "Jesse Owens",
        correctoption: "Milkha Singh",
    },

    {
        question: "In which sport did Michael Phelps win a record-breaking 23 gold medals in the Olympics?",
        optionA: "Track and Field",
        optionB: "Swimming",
        optionC: "Gymnastics",
        optionD: "Boxing",
        correctoption: "Swimming",
    },

    {
        question: "Who is the only tennis player to achieve the 'Golden Slam', winning all four Grand Slam tournaments and an Olympic gold medal in a single calendar year?",
        optionA: "Rafael Nadal",
        optionB: " Serena Williams",
        optionC: "Roger Federer",
        optionD: "Steffi Graf",
        correctoption: "Steffi Graf",
    },

    {
        question: "Which country hosted the first-ever FIFA World Cup in 1930?",
        optionA: "Brazil",
        optionB: "Italy",
        optionC: "Germany",
        optionD: "Uruguay",
        correctoption: "Uruguay",
    },

    {
        question: "Which golfer completed the famous 'Tiger Slam' by holding all four major championship titles concurrently from 2000 to 2001?",
        optionA: "Phil Mickelson",
        optionB: "Ernie Els",
        optionC: "Tiger Woods",
        optionD: "Rory McIlroy",
        correctoption: "Tiger Woods",
    },

    {
        question: "In which city were the 2016 Summer Olympics held?",
        optionA: "London, UK",
        optionB: "Beijing, China",
        optionC: "Rio de Janeiro, Brazil",
        optionD: "Tokyo, Japan",
        correctoption: "Rio de Janeiro, Brazil",
    },

    {
        question: "Which Winter Olympics saw the introduction of snowboarding as an official medal sport?",
        optionA: "1992 Albertville, France",
        optionB: "1998 Nagano, Japan",
        optionC: "2002 Salt Lake City, USA",
        optionD: "2010 Vancouver, Canada",
        correctoption: "1998 Nagano, Japan",
    },

    {
        question: "Who holds the record for the most career points scored in the NBA?",
        optionA: "Kobe Bryant",
        optionB: "LeBron James",
        optionC: "Michael Jordan",
        optionD: "Kareem Abdul-Jabbar",
        correctoption: "Kareem Abdul-Jabbar",
    },

    {
        question: "Which Formula 1 driver famously won the 1976 World Championship, overcoming a near-fatal crash earlier in the season?",
        optionA: "Niki Lauda",
        optionB: "Ayrton Senna",
        optionC: "Alain Prost",
        optionD: "James Hunt",
        correctoption: "Niki Lauda",
    },

    {
        question: "Which country has won the most field hockey World Cup titles in the history of the tournament?",
        optionA: "Australia",
        optionB: "Netherlands",
        optionC: "Germany",
        optionD: "India",
        correctoption: "Netherlands",
    },
]

let RandomQuestionList = [] //empty array to hold shuffled selected questions

function RandomiseQuestions() {
    while (RandomQuestionList.length < 10) {
        const randomIndex = Math.floor(Math.random() * questions.length);
        const randomQuestion = questions[randomIndex];
        if (!RandomQuestionList.includes(randomQuestion)) {
            RandomQuestionList.push(randomQuestion);
        }
    }
}

let QuestionNumber = 1
let Score = 0  
let wrongAttempt = 0 
let index = 0

let secondsLeft = 120;

const timer = setInterval(function() {
  secondsLeft--;
  document.getElementById("time_left").textContent = secondsLeft;
  if (secondsLeft === 0) {
    clearInterval(timer);
    alert("Time's up!");
    
  }
}, 1000);


// function for displaying next question in the array to dom
function NextQuestion(index) {
    RandomiseQuestions()
    const currentQuestion = RandomQuestionList[index]
    document.getElementById("QuestionNumber").innerHTML = QuestionNumber
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("optionA").innerHTML = currentQuestion.optionA;
    document.getElementById("optionB").innerHTML = currentQuestion.optionB;
    document.getElementById("optionC").innerHTML = currentQuestion.optionC;
    document.getElementById("optionD").innerHTML = currentQuestion.optionD;
}


function CheckAnswer() {
    const currentQuestion = RandomQuestionList[index] //gets current Question 
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
            Score++
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                QuestionNumber++
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
                QuestionNumber++
            }, 1000)
        }
    })
}



//called when the next button is called
function handleNextQuestion() {
    CheckAnswer()
    ResetSelect()
    //delays next question displaying for a second
    setTimeout(() => {
        if (index <= 9) {
            NextQuestion(index)
        }
        else {
            ShowResults()
        }
        ResetOptionColour()
    }, 1000);
}

//sets options background back to null after display the right/wrong colors
function ResetOptionColour() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)
function ResetSelect() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

// function for when all questions being answered
function ShowResults() {
    let remark = null
    let remarkColor = null

    // condition check for player remark and remark color
    if(Score > 7){
        remark = "Excellent 🥳, Keep working hard!!"
        remarkcolor = "green"
    } else if (Score > 4){
        remark = "Good 🙌, Can do better!!"
        remarkcolor = "orange"
    } else {
        remark="Missed it 😔, Keep Practicing and better luck!!"
        remarkcolor = "red"
    }
    const playerGrade = (Score / 10) * 100

    //data to display to score board
    clearInterval(timer);
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = Score
    document.getElementById('time-display').innerHTML = 100 - secondsLeft;
    document.getElementById('score-modal').style.display = "flex"

}

//closes score modal and resets game
function closeScoreModal() {
    QuestionNumber = 1
    Score = 0
    wrongAttempt = 0
    indexNumber = 0
    RandomQuestionList = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}

//function to close warning modal
function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}

const nextBtn = document.querySelector(".next_question_btn");
nextBtn.addEventListener("click", NextQuestion);

// Start the quiz when the page loads
document.addEventListener("DOMContentLoaded", () => {
  RandomiseQuestions();
  handleNextQuestion();
});