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

let randomquestions = []
let secondsleft = 120;
let index = 0;
let QuestionNumber = 1;
let Score = 0;

const timelefttext = document.querySelector(".timer .time_left_text")
const timeleftcount = document.querySelector(".timer .time_left")
const timeLeftText = document.querySelector(".timer .time_left_text");
const timeLeftCount = document.querySelector(".timer .time_left");
const nextBtn = document.querySelector(".next_question_btn");

function randomisequestions(){
    while (randomquestions.length <=9){
        const  random = questions[Math.floor(Math.random() * questions.length)]
        if(!randomquestions.includes(random)) randomquestions.push(random)
    }
}

const timer = setInterval(timer, 1000);
function timer(){
    document.getElementById("time_left").textContent = secondsleft;
    secondsleft--;
    if(secondsleft === 0){
        clearInterval(timer);
        alert("Time is UP!!")
        ShowResults()
    }
}

function NextQuestion(index){
    randomisequestions()
    const activequestion = randomquestions[index];
    document.getElementById("question_number").innerHTML = QuestionNumber
    document.getElementById("display-question").innerHTML = activequestion.question;
    document.getElementById("option-A").innerHTML = activequestion.optionA;
    document.getElementById("option-B").innerHTML = activequestion.optionB;
    document.getElementById("option-C").innerHTML = activequestion.optionC;
    document.getElementById("option-D").innerHTML = activequestion.optionD;
}

function CheckAnswer(){
    const activequestion = randomquestions[index]
    const CorrectAnswer = activequestion.correctoption
    const alloptions = document.getElementsByName("option");
    let correctoption = null

    alloptions.forEach((opt) => {
        if(opt.value === CorrectAnswer){
            correctoption = opt.labels[0].id
        }
    })

    options.forEach((opt) => {
        if (opt.checked === true && opt.value === correctoption) {
            document.getElementById(correctoption).style.backgroundColor = "#3ee739"
            Score++
            index++
        }

        else if (opt.checked && opt.value !== CorrectAnswer) {
            const wrongLabelId = opt.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "#ff5858"
            document.getElementById(correctoption).style.backgroundColor = "#3ee739"
            index++
        }
    })
}

function ButtonNextQuestion(){
    CheckAnswer()

    const opt = document.getElementsByName("option");
    for (let i = 0; i < opt.length; i++) {
        opt[i].checked = false;
    }

    if (index < 10) {
        NextQuestion(index)
        ResetOptionColour()
    }
    else {
        ShowResults()
    }
}

function ResetOptionColour() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

function ShowResults(){
    let remark = null
    let remarkcolor = null

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
}

// Event listener for the "Next Question" button
nextBtn.addEventListener("click", nextQuestion);

// Start the quiz when the page loads
document.addEventListener("DOMContentLoaded", () => {
  randomizeQuestions();
  showNextQuestion();
  startTimer();
});

