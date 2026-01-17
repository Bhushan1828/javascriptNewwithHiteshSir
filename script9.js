//when to use for loop and while loop
//for loop when number of iteration is known
//while loop when number of iteration is not known
//Now we learn about funtions
//fat arrow function
//() => {};
//function declaration expression and arrow function
function abcd() {} //function statement
let ab = function () {}; //function expression
//parameters and arguments

function dance(v1) {
  console.log(`${v1} is dancing`); //template literals
}
dance("Rohit");
dance("Suresh");

//default, rest and spread parameters
//default parameters
function addEventListener(X, Y) {
  console.log(X + Y);
}
addEventListener();
//default + default parameters = NaN
function sum(v1 = 5, v2 = 7) {
  console.log(v1 + v2);
}
sum(10, 20);
//rest parameters\
//jab argumets kai saare ho to hume utne hi parameters banaane padenge, issey bachane ke liye hum rest ka use karte hain..
// agar... function ke parameter space me lage to wo rest operator hain

function abcd(...val) {
  console.log(val);
}
abcd(1, 2, 3, 4, 5, 6, 7, 8, 9);

//return keyword ka matalab jaha se aaye hoo wahi daal denge
function template(v) {
  return 12 + v;
}

let val = template(100);
console.log(val);

//pure and impure functions
//pure function wo hota hai jiska output hamesha same hota hai agar input same ho
//impure function wo hota hai jiska output same nahi hota hai agar input same ho
let d = 12;

function add(){
    console.log(d);
}
function sub() {
    a++;
}

//closure -> ek fnc jo return kare ek aur fnc ko return hone wala funtion hamesha use karega parent funtion ka koi variable
function outer() {
    let a = 10;
    return function(){
        console.log(a);
    }
}
//lexical scope -> ek fnc apne parent ke variable ko access kar sakta hai

function parent() {
    let a = 10;
    function child() {
        let b = 13;
        function grandChild() {
            let c = 15;
        }
    }
}