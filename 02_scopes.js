let a = 10;

//{} it is scope block when it comes with if else or loop
let b = 300;
if (true) {
  let a = 20;
  const b = 30;
  console.log(a); //20
}
console.log(a); //10
//Nested scope block
function one() {
  const username = "Bhushan";
  function two() {
    const website = "LearnCodeOnline.in";
    console.log(username);
    console.log(website);
  }
  two();
}
one();

//nested if scope

if (true){
  let username = "Bhushan";
  if(username === "Bhushan"){
    let profession = "Developer";
    console.log(profession+" "+username);
  }
  //console.log(profession)
}
//console.log(username);

//********************interesting *********/
console.log(outer(20));
function outer(num){
  return num + 10;
}

console.log(outer2(30));
const outer2 = function(add){
  return add + 10;
}
