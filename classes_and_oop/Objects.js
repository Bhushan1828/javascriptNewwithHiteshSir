function multipleBy(num) {
  return num * 5;
}
multipleBy.power = 2;
console.log(multipleBy(5));
console.log(multipleBy.power);

console.log(multipleBy.prototype);

//function function bhi hai orr object bhi hai
//end of the day har koi chiz milti hai object se
//array, string, function => Object => null

function creatUser(username, score) {
  this.username = username;
  this.score = score;
}

creatUser.prototype.increment = function () {
  this.score++;
};
//for this, jisne bhi bulaya hai uske pass jaaoo
creatUser.prototype.printMe = function () {
  console.log(`price is ${this.score}`);
};
const chai = new creatUser("Chia", 24);
const tea = new creatUser("tea", 200);

chai.printMe();
tea.printMe();

/*
Heres what happens behind the scences when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new Javascript object.
A prototype is linked: The newly created objects gets linked to the prototype property of the constructor function. This means that it has acces to properties and methods defined on the constructor prototype

The constructor is called: the constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor. js assume this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (obj, array, funciton etc), the newly created object is returned

*/
