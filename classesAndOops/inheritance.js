class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is ${this.username}`)
    }
}


class Teacher extends User {
    constructor(username, email, password){
        super(username) // instead of call use super
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`New course added by ${this.username}`)
    }
}
const newT = new Teacher("sh","sd@gmail.com", "12345")
const newT2 = new Teacher("sh","sd@gmail.com", "12345")
const newTe = new User("sh")

newT.addCourse()
newT.logMe()

console.log(newT)
console.log(newTe)

console.log(newT === newTe)
console.log(newT === newT2)
console.log(newT instanceof User)



