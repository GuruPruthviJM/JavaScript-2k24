class User{
    constructor(userName, email, password){
        this.userName=userName
        this.email=email
        this.password=password
    }

    encryptPassword(){
        return `${this.password}abc`
    }

    changeUserName() {
        return this.userName.toUpperCase()
    }
}

class login extends User{
    constructor(userName, email, password, isLogIn){
        super(userName, email, password)
        this.isLogIn=isLogIn
    }
    isLogined(){
        console.log(`${this.userName} is logined? - ${this.isLogIn}`);
    }
}

const chai = new User("Guru", "guru@gmail.com", 123)

console.log(chai.encryptPassword());
console.log(chai.changeUserName());

// behind the scence

const code = new login("Guru", "guru@gmail.com", 1513123, true)
code.isLogined()
console.log(code.encryptPassword())
console.log(code instanceof User);
console.log(code instanceof login);