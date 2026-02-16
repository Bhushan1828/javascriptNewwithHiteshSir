//concept about functions declaration, function expression and fat arrow funtion
function abcd(){

}
let func = function(){
//variable me save karne ko function expression kehte hai
}
let abcde = () => {
//fat arrow function
}


//difference between function declaration and expression in terms of hoisting
//conver this funtin into arrow funtion
/* funtion multiply(a, b) {
    return a * b;
}*/
let multiply = (a, b) => {
  return a * b;
};
console.log(multiply(3, 4));

//use rest parameter to accept any number of scores and return the total
function atscore(...atscore) {
  let total = 0;
  atscore.forEach(function (score) {
    total = total + score;
  });
  return total;
}
console.log(atscore(10, 20, 30, 40, 50));
//check age allowed to vote or not
function checkage(age) {
  if (age < 18) return "To Young to Vote";
  return "Allowed";
}
console.log(checkage(27));

function f() {
  return;
}
console.log(f());

//what does it mean when we say "funtions are first class citizens in js"

//functions are treated as first class citizens in js when they are treated as values
let a = function () {
  console.log("hello");
};
a();

//pass a funtion into another funtion and execute it inside
function great() {
  return "Good Morning";
}
function callfun(fun) {
  console.log(fun());
}
callfun(great);

//anothe example of passing function as an argument
function eatDinner() {
  console.log("Eating Dinner Now");
}

function mom(callingFunction) {
  console.log("Mom is Calling you for Dinner");
  callingFunction();
}
mom(eatDinner);

//another example what is higher order function
//a function that takes another function as an argument or returns a function as a value is called higher order function  

function abcd(val){
    val();

}

abcd(function(){
    console.log("hello");
})

//what is closure when is it created and why is it used
//closure is a combination of function and the lexical environment within which that function was declared 
//closure is created when a function is declared inside another function and the inner function references variables from the outer function
//closure is used to give access to the inner function to the outer function's scope from outside the outer function
//closure ek aisa function hai jo return karta hai ek or function

function abcd(){
    let val = 0;
    return function(){
        console.log(val);
    }
}

function outer(){
    let a = 0;
    return function(){
        a++;
        console.log(a);
    }
}
/*convert the above funtion into a pure function
let total = 0;
function addTotal(){
    total += num;
}
*/
let total = 0;
function addTotal(num){
  let newTotal = total;
  newTotal += num;
}
//iife -> immediately invoked function expression
(function(name) {
    console.log("Hello " + name);
})("Rohit");

(function() {
    console.log("Hello! I run immediately.");
})();
