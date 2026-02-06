// import multiply, { add } from "./utils.js";

// const output = add(1, 2);
// console.log(" ~ add(1, 2):", output);

// const output2 = multiply(5, 6);
// console.log(" ~ multiply(5, 6):", output2);

// export const multi = 2 * 6;

const utils = require("./utils");


const { add } = utils;
console.log("destructuring add(3, 4):", add(3, 4));


console.log("dot multi(5, 6):", utils.multi(5, 6));


console.log("bracket add(7, 8):", utils['add'](7, 8));