function connectDB() {
    console.log("DB Connected");
}

connectDB();

// Immediately Invoked Function Expressions
// To remove global pollution we use IIFE
(function one(){ // It is a named IIFE
    console.log("DB is connected");
})();

(() => {
    console.log("DB connected"); 
})();

((name)=>{ // It is not named IIFE
    console.log(`${name}, Welcome`);
    
})("Guru");