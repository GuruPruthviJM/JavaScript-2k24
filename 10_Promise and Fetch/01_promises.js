// Before promise was introduce to JS the developers were using Q or BlackBird library for ASnc execution in js

const promiseOne = new Promise((resolve, reject)=>{
    // Do an sync task
    // DB calls, crytography, network, timmer
    setTimeout(()=>{
        console.log("Async task is compelete.");
        resolve();
    },1000)
})

// .then() is used to use resolve
promiseOne.then(()=>{
    console.log("Promise Consumed");
})

// It is PromiseTwo
new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("Async task is compeleted without varible usage");
        resolve();
    },2000)
}).then(()=>{
    console.log("Promise consumed without using variable");
})

const promiseThree = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve({
            userName: "Guru",
            email: "gurupruthvijm@gmail.com"
        })
    }, 1000)
})

promiseThree.then((user)=>{
    console.log(user);
})

const promiseFour = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let error=true;
        if(!error){
            resolve({userName: "Pruthvi", password: 123})
        }else{
            reject("ERROR: Something went wrong")
        }
    }, 2000)
})

promiseFour
.then((user)=>{
    console.log(user);
    return user.userName;
})
.then((username)=>{ // The secound then() is going to receive the returned value of first then()
    console.log(username);
})
.catch((error)=>{
    console.log(error);
}).finally(()=>{
    console.log("The promise is either resolved or rejected");
})

const promiseFive = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let error=true;
        if(!error){
            resolve({userName: "JS", password: 123})
        }else{
            reject("ERROR: JS went wrong")
        }
    }, 2000)
});

async function consumePromiseFive() {
    try{
        const response = await promiseFive
        console.log(response);
    }catch(error){
        console.log(error);
    }
}

consumePromiseFive()

async function jsonPlaceHolder() { // It is mainly used in DB Connectivity
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users') // await is mainly used to wait for the next execution until it completes this instruction
        const data = await response.json()
        console.log(data);
    }catch(error){
        console.log("Error: ", error);
    }
}

jsonPlaceHolder()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
    
})
.catch((error)=>{
    console.log(error);
})