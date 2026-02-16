function SetUsename(username) {
  //comple DB calls
  this.username = username;
  console.log("called");
}

function createUser(username, email, password) {
  SetUsename.call(this, username);
  this.email = email;
  this.password = password;
}

const chai = new createUser("chai", "chai@gmail.com", "1234");
console.log(chai);
