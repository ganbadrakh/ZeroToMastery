// old style:
function first() {
    const greet = 'hi';

    function second() {
        alert(greet);
    }
    return second;
}
var newFunc = first();
newFunc();
// equals to

// new style:
const first = () => {
    const greet = 'hi';
    const second = () => {
        alert(greet);
    };
    return second;
};
const newFunc = first();
newFunc();

// Closures - a function ran. the function executed. It's never going to be executed again.
// But it's going to remember that there are references to those variables
// so the child scope always has access to the parent scope

// Currying
const multiply = (a, b) => a * b;
const curriedMultiply = a => b => a * b;
const multiplyBy5 = curriedMultiply(5);

// Compose
const compose = (f, g) => a => f(g(a));

const sum = num => num + 1;
compose(
    sum,
    sum
)(5); // gives me 7

// Avoiding Side Effects & functional purity
let a = 1;

function b() {
    a = 2;
}