const a = () => {
    setTimeout(() => {
        console.log("async function1: ");
    }, 0);
    b();
    console.log(" ~ a ~ a: ");
};
const b = () => {
    setTimeout(() => {
        console.log("async function2: ");
    }, 0);
    console.log(" ~ b ~ b: ");

    Promise.resolve().then(() => {
        console.log("async function3: ");
    });
    Promise.resolve().then(() => {
        console.log("async function4: ");
    });
};

a();

//Eventloop checks the callstack if empty  execute the aysn functions register in the environment.