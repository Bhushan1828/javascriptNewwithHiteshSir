//Scope (global, block, function)
// var is function scoped
//global variable can be accessed anywhere in the code
//function scoped variable can be accessed only within the function
//block scoped variable can be accessed only within the block
//Reassignment and redeclaration
//redeclaration is allowed with var but not with let and const
//var a = 10;
//a = 12; //reassignment

//let b = 14; //block scoped, cannot be redeclar
//b = 20;

//Temporal Dead Zone (TDZ) occurs when you try to access a variable before it is declared
//tdz - utna area jitne mein js ko pata hai ki variable exist karta hai but uska value nahi pata

//console.log(a); // 10
//let a = 10; // TDZ starts here
//temporal dead zone available for let and const
//but var is not in TDZ

console.log(b); // ReferenceError: Cannot access 'b' before initialization

var b; // TDZ ends here
