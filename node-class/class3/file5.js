const fetchData = (a, b, cb) => {
    cb( `${a + b} Data Initialized`);
};

const internalFunction = (data) => {
    console.log("internalFunction: ", data);
};
fetchData(1, 2, internalFunction);