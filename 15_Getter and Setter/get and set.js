// This is the old method

function user(email, password){
    this.password=password
    
    Object.defineProperty(this, 'email', {
        get: ()=>{
            return `${this._email.toUpperCase()}fasfas`
        },
        set: (value)=>{
            this._email=value
        }
    })
    this.email=email
}

const pruthvi = new user("pruthvi61@gmail.com", 1532)
console.log(pruthvi);



// This is the new method
class User{
    constructor(username, email, password){
        this.username=username
        this.email=email
        this.password=password
    }
    get email(){
        return this._email
    }

    set email(mail){
        this._email = mail
    }
    get password(){
        return `${this._password.toUpperCase()}fasffsdj;l`
    }

    set password(value){
        this._password=value
    }
}

const guru = new User("Guru", "gurupruthvijm@gmail.com", "123")

console.log(guru);
