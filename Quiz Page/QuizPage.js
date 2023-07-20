const start_btn




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

function randomisequestions(){
    while (randomquestions.length <=9){
        const  random = questions[Math.floor(Math.random() * questions.length)]
        if(!randomquestions.includes(random)) randomquestions.push(random)
    }
}