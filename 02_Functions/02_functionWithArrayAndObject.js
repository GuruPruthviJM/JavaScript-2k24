function calculareCartPrice(...number1) { // It is rest
    return number1
}

console.log(calculareCartPrice(2, 5, 3))

const user = {
    userName: "Guru",
    prices: 999
}

function handleObject(anyObject){
    console.log(`UserName is ${anyObject.userName} and price is ${anyObject.price}`);
}

handleObject(user)

handleObject({
    userName: "Guru",
    price: 1000
})

const myNewArray = [2, 4, 1, 6]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log([1, 2, 3]);

