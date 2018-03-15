//es5
const square = function (x) {
    return x*x;
}
//es6
const squareArrow = (x) => x * x ;//only in some situations

console.log(squareArrow(9));
console.log(square(8));


const getFirstName = (x)=>x.split(' ')[0];

console.log(getFirstName('Mike Smith'));

