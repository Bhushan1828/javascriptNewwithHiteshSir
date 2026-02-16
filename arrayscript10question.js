//create an array with 3 fruits and print the second fruit.
let fruits = ["apple", "banana", "mango"];
fruits[1];

//add a new fruit at the end of the array and print the updated array.
fruits.push("greenperu");
fruits.unshift("pineapple");
//replace banana with kiwi
fruits[1] = "kiwi";
console.log(fruits);
//replace greenperu with chikuu
fruits.pop("mango");
fruits.push("Chiku");
//what is difference between .push() and .unshift() 
//push you can add at last by using unshift value add in first

//Insert "Red" and "Yellow at index 1 in this array"
let colors = ["Green", "Blue", "Turmaric"]