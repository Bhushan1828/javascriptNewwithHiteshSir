// Immediately Invoked Function Expressions (IIFE)
(function chai(){
  console.log("IIFE is executed");
})();

( (name) => {
  console.log("Hello " + name);
} )();

let result = (function(){
  return 20;
})();
console.log(result);