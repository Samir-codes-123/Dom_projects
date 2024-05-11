let quiz =[// questions
    {
        Question: "Which is the biggest country in the world?",
       option:["Russia","India","China","Australia"],
        answer:"Russia"
    },
    {
        Question: "Which is the smallest country in the world?",
        option:["Nepal","Vatican-City","Maldives", "SriLanka"],
        answer:"Vatican-City"
        
    },
    {
        Question: "Which is a landlock country?",
        option:["Australia","SriLanka","Nepal","India"],
        answer:"Nepal"
    },
    {
        Question: "Which is the biggest ocean in the world?",
        option:["Atlantic-Ocean","Pacific-Ocean","Artic-Ocean","Indian-Ocean"],
        answer:"Pacific-Ocean"
    }
]
let questionNumber=0;// index of question
let message=" "
// elements taking
const container= document.getElementById("quiz-container")
const que=document.getElementById("question")
const options= document.getElementById("options")
const submit= document.getElementById("submit-btn")
const result= document.getElementById("result")
const next = document.getElementById("next-btn")
const newGame= document.createElement("p")
//displaying first question and option
DisplayQuestion(questionNumber)
DisplayOption(questionNumber)
checkAnswer(questionNumber)
submitAnswer()
// if answer is correct then message will get changed and displayed after submit click

// for next question
next.addEventListener("click",()=>{
questionNumber++;
if(questionNumber>quiz.length-1){
    container.innerHTML=`Game Over!`
    newGame()
}else{
    DisplayQuestion(questionNumber)
    DisplayOption(questionNumber)
    checkAnswer(questionNumber)
    submitAnswer();

}
})
function DisplayQuestion(index){
que.innerHTML=" "//clear
que.innerHTML=quiz[index].Question;
}

function DisplayOption(index){
options.innerHTML=" "//cleanup
quiz[index].option.forEach((choice) => {
    options.innerHTML+=`<input type=radio id=${choice} name=options>${choice}<br>`
});
}

function checkAnswer(index){
options.addEventListener("click",(choice)=>{
    result.innerHTML=" "// clean after clicking another option
    if(choice.target.id==quiz[index].answer){
        message=`The choice ${choice.target.id} is correct`
       result.style.backgroundColor="#0f0"
        
    }else{
        message=`The choice ${choice.target.id} is not correct`
        result.style.backgroundColor="#f00"
    }
})
}
function submitAnswer(){
    submit.addEventListener("click",(click)=>{
displayMessage(message)})}

function displayMessage(message){
    result.innerHTML=" "
    result.innerHTML=`<h2>${message}</h2>`
}
