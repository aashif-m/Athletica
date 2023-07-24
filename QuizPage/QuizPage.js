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

    {
        //Question 11
        question: "In which e-sport do players control characters known as 'heroes' to destroy the opposing team's Ancient?",
        optionA: " Counter-Strike: Global Offensive (CS:GO)",
        optionB: "Dota 2",
        optionC: "League of Legends (LoL)",
        optionD: "Overwatch",
        correctOption: "optionB"
    },

    {
        //Question 12
        question: "How many players are there on a standard soccer (football) team on the field during gameplay?",
        optionA: "Five",
        optionB: "Six",
        optionC: "Seven",
        optionD: "Eight",
        correctOption: "optionB"
    },

    {
        //Question 13
        question: "In which sport would you use the term 'slam dunk'?",
        optionA: "Basketball",
        optionB: "Soccer (Football)",
        optionC: "Baseball",
        optionD: "Ice Hockey",
        correctOption: "optionA"
    },

    {
        //Question 14
        question: "In which country was the sport of basketball invented?",
        optionA: "Canada",
        optionB: "United States",
        optionC: "England",
        optionD: "Brazil",
        correctOption: "optionB"
    },

    {
        //Question 15
        question: "Which country won the first-ever FIFA Women's World Cup held in 1991?",
        optionA: "Germany",
        optionB: "United States",
        optionC: "Brazil",
        optionD: "Norway",
        correctOption: "optionD"
    },

    {
        //Question 16
        question: "In the game 'Fortnite,' what is the popular in-game dance emote that became a cultural phenomenon?",
        optionA: "Orange Justice",
        optionB: "Floss Dance",
        optionC: "Take the L",
        optionD: "The Robot",
        correctOption: "optionB"
    },

    {
        //Question 17
        question: "Which e-sport game involves players controlling tanks and fighting in a team-based environment?",
        optionA: "World of Tanks",
        optionB: "World of Warcraft",
        optionC: "World of Warships",
        optionD: "World of Warcraft",
        correctOption: "optionA"
    },

    {
        //Question 18
        question: "Which Sri Lankan batsman scored the highest individual score in Test cricket?",
        optionA: "Sanath Jayasuriya",
        optionB: "Kumar Sangakkara",
        optionC: "Aravinda de Silva",
        optionD: "Mahela Jayawardene",
        correctOption: "optionB"
    },

    {
        //Question 19
        question: "In which year did Sri Lanka win the ICC T20 World Cup (formerly ICC World Twenty20)?",
        optionA: "2007",
        optionB: "2009",
        optionC: "2011",
        optionD: "2014",
        correctOption: "optionA"
    },

    {
        //Question 20
        question: "Who was the captain of the Sri Lankan cricket team when they won the ICC Cricket World Cup in 1996?",
        optionA: "Sanath Jayasuriya",
        optionB: "Arjuna Ranatunga",
        optionC: "Kumar Sangakkara",
        optionD: "Muttiah Muralitharan",
        correctOption: "optionB"
    },

]


//Variables

let questionNumber = 1
let playerScore = 0  
let wrongAttempt = 0 
let indexNumber = 0
let secondsLeft = 120;

// function for displaying next question in the array to dom
function NextQuestion(index) {
    handleQuestions() //Calls the function to randomise the questions
    const currentQuestion = shuffledQuestions[index] //Gets the current question
    document.getElementById("question-number").innerHTML = questionNumber //Displays the question number
    document.getElementById("player-score").innerHTML = playerScore //Displays the player score
    document.getElementById("display-question").innerHTML = currentQuestion.question; //Displays the question
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA; //Displays the first option
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB; //Displays the second option
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC; //Displays the third option
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD; //Displays the fourth option
}

//Function for timer countdown
const timer = setInterval(function() {  
  secondsLeft--;
  document.getElementById("time-header").textContent = secondsLeft;   //Displays the time left
  if (secondsLeft === 0) {//Checks if the time is up
    clearInterval(timer);//Clears the timer
    alert("Time's up!");//Alerts the user that the time is up
    handleEndGame();//Ends the game
  }
}, 1000);

let shuffledQuestions = [] //Array for the Random Questions

function handleQuestions() { 
    //Funtion to randomise the questions
    while (shuffledQuestions.length < 10) { //Loop to get 10 random questions
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) { //Checks if the same question is there in the array already.
            shuffledQuestions.push(random) //Pushes the random question to the array
        }
    }
}



function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] //Current Question 
    const currentQuestionAnswer = currentQuestion.correctOption //Current Question Answer
    const options = document.getElementsByName("option"); //Gets all the options
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) { //Checks if the value of the option is equal to the answer
            correctOption = option.labels[0].id //Gets the id of the label
        }
    })
   
    //Checks if the radio button is checked
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    //Checks if the checked radio button is correct
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) { //Checks if the checked radio button is correct
            document.getElementById(correctOption).style.backgroundColor = "#3ee739"
            playerScore++ //Increments Player Score by 1
            indexNumber++ //Increments Index Number by 1
            //Delay of 2sec before next question loads
            setTimeout(() => {
                questionNumber++ 
            }, 1200)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) { //Checks if the checked radio button is wrong
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "#ff5858"
            document.getElementById(correctOption).style.backgroundColor = "#3ee739"
            wrongAttempt++ //Increments Wrong Attempts by 1
            indexNumber++ //Increments Index Number by 1
            //Delay of 2sec before next question loads
            setTimeout(() => {
                questionNumber++
            }, 1200)
        }
    })
}

//Resets the background color of the options to null.
function resetOptionBackground() {
    const options = document.getElementsByName("option"); //Gets all the options
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

//Next Button
function promptNextQuestion() {
    checkForAnswer() //Check if the answer is correct
    unCheckRadioButtons() //Uncheck all radio buttons
    //Delay of 2sec before next question loads
    setTimeout(() => { 
        if (indexNumber <= 9) { //Checks if it is the last question
            NextQuestion(indexNumber) //Loads next question
        }
        else {
            handleEndGame() //Ends the game
        }
        resetOptionBackground() //Resets the background color of the options to null.
    }, 1200);
}


// Unchecks all radio buttons
function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

//function to handle score board and display the score
function handleEndGame() {
    let remark = null
    let remarkColor = null

    //Remark based on the player score
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

    //Data to be displayed in score modal
    clearInterval(timer);
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('time-display').innerHTML = 120 - secondsLeft;
    document.getElementById('score-modal').style.display = "flex"

}

//function to close warning modal
function AnswerModal() {
    document.getElementById('option-modal').style.display = "none"
}

//function to close score modal
function closeScoreWindow() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}



