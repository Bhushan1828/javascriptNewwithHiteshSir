function makeSandwich(ingred) {
  console.log("making a sandwitch With " + ingred);
}
makeSandwich("cheese");
makeSandwich("bread");
//calculator==Adding numb
function addnum() {
  return num1 + num2;
}

/*function multinum(a, b) {
    console.log(a * b);
}
multinum(4, 5);
multinum(7, 3);*/
function multinum(a, b) {
  return a * b;
}

console.log(multinum(4, 5));
console.log(multinum(7, 3));
//Exercise – Create a Function to Check Even or Odd

function evenodd(a) {
  if (a % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}
console.log(evenodd(3));
console.log(evenodd(7));
console.log(evenodd(10));

function info(name, age) {
  return `Hello, ${name} You are ${age} years old...`;
}
console.log(info("Rohit", 22));

function checked(b) {
  if (b > 0) {
    return `Positive Number`;
  } else if (b < 0) {
    return `negative number`;
  } else {
    return `Zero Number`;
  }
}
console.log(checked(0));
//Create a Function to Calculate Square of a Number
function Square(a) {
  return a * a;
}
console.log(Square(7));
console.log(Square(9));

function large(a, b) {
  if (a > b) {
    return `this value ${a} is greater`;
  } else {
    return `This value is ${b} is greater`;
  }
}
console.log(large(747, 7883));
console.log(large(736373, 71826));
