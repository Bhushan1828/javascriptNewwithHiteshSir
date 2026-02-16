let a = 13; //assignment operator
console.log(a);

12 == 13; //false not give correct ans do not check value is correct or not 
12 == "12"; //true only check value not strict comparison
12 === "12"; //false check value and type both. it is Sctrict comparison
12 != 13; //true not equal ka matlab dono value correct nahi hai
32 >= 13; //true
32 <= 13; //false

//assignment operators = equal ka use value dalne ke liye hota hai

let b = 12; //assignment operator
// =, +=, -=, *=, /=, %=, **=
a = 10; // Assign new value to existing 'a'
a += 5; // a = a + 5
console.log(a);
a -= 5; // a = a - 5
console.log(a);
a *= 5;
console.log(a);
a /= 5;
console.log(a);
a %= 5;
console.log(a);
//Logical operators
// &&, ||, !

12>13 && 12<13; //false both condition should be true
//OR operator chose any one condition true to give true ans
12>13 || 12<13; //true
//unary operator 
// + , - , typeof, ++, --
+"109191" // by using this operator we can convert string to number
console.log(typeof +"109191");
-"109191" // by using this operator we can convert string to number
console.log(typeof -"109191");
!12; //false it use to reverse the boolean value
!0; //true
typeof 12; //number use to check data type
++a; //increment operator it increase value by 1 immediately
--a; //decrement operator it decrease value by 1 immediately
a++; //it increase value by 1 but not immediately it post increment
console.log(a);
a--; //it decrease value by 1 but not immediately it post decrement
console.log(a);
//typeof is use to check the type of values it show the wrong value of null and array
console.log(typeof null); //object
console.log(typeof []); //object
typeof NaN; //number
console.log(typeof NaN); //number
// a instanceof array; // it is use to check the array or not
// console.log(a instanceof array); 
//it is use to check the array or not