class User{
    constructor(username){
        this.username = username
    }

    printMe(){
        console.log(`username is ${this.username}`)
    }
    static createId(){ // wont allow the user to have access to this method. why? you to auto generate and not allow user to create over and over again
        return `123`
    }
}

const user1 = new User("sh")
// console.log(user1.createId())


class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const teacher01 = new Teacher("te", "te@gmail.com")
console.log(teacher01.createId())