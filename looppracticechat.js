for (let i = 1; i <= 10; i++) {
  console.log(i);
}

let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}
//while loop concept explain here
let doorOpen = false;
while (doorOpen === false) {
  console.log("Knock Knock");
  //after some time
  doorOpen = true;
}
console.log("Enter the room");
//print even number from 1 to 10
/*let j = 1;
while (j <= 100) {
  if (j % 2 === 0) {
    console.log(j);
  }
  j++;
}
*/

let m = ["sakshi", "bhushan", "ankit", "rahul"];
for (let ms of m) {
  console.log("Hello " + ms + " How are you?");
}
//counting down rocket Launch
for (let vr = 10; vr >= 1; vr--) {
  console.log(vr);
}
console.log("BLAST OFF!!");

let numbers = [10, 20, 30, 40, 50];
for (let num of numbers) {
  if (num === 20) {
    console.log("Found it...");
    break;
  }
}
//practice 1

let name = "Bhushan Ingle";
for (let i = 1; i <= 10; i++) {
  console.log(i + " " + name);
}
//practice 2
let p = 1;
while ((p += 2)) {
  console.log(p);
  if (p >= 19) {
    break;
  }
}
//practice 3 sume of even number 2 to 50
let sum = 0;
for (let n = 2; n <= 50; n += 2) {
  sum += n;
}
console.log("Sum of even number from 2 to 50 is: " + sum);

//for example
const cars = ["TATA Marotiii", "BMW", "Hundai"];
let len = cars.length;

let text = "";

for (let i = 0; i < len; i++) {
  text += cars[i] + "\n";
}
console.log(len + " " + text);

//q3 print first 5 odd numbers only 
//write a loop from 1 to 100 that: prints only 5 odd numbers Then stops the loop 
//use both if, cotinue and counter + break statement
//exprected output : 1 3 5 7 9

let counter = 0;
for(let i = 1; i<=100; i++){
  if(i % 2 === 1){
    counter++;
    console.log(i);
  }
  if(counter === 5) break;
}