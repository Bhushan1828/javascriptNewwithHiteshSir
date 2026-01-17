let marks = [11, 22, 33, 44, 333, 22, 123];
//ANOTHER method let array = new Array(11,22, 33, 44, 333, 22, 123)
marks[3] = 5555;
//array methods
marks.push(7777); //add element at last
marks.pop(); //remove element from last
//unshift shuruvat me ek value add karta hai
marks.unshift(5); //add element at start
//by using splice we can add,remove or replace elements
//splice(starting index,number of elements to be removed,element1,element2,...)
let array = [12, 3, 6, 4, 5];
array.splice(2, 2);
let newarr = array.slice(0, 2);
array.reverse(); //reverse the array
//sort alway accept funtions
let newarray = [45, 23, 67, 12, 89, 5];
let sr = newarray.sort(function (a, b) {
  return a - b;
}); //sort the array in ascending order
newarray.forEach(function (val) {
  console.log(val + 1);
});
//map create a new array by performing a function on each array element
//map srf tab use karna hai jab aapko ek naaya array banana hai pichle array ke data ke basis par
//map dikhte hi sath man mei ek blank array bana leta hai aur har element par function apply karke us blank array banana hai
let arr = [1, 2, 3, 4, 5];
let mappedarr = arr.map(function (val) {
  //return 2;
  if (val > 2) return val;
});
//jab bhi aapko aisa koi vase dikh jaaye jaha par ek array
//se naya array banega and wo naya array kucch values ko rakhega tab map lagega

let filtry = [11, 22, 33, 44, 55, 66, 77, 88, 99];
let newfiltry = filtry.filter(function (val) {
  if (val > 11) return true;
});

let redu = [1, 2, 3, 4, 5];
let newredu = redu.reduce(function (accumulator, val) {
    return accumulator + val;
},0);
//output 15
//accumulator is a variable that stores the accumulated result of the reduction operation.
//acculator remeber the value between each iteration
let findd = [11, 22, 44,  33, 44, 55, 66];
let newfindd = findd.find(function (val) {
  return val === 44;
});

//output 44
//find method returns the first element that satisfies the provided testing function.

let arre = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
let newarre = arre.some(function (val) {
  return val > 5;
});