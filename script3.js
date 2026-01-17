//hoisting impact per type
//hoisting is a javascript mechanism where variables and function declarations are moved to the top of their containing scope during the compile phase.
//ek variable ko jab js main banate hain to wo variable do hisson mein toot jata hai
// and uska declaration part upar chala jata hai and uska initialization part neeche reh jata hai
console.log(c); // undefined
var c = 38;
/* var -> hoist -> undefined
   let -> hoist -> X referenceError
   const -> hoist -> X referenceError
*/
console.log(mm);
var mm = "bhushan";

var hn = 2; //global scoped variable
{
  var hn = 113; //global // redeclaration allowed with var
}
console.log(hn); //113, var is function scoped or global scoped

let a = 10; // block scoped global variable
{
  let a = 20; // block scoped
  console.log("inside", a); // 20
}
console.log("outside", a); // 10, outside block scoped variable

console.log(d);
let d = 30; // block scoped variable
