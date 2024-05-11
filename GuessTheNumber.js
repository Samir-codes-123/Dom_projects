let random = Math.floor(Math.random()*(100)+1)// generate a random number
//console.log(random);
// taking all the required elements
const form = document.querySelector("form")
const result = document.getElementById("third")// ans showing para
const submitButton = document.querySelector("#submit")// submit button
const remain =document.querySelector("#remain")// guess remaining
const footer = document.querySelector("footer")// whole footer
const previous = (document.querySelector("#previous"))// previous guess storing
const remarks = document.createElement("p")// new element
const input=document.querySelector("#box");

// taking array of previous guess to not repeat them
//let guessShown=[]
let noOfGuesses=1;// total guess done
let playGame= true;// allow to play further or not

if(playGame){form.addEventListener("submit",function(event){// checking if you can play or not
    event.preventDefault();
    // taking values
    ans = parseInt(input.value)
    //console.log(ans);
    validGuess(ans)
   
    

})}

function validGuess(guess){
    if(parseInt(guess)===" " || isNaN(guess) || parseInt(guess)<1 ||parseInt(guess)>100){
       alert("Please enter a valid guess")// gives alert message
    }else{
      // guessShown.push(guess);// push the guess in the array 
        if(noOfGuesses ===10){
            displayGuess(guess)
            displayMessage(`Game Over. Random Number was ${random}`)
            endGame()
        }else{
            checkGuess(guess)
            displayGuess(guess)
        }

    }
}

function checkGuess(guess){
    if(guess===random){
     displayMessage(`${guess} is the correct guess`)
     endGame(guess)
        
    }else if(guess<random){
      displayMessage(`Number is TOO Low`)
    }else{
        displayMessage(`Number is TOO High `)
    }
}
function displayGuess (guess){
    previous.value=" "// cleanup
    previous.innerHTML+=`${guess}, `
    noOfGuesses++;
    remain.innerHTML=`${10-noOfGuesses}`
}
function displayMessage(message){
result.innerHTML=`<h2>${message}</h2>`
}

function endGame(){
    input.value=" "
    submit.setAttribute("disabled","")// key value pair
    remarks.classList.add("button")
    remarks.innerHTML=`<h2 id = "newgame">Start new Game</h2>`
    footer.appendChild(remarks)
    playGame=false
    newGame();
   previous.innerHTML=" "
   remain.innerHTML=" "
   //remarks.classList.add("button")//adding class name    
}
function newGame(){
const newGameButton= document.getElementById("newgame")
newGameButton.addEventListener("click",()=>{
random=Math.floor(Math.random()*(100)+1)// reset the random value
noOfGuesses=1
remain.innerHTML=`${11-noOfGuesses}`
submitButton.removeAttribute("disabled")
footer.removeChild(remarks)
playGame=true;
})
}