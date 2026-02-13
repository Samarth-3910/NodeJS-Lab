// const fetchData = new Promise((resolve, reject) => {
//   const success = false; 
//   if (success) {
//     resolve("Data fetched successfully!");
//     console.log("Promise resolved: Data fetched successfully!");
//     } else {
//     reject("Failed to fetch data.");
//     console.log("Promise rejected: Failed to fetch data.");
//     }
// });

// fetchData.catch((error) => {
//     console.error("Error in fetchData promise:", error);
// });

// const login=()=>{
//     return Promise.resolve("Login successful!");
// };

// const getuserData=()=>{
//     return Promise.resolve("User data retrieved!");
// }

// const getUserName=()=>{
//     return Promise.resolve("User name is John Doe.");
// }
// // Using Promise chaining to handle asynchronous operations in sequence called as callback hell. but we have better way to handle this using async/await which is more readable and easier to manage.
// // login().then(() =>{
// //     getuserData.then(() =>{
// //         getUserName.then(() =>{
// //             console.log("All operations completed successfully.");
// //         });
// //     });
// // });

// // promise chaining
// login()
//     .then(getUserName)
//     .then(getuserData)
//     .then(console.log)
//     .catch((error) => {
//         console.error("Error in promise chain:", error);
//     });

// const data = () => 10;
// const data1 = () => (20);
// const data2 = () => {return 30;}; // all above functions are same but different syntax. they all return a promise that resolves to the value returned by the function. we can use async/await to handle these promises in a more readable way.

// Promise.resolve(10)
// .then((x) => {
//     x + 10;
// }).then((x) => {
//     console.log("Final result: ", y); 
//     return x + 10;
// })
// .then(console.log);

//what is Promise?
// A Promise is a JavaScript object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. It allows you to write asynchronous code in a more synchronous-like manner, making it easier to read and manage. A Promise can be in one of three states: pending, fulfilled, or rejected. You can use the .then() method to handle the fulfilled state and the .catch() method to handle the rejected state.

const fetchData = async () => {
    console.log("Started");
    await fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(response => response.json())
    .then(json => console.log(json))
    await fetch("https://jsonplaceholder.typicode.com/posts/2")
    .then(response => response.json())
    .then(json => console.log(json))
 console.log("Finished");
};

console.log("Started-----1");
fetchData();
console.log("Started-----2");