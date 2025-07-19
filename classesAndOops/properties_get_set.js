function User(email, password){ // acts in 2 ways, as a function and as an object
    this._email = email
    this._password = password

    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(newEmail){
            this._email = newEmail
        }
    })
    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(newPassword){
            this._password = newPassword
        }
    })
}

const user01 = new User("sh@gmail.com", "123456")

console.log(user01._email)
console.log(user01._password)



