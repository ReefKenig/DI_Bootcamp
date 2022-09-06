// const getUsers = async () => {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await response.json();
//     return data;
//   } catch (e) {
//     throw Error(e.message);
//   }
// };

// getUsers()
//   .then((res) => console.log(res))
//   .catch((e) => console.log(e));

// function buyOranges() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(console.log("Bought oranges"));
//     }, 3000);
//   });
// }

// function cutOranges() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(console.log("Oranges have been cut"));
//     }, 2000);
//   });
// }

// function orangeJuice() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(console.log("Orange juice ready!"));
//     }, 1000);
//   });
// }

// async function executionProcess() {
//   await buyOranges();
//   await cutOranges();
//   await orangeJuice();
// }

// executionProcess();

// const getUsers = require("./test2.js");
// getUsers().then((e) => console.log(e));
