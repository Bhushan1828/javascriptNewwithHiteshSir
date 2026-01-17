let marks = 30;

if (marks >= 90) {
  console.log("A grade");
} else if (marks >= 80) {
  console.log("B grade");
} else if (marks >= 70) {
  console.log("C grade");
} else {
  console.log("D grade");
}

//login check
let username = "bhushan";
let password = "12345";

if (username === "bhusha" && password === "12345") {
  console.log("Login successful");
} else {
  console.log("Invalid credentials");
}

//loan eligibility
let income = 100000;
let creditscore = 750;
let hasJob = true;
let age = 25;
if (age >= 21 && age <= 60 && income >= 50000 && creditscore >= 700 && hasJob) {
  console.log("Loan approved");
} else if (creditscore < 700) {
  console.log("Loan denied due to low credit score");
} else if (income < 30000 && !hasJob) {
  console.log("Loan denied due to insufficient income");
} else {
  console.log("Loan denied does not meet the criteria");
}
