//write a BMI calculator
function bmiCalculator(weight, height) {
  return weight / (height * height);
}
console.log(bmiCalculator(52, 1.66).toFixed(2));


//create a reusable discount calculator(HOF)
function discountCalculator(){
    return function(){

    }
}
