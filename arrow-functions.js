// Vanilla JS function

function addTwoNumbers(a,b) {
    //code block
    return a + b;
}
let sum = addTwoNumbers(3,5);
console.log(sum);

//Arrow function with parameters

const addTwoNumbers2 = (a, b)=> {
    //code block
    return a + b;
}
let sum2 = addTwoNumbers2(6, 4);
console.log(sum2);

// Single line arrow functions with parameters
// also valid (required with multiline returns)
// const addTwoNumbers3 = (a, b) => (a + b);

const addTwoNumbers3 = (a, b) => a + b;
let sum3 = addTwoNumbers3(10, 5);
console.log(sum3);

// Implicit returns

const saySomething = message => console.log(message);
saySomething("Hello there!!");

const sayHello = () => console.log("hello");
sayHello();

//Returning multiple lines

const returnMultipleLines = () => (
    `<p>
    This is a multiline String!
    </p>`
)
console.log(returnMultipleLines());