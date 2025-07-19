class User {
    constructor(email, password){
        this.email = email
        this.password = password

    }

    get email(){
        return `${this._email.toUpperCase()}`
    }
    set email(newEmail){
        this._email = newEmail
    }

    get password(){
        // return `${this._password}shreya`
        return `you can get access to password!`
    }
    set password(newPassword){
        this._password = newPassword
    }
}

const user01 = new User("shreya@gmail.com", "abc123")
console.log(user01.email)
console.log(user01.password)