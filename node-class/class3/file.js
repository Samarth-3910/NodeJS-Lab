const a = () => {
    b();
    console.log("a");
}

const b = () => {
    c();
    console.log("b");
}

const c = () => {
    console.log("c");
}

a();