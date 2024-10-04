const questions = [
    {
        question : "which is largest animal in the world ",
        answers:
        [
            {text: "shark", correct: false },
            {text: "elephant", correct: false },
            {text: "lion", correct: false },
            {text: "blue whale", correct: true }

        ]
    },
    {
        question: "What is the tallest land animal on Earth?",
        answers: [
          { text: "giraffe", correct: true },
          { text: "elephant", correct: false },
          { text: "rhinoceros", correct: false },
          { text: "lion", correct: false },
        ],
      },
      {
        question: "Which is the fastest bird on the planet?",
        answers: [
          { text: "penguin", correct: false },
          { text: "ostrich", correct: false },
          { text: "eagle", correct: false },
          { text: "peregrine falcon", correct: true },
        ],
      },
      
        {
          question: "What is the smallest continent in the world?",
          answers: [
            { text: "Africa", correct: false },
            { text: "Europe", correct: true },
            { text: "Australia", correct: false },
            { text: "South America", correct: false },
          ],
        },
        {
          question: "What is the highest mountain in the solar system?",
          answers: [
            { text: "Mount Everest (Earth)", correct: false },
            { text: "Olympus Mons (Mars)", correct: true },
            { text: "K2 (Earth)", correct: false },
            { text: "Mount Fuji (Japan)", correct: false },
          ],
        },
        {
          question: "What is the deepest part of the ocean?",
          answers: [
            { text: "Mariana Trench", correct: true },
            { text: "Great Barrier Reef", correct: false },
            { text: "Atlantic Ocean Trench", correct: false },
            { text: "Red Sea Trench", correct: false },
          ],
        },
        {
          question: "What is the first element on the periodic table?",
          answers: [
            { text: "Hydrogen", correct: true },
            { text: "Helium", correct: false },
            { text: "Lithium", correct: false },
            { text: "Oxygen", correct: false },
          ],
        },
        {
          question: "What is the largest living organism on Earth?",
          answers: [
            { text: "Giant Sequoia Tree", correct: true },
            { text: "Blue Whale", correct: false },
            { text: "Honey Fungus", correct: true },  // Honey Fungus covers a vast underground area
            { text: "African Baobab Tree", correct: false },
          ],
        },
      
      
];

const questionelement = document.getElementById("question");
const answersbtn = document.getElementById("answers");
const nextbutton = document.getElementById("next-btn");


let currentquestionindex = 0;
let score = 0;

function startquiz() {
    currentquestionindex = 0;
    score = 0;
    nextbutton.innerHTML = "Next";
    showquestion();
}

function showquestion() {
    restate();
    let currentquestion = questions[currentquestionindex];
    let questionno = currentquestionindex + 1;
    questionelement.innerHTML = questionno + ". " + currentquestion.question;
    

    currentquestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answersbtn.appendChild(button);
        if (answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectanswer);
    });
}

function restate() {
    nextbutton.style.display = "none";
    while (answersbtn.firstChild) {
        answersbtn.removeChild(answersbtn.firstChild);
    }
}


function selectanswer(e){
    const selectbtn = e.target;
    const iscorrect = selectbtn.dataset.correct === "true";
    if (iscorrect){
        selectbtn.classList.add("correct");
        score++;
    }
    else{
        selectbtn.classList.add("incorrect");
    }

    Array.from(answersbtn.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled=true;
    });
    nextbutton.style.display = "block";
}


nextbutton.addEventListener("click", ()=>{
    if(currentquestionindex < questions.length){
        handlenextbutton();
    }
    else{
        startquiz();
    }
})

function handlenextbutton(){
    currentquestionindex++;
 if(currentquestionindex < questions.length)
 {
    showquestion();
 }
 else{
    showscore();
 }
}

function showscore(){
    restate();
    questionelement.innerHTML = `your score: ${score} out of ${questions.length}!`; 
    nextbutton.innerHTML= "play again"
    nextbutton.style.display="block"
}

startquiz();
