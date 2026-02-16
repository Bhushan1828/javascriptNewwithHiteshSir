//when to use for loop and while loop
//for loop when number of iteration is known
//while loop when number of iteration is not known
//Now we learn about funtions
//fat arrow function
//() => {};
//function declaration expression and arrow function
function abcd() {} //function statement or funtion declaration

let ab = function () {}; //jar variable madhe funtion la save kel tr tyala function expression mhanatat

//fat arrow function
let fnc = () => {
  console.log("hello World");
};
fnc();

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
addEventListener(66, 99);
//default + default parameters = NaN
//here v1,v2 parameters
function sum(v1 = 5, v2 = 7) {
  console.log(v1 + v2);
}
sum(10, 20); //10, 20 argument
//rest parameters
//jab argumets kai saare ho to hume utne hi parameters banaane padenge, issey bachane ke liye hum rest ka use karte hain..
// agar... function ke parameter space me lage to wo rest operator hain
//Default, rest and spread parameter
//default
//we give v value as a default parameter
function addg(v1 = 0, v2 = 0) {
  console.log(v1 + v2);
}
addg(22, 33);

//Restfuntion
//jab arguments kai saare ho to hamein utne hi parameter banaane padenge..
//issase bachane keliye hum rest use karte hain ... -> means rest or spread how to knows it spread or rest 
// ... -> funtion parameter space me lage to wo rest operator hai
// agar ow arrays and objects me lage to wo spread operator hai
//restparameter
function abcd(...val) {
  console.log(val);
}
abcd(1, 2, 3, 4, 5, 6, 7, 8, 9, 77, 887, 55);

function realprob(a, b, c, d, e, f, ...val) {
  console.log(a, b, c, d, e, f, val);
}
realprob(1, 2, 3, 4, 5, 33, 44, 22, 11, 232, 33);

//now understand return
//return keyword    
//return keyword ka matalab jaha se aaye hoo wahi daal denge
function template(v) {
  return 12 + v;
}

let val = template(100);
console.log(val);

//Fist class Functions -> functions ko values ki tarah treat kar sakte hai
// 1. Function abcd takes another function as a parameter
function a(va) {
  va(); // 2. It calls that function
} 
// 3. abcd is called with an anonymous function as an argument
a(function () {
  console.log("heeellyy");
});

//Higher order funtion wo hota hai jo ki return kare funtion ya fir except kare ek function apne parameter mein
function abu(val) {
  return function () {
    console.log("hof");
  };
}
abu()();

//pure and impure functions
//aisa function jo ki bahar ke value ko naa badle wo hai pure funtion
//aisa function jo ki baahar ki value ko badal de wo hai impure function
//pure function wo hota hai jiska output hamesha same hota hai agar input same ho
//impure function wo hota hai jiska output same nahi hota hai agar input same ho
let d = 12;
//pure function
function add() {
   console.log(d);
}
//impure function
function sub() {
  a++;
}

//MostIMP..closure -> ek fnc jo return kare ek aur fnc ko
// return hone wala funtion hamesha use karega parent funtion ka koi variable

function outer() {
  let a = 10;
  return function () {
    console.log(a);
  };
}

//lexical scope -> ek fnc apne parent ke variable ko access kar sakta hai
// a is use in whole code but b only use in futnion grandchil c is limited for grandchild()

function parent() {
  let a = 10;
  function child() {
    let b = 13;
    function grandChild() {
      let c = 15;
    }
  }
}

//iif immediatly invoked funtion
//turant chale wala function
(function () {
  console.log("heeeyeey");
})();

//hoisting allowd function statement and function declaration
//but not allowed by using function expression
//banane se pehle use kar sakte hai
//this is a function statement
abk();

function abk() {
  console.log("where hyou");
}

/* funtion expression not allowed hoisting
gdsh();

let gdsh = function () {
  console.log("yoou");
};*/
