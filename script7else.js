//switch hamesh accept karta hai ek value andar hote hai case.
//
function getVal(val) {
  if (val < 50) return "C";
  else if (val < 64) return "B";
  else if (val < 85) return "A";
  else return "F";
}

console.log(getVal(222));

function getMark(mark) {
  if (mark >= 40 && mark <= 64) return "C";
  if (mark >= 65 && mark <= 84) return "B";
  if (mark >= 85 && mark <= 100) return "A";
  else {
    return "F";
  }
}
console.log(getMark(45));

//Rock Paper Sceiseor
function rps(user, computer) {
  if (user === "rock" && computer === "scissors") return "User wins";
  if (user === "scissors" && computer === "paper") return "User wins";
  if (user === "paper" && computer === "rock") return "user wins";
  if (user === computer) return "It's a tie";
  return "Computer wins";
}
console.log(rps("rock", "paper"));
