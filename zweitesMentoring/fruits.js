const banana = () =>{
    console.log("this is a banana");
}

const apple = () =>{
    console.log("this is a apple");
}

const strawberry = () =>{
    console.log("this is a strawberry");
}

// 1. default export
export default banana
// import banana

// 2. named export
export {banana, apple, strawberry};
// import {banana, apple, strawberry}

// 3. rename import
export {banana}
// import {banana}

// 4. rename export
export {apple as greenFruit}
// import {greenFruit}

// Kombinationen sind möglich
// export {banana as yellowFruit, apple, strawberry}