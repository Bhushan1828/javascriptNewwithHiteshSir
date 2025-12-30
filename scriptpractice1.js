//day1:
console.log("Hello, World!");
const accountId = 12345;
let accountEmail = "bhushan@gmail.com";
var accountPassword = "12345";
accountCity = "Pune";
// accountId = 45678; // we cannot change the value of accountId because it is a constant
accountEmail = "hp@gmail.com";
accountPassword = "67890";
accountCity = "Mumbai";
let accountState; // we can declare a variable without assigning a value
console.log([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);
/*Prefer not to use var
because of issue in block scope and functioncal scope*/
//day2: data types
console.log("Day2 Practice");
/*let number = 100;
let isLoggedIn = false;
let string = "Hello, World!";
let float = 10.5;
let news = undefined;
let nullVar = null;*/
//alert( 3 + 3 ); // we can using nodejs not browser
// number => 2 to the power of 53
//bigint => more than 2 to the power of 53
// string => "hello", 'hello', `hello`
//boolean => true, false
//null => standalone value
//undefined => default value
/*console.log(typeof nullVar);
console.log(typeof news);

let score = "2828dfg";
console.log(typeof score);
let valueInNumber = Number(score); // convert string to number
console.log(typeof valueInNumber);
console.log(valueInNumber); // NaN => not a number
*/
//"44" => 44
// "33abc" => NaN
// true => 1, false => 0

let isLoggedInVar = 1;
let booleanIsLoggedIn = Boolean(isLoggedInVar);
console.log(booleanIsLoggedIn); //
let someNum = 33;
let StringNum = String(someNum);
console.log(StringNum);
console.log(typeof StringNum);
