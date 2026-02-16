let promise1 = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("Task Completed..!!");
    console.log("task");
  } else {
    reject("Task Failed..!!");
  }
});
