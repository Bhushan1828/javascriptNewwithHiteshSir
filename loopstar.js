for (let i = 1; i <= 5; i++) {
  let str = "";
  for (let j = 1; j <= i; j++) {
    str += "*";
  }
  console.log(str);
}
console.log("\n");

let x = 7;
for (let i = x; i >= 1; i--) {
  let st = "";
  for (let j = 1; j <= i; j++) {
    st += "*";
  }
  console.log(st);
}

console.log("\n");

// //for pyramid star pattern

// for (let i = 1; i <= 5; i++) {
//   let t = "";
//   for (let L = 1; L <= 5 - i; L++) {
//     t += " ";
//   }
//   for (let k = 1; k <= 2 * i - 1; k++) {
//     t += "*";
//   }
//   console.log(t);
// }

// for (let f = 5-1; f >= 1; f--) {
//   let p = "";
//   for (let q = 1; q <= 5-f; q++) {
//     p += " ";
//   }
//   for (let r = 1; r <= 2 * f - 1; r++) {
//     p += "*";
//   }
//   console.log(p);
// }

for (let i = 1; i <= 5; i++) {
  let str = "";
  for (let b = 1; b <= 5 - i; b++) {
    str += " ";
  }
  for (let k = 1; k <= 2 * i - 1; k++) {
    str += "*";
  }
  console.log(str);
}
for (let i = 5 - 1; i >= 1; i--) {
  let str = "";
  for (let b = 1; b <= 5 - i; b++) {
    str += " ";
  }
  for (let k = 1; k <= 2 * i - 1; k++) {
    str += "*";
  }
  console.log(str);
}
