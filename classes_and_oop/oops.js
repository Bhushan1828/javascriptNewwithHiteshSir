/*const User = {
  username: "Bhushan",
  loginCount: 9,
  signedIn: true,
  getUserDetails: function () {
    //console.log("Got User details from database");
    //console.log(`Username: ${this.username}`);
    console.log(this);
  },
};*/
//console.log(User.username);
//console.log(User.getUserDetails());

function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  //return this;
  this.greeting = function(){
    console.log(`welcome ${this.username}`)
  }
}

const userOne = new User("Bhushan", 12, true);
const userTwo = new User("Harshal", 23, true);
console.log(userOne.constructor);
//if we use new keyword then it create a empty object we called it instance. when we have a new object created
/* step 1 new object created
  step 2 constructor function call hota hai new key ke karan ye kya karta hai jitnae bhi arguments hote sab pack karke de deta hai
  setp 3 jo this key hota hai arg inject karta hai
  setp 4 aapko arg or value mil jate hai function ke andar*/