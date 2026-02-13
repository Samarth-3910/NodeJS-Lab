const a = () => {
    console.log("a pushed to stack");
    b();
    console.log("a is executed");
    console.log("a is popped from stack");
}

const b = () => {
    console.log("b pushed to stack");
    c();
    console.log("b is executed");
    console.log("b is popped from stack");
}

const c = () => {
    console.log("c pushed to stack");
    console.log("c is executed");
    console.log("c is popped from stack");
}

a();