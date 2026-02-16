//select the paragraph firs
let p = document.querySelector("p");
p.addEventListener("dblclick", function () {
  p.style.color = "red";
});

let input1 = document.querySelector("input");
input1.addEventListener("input", function (dets) {
  if (dets.data !== null) {
    console.log(dets.data);
  }
});
