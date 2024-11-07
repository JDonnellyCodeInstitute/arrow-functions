/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
// function addTwoNumbers(a, b) {
//     // code block
//     return a + b
// }
// let sum = addTwoNumbers(3, 5);
// console.log(sum);

// Arrow Function With Parameters
const addTwoNumbers = (a, b) => {
    // code block
    return a + b
}
let sum = addTwoNumbers(3, 5);
console.log(sum);

// Single Line Arrow Function With Parameters
// const addTwoNumbers2 = (a, b) => (a + b); //same result
const addTwoNumbers2 = (a, b) => a + b;
let sum2 = addTwoNumbers2(6, 5);
console.log(sum2);

// Implicit Returns
//in cases where theres only one parameter, parentheses arent required
const saySomething = message => console.log(message);
saySomething("Written stuff");

// If there is no parameter we need empty parentheses to tell JS we're creating a function
const sayHello = () => console.log("Hello");
sayHello();

// Returning Multiple Lines
//multiple lines of code being returned always need to be wrapped in parentheses
const returnMultipleLines = () => (
    `<p>
        This is a multiline string!
    </p>`
)
console.log(returnMultipleLines());
