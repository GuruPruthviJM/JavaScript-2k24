class User{
    constructor(userName){
        this.userName=userName
    }

    logMe(){
        console.log(`UserName: ${this.userName}`);
    }

    static createId(){  // This method's can be called only by it's class not by its instance
        return `123`
    }

}

const guru = new User("Guru")
// console.log(guru.createId()) -- This is will provide an error
console.log(User.createId()); // This will not provide an error
