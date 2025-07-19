function setUsername(username){
    // complex db calls
    this.username = username
    console.log("called")
}

function createUser(username, email, password){
    setUsername.call(this,username) // use call to call the function, use this in first argument to pass the username otherwise undefined
    this.email = email
    this.password = password
}

const chai = new createUser("hello", "ello@gmail.com", "1234")

console.log(chai)