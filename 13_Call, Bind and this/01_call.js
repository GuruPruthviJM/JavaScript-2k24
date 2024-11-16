function setUserName(userName){
    this.userName=userName
}

function createUser(userName, email, password){
    setUserName(userName) // the username can't be accesed by username because setUserName is child of global execution
    this.email=email
    this.password=password
}

const chai = new createUser("chai", "chai.gmail.com", 123)
console.log(chai); // It will only print the email and password

function setUserName1(userName){
    this.userName=userName
}

function createUser1(userName, email, password){
    setUserName1.call(this, userName) // This is going to copy the objects from the setUserName method
    this.email=email
    this.password=password
}

const chai1 = new createUser1("chai", "chai.gmail.com", 123)
console.log(chai1); 