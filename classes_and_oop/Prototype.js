/*let name = "Bhushan";
let sirName = "Ingle"
console.log(name.truelength());

/*let myHerro = ["Thor", "Spider"];

let heroPower = {
  Thor: "hammer",
  Spider: "sling",

  getSpiderPower: function () {
    console.log(`spidy power is ${this.Spider}`);
  },
};

Object.prototype.bhushan = function () {
  console.log(`bhushan is present in all objects`);
};

Array.prototype.heyBhushan = function () {
  console.log(`Bhushan sayys Hello`);
};
//heroPower.bhushan()
myHerro.bhushan();
myHerro.heyBhushan();
//heroPower.heyBhushan();

//inheritance
const User = {
  name: "student",
  email: "student@gmail.com",
};
const Teacher = {
  makeVideo: true,
};

const TeachingSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAssignment: "Js assignment",
  fullTime: true,
  __proto__: TeachingSupport,
};

Teacher.__proto__ = User;
//modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher);*/

let anotherUsername = "chaiaurcode       ";

String.prototype.trueLength = function () {
  //console.log(`${this}`);
  console.log(`${this.name}`);
  console.log(`True length is: ${this.trim().length}`);
};

anotherUsername.trueLength();
"hitesh".trueLength();
"iceTea".trueLength();
