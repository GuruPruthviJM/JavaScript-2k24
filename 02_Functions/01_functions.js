function sayMyName(){
    console.log("G");
    console.log("U");
    console.log("R");
    console.log("U");
}

// sayMyName()

function addTwoNumbers(number1, number2){
    console.log(number1+number2)
}

addTwoNumbers(3, "4")
addTwoNumbers(3, 4)
addTwoNumbers(3, "a")

function addTwoNumbersWithReturn(number1, number2){
    return number1+number2
}
const result = addTwoNumbersWithReturn(3, 5)
console.log("Result:", result);

function loginUserMessage(username="Sam"){
    if(!username){      // or we can use username===undefined
        console.log("Please enter the username"); 
        return
    }
    return `${username} just logged in.`
}

const answer=loginUserMessage('Guru')
console.log(answer);
console.log(loginUserMessage(""));
console.log(loginUserMessage());

