//computer me repeat karne ko loop kehte hai
//for loop while loop do while loop for in loop for of loop
// kaha se jana hai -> kaha tak jana hai -> kaise jana hai
// for

// kaha se jana hai -> kab rukna hai -> kaise jana hai
// while

//jab koi garuntee na ho tab while loop use karte hai 
// 1-40 for loop
// 20-30 for loop
//tab tak chal na hai jab tak hello na aajaye - while loop
// us ped per rukna hai jaha laal color ka ped ho - while loop
// bhaalu miley jab jiske upar hiran baitha hai - while jab hame pata na hoo ki kab milega
//for 1-100
//for(start; end; change){

for (let i = 1; i <= 100; i++) {
  console.log(i + " Bhushan Ingle");
}
/*start
while(end){
//code
change
}*/

let j = 1;
while (j <= 100) {
  console.log(j);
  j++;
}
/* do-while 
let i = 1;
do{
    console.log(i);
    i++;
}
while(end) 
do ek bar jarur chalega
*/
let k = 6;
do {
  console.log(k);
  k++;
} while (k <= 10);

for (let i = 1; i <= 210; i++) {
  console.log(i);
  if (i === 87) {
    break;
  }
}

for (let i = 1; i <= 60; i++) {
  if (i === 50) {
    continue;
  }
  console.log(i);
}


