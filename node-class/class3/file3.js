const a = () => {
    setTimeout(() => {
        console.log("async function1: ");
    }, 0);
    setTimeout(() => {
        console.log("async function2: ");
    }, 0);
    b();
    console.log(" ~ a ~ a: ");
};
const b = () => {
    console.log(" ~ b ~ b: ");
};

a();

//Eventloop checks the callstack if empty  execute the aysn functions register in the environment.