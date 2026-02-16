let x = 22;
let y = 7;

if (x > 4 && y < 10) {
  console.log("A");
} else {
  console.log("B");
}

let isAdmin = true;
let isLoggedIn = false;
if (isAdmin || isLoggedIn) {
  console.log("Access Granted");
} else {
  console.log("Access not Granted");
}

let temperature = 25;
if (!temperature < 20) {
  console.log("It's a cold day");
} else {
  console.log("It's a warm day");
}


let a = 0;

if (a) {
  console.log("True");
} else {
  console.log("False");
}

let score = 75;

let grade =
  score >= 90
    ? "A"
    : score >= 80
    ? "B"
    : score >= 70
    ? "C"
    : "Fail hogaya bhai";
console.log(grade);

let points = 87;
let status = points > 80 ? "Gold" : points > 50 ? "Silver" : "Bronze";

console.log(status);

let rohan = true;
let harry = false;
let Access = rohan && harry ? "both are good" : "Koi nahi hai";
console.log(Access);

let age = 22;
let drink = age >= 18 ? "You can drink alcohol" : "You cannot drink alcohol";
console.log(drink);

let ag = 10;
ag++;
console.log(ag); //10

let age1 = 18;
++age1;
console.log(age1); //19

let age2 = 18;
let age3 = age2++;
console.log(age2, age3); //19

let p = 4;
let q = ++p;
console.log(p, q); //5 5

let m = 4;
console.log(m--);
console.log(m);
