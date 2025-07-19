// ES6

class User {
    constructor(username, email,password){
        this.username = username
        this.email = email
        this.password = password
        // parameter, properties
    }

    // methoda
    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(cUsername){
        this.username = cUsername
    }
}

const myUser = new User("shreya", "shreya@gmail.com", "1234")

console.log(myUser.encryptPassword())

myUser.changeUsername("hello")

console.log(myUser)


// behind the scene

function newUser(username, email,password){
    this.username = username
    this.email = email
    this.password = password
}

newUser.prototype.encryptPassword = function(){
    return `${this.password}efg`
}

newUser.prototype.changeUsername = function(cUsername){
    this.username = cUsername
}



const user1 = new newUser("sh", "sh@gmail.com", "1234")

console.log(user1)

console.log(user1.encryptPassword())
user1.changeUsername("shr")
console.log(user1)







