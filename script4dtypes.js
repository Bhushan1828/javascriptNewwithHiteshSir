//data types
//primitives and reference types
//primitives -> aisi saari values jinko copy karne par tumhe ek real copy mil jaayee
//reference types -> aisi saari values jinko copy karne par tumhe ek reference milta hai
//primitives -> number, string, boolean, null, undefined, symbol, bigint
//reference types -> object, array, function, date, regex
// [] -> array
// {} -> object
// () -> function
//null ka matlab hai aapne jaan boojh kar variable ko value nahi diya hai
//undefined ka matlab aapne variable banaya hai lekin usko value nahi di hai
//symbol -> unique immutable value
//future mein hum koi libraries use karenge ab is case mein un libraries me kai baar kuchh
// fileds hoti hai jinse similar hum bhi bana dete hai aur
// galti se humaari banni hui fields us library ki original fileds ko change kar deta hai
let a = 10; // number
let b = a; // string
a = a + 18;
//symbol -> unique immutable value
let sym1 = Symbol("description");
let obj = {
  uid: 1,
  name: "bhushan",
  age: 25,
  email: "bhushan@gmail.com",
  isLoggedIn: false,
};
let obj2 = obj; // reference type
console.log(obj2);

//type coercion -> concept jisme apkaa ek type automatically dusre type mein convert ho jaata hai
let aa = "3" + 3; // "33" -> string
// Truthy and falsy values
// 0 false "", null, undefined, NaN, document.all -> falsy
// baaki sab truthy
// console.log(typeof a); // number
let result = true + false;
let result2 = 10 + "20"; // "1020" -> string
let result3 = null + 10; // 10 -> number
let result4 = undefined + 10; // NaN -> number
