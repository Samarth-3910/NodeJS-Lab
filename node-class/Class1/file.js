// console.log("Start");
// // setTimeout(() => console.log("Mid"), 5000);

// for (let i = 0; i < 9e9; i++) {}
// console.log("End");



console.log("1");
const getConsole = () => {
    console.log("2");
    setTimeout(() => {
        console.log("3");
    }, 2000);
    setTimeout(() => {
        console.log("3a");
    }, 1000);
};
getConsole();
for (let i = 0; i < 5e9; i++) {}
console.log("4");