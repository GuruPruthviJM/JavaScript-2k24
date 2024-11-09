const max_chances = document.querySelector(".lastResult");
const guesses = document.querySelector('.guesses');

let random = parseInt(Math.random()*100+1) // It can guess between 1-100
// console.log(random);

const userInput = document.querySelector("#guessField");
const submit=document.querySelector('#subt');
const lowOrHigh = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess =[]
let numGuess = 1
let playGame = true 

if(playGame){
    submit.addEventListener('click', (e)=>{
        e.preventDefault();
        const guessedVal = parseInt(userInput.value)
        console.log(guessedVal)
        validateGuess(guessedVal)
    })
}

function validateGuess(guess){
    // It is going to validate the number
    if(isNaN(guess) || guess<1 || guess>100){
        alert("Please enter a number between 1 to 100")
    }else{
        prevGuess.push(guess)
        if(numGuess===10){
            displayGuess(guess)
            displayMessage(`Game over, Random Number was ${random}`)
            endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    // It is going check the answer between the random value and the userInput
    if(guess === random){
        displayMessage(`You guessed it right!`)
        endGame()
    }else if(guess<random){
        displayMessage("Number is too low")
    }else{
        displayMessage("Number is too high")
    }
}

function displayMessage(message){
    lowOrHigh.innerHTML = `<h2>${message}</h2>`
}

function displayGuess(guess){
    userInput.value = ''  
    guesses.innerHTML += `${guess} `
    numGuess++;
    max_chances.innerHTML = `${11 - numGuess}`
}

function endGame(){
    // It eraze all the modified values
    userInput.value=""
    userInput.setAttribute('disabled', '')
    p.classList.add('button') // Adding new button
    p.innerHTML=`<h2 id="newGame">Start new Game</h2>`
    startOver.appendChild(p)
    playGame=false
    newGame()
}
function newGame(){
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', (e) => {
        random = parseInt(Math.random()*100+1)
        prevGuess=[]
        numGuess=1
        guesses.innerHTML=""
        max_chances.innerHTML=10
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame=true
    })
}