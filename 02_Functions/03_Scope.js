// It is global scope
let a=100
const b=200
var c=300
if(true){
    // It is local scope
    let a = 10
    const b = 20
    c = 30 // Var don't have scope
}

console.log(a);
console.log(b);
console.log(c);

// Nested Scope

function one() {
    const userName = "Guru"
    
    function two() {
        const website = "youtube"
        console.log(userName);
    }
    // console.log(website);
                        
    two()
}

one()

if(true){
    const username = "Pruthvi"
    if (username==="Pruthvi"){
        const website = "youtube"
        console.log(username);
        
    }
    // console.log(website)
}

// console.log(userName);

/**************** interesting *******************/

console.log(addOne(5)) // It will not produce error

function addOne(num) {
    return num+1
}


// console.log(addTwo(5)) // It will produce error
const addTwo = function(num){
    return num+2
}

console.log(addTwo(5))