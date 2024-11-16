const user = {
    username: "Guru Pruthvi J M",
    loginCount: 8,
    signedIn: true,
    getUserDetails: ()=>{
        console.log("Got user details from database.");
        
    }
}

console.log(user.username);
console.log(user.getUserDetails());
