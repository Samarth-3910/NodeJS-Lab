// //---
// //Create file
// //---


import fs from 'fs';

// const output = fs.writeFileSync('file.txt', 'Hello World');
// console.log(output);

fs.readFile('file.txt', 'utf8', (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});

// fs.writeFileSync('file.txt', 'New content');
//fs.appendFileSync('file.txt', '\nNew content');

console.log(fs.readFileSync('file.txt', 'utf8'));

// const fs = require('fs');

// fs.writeFile('index.html', '<h1>Hello World</h1>', function (err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('File created successfully');
//     }
// });


//Create a file using async await

// const fs = require('fs/promises');

// const createFile = async () => {
//     try {
//         await fs.writeFile('login.html', '<h1>Login Page</h1>');
//         console.log('File created successfully');
//     } catch (error) {
//         console.log(error);
//     }
// };

// createFile();

const createFile = async (fileToCreate, Content) => {
    try {
        await fs.writeFile(fileToCreate, Content);
        console.log('File created successfully');
    } catch (error) {
        console.log(error);
    }
};

createFile('aboutUs.pdf', 'About Us Page');


// const fs = require('fs');

// const result = fs.readFileSync("aboutUs.pdf");
// console.log(result.toString());