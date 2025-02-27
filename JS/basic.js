// What is js => Javascript is a scripting language. It is used to create interactive effects on the web pages.

// variables => variable is a container for storing data values.

// identifiers => name given to the variable. user defined names

// keywords => reserved words in js. it is not a variable. it is a keyword. it is used to define the behaviour of the program.

// data type => type of data stored in the variable.

// Number, String, Boolean, Null, Undefined, Symbol

// a = 10

// static and dynamic typing 
// => static typing => variable type is known at compile time.
// => dynamic typing => variable type is known at run time.

// let, var, const

var ab;
var a = 10
console.log(a)
var a = "Hello"
console.log(a)

let ac;
let b = 20
console.log(b)
b = "Hey"
console.log(b)

// const n = 20;
const c = 30;
console.log(c);
// c =40
// console.log(c)

// var => re declare, re assign
// let => can't re declare, re assign
// const => can't re declare, can't re assign

// function => A function is a block of code which is executed only once.

const e = 10
const d = 20
console.log(e+d)
const f = 10
const g = 20
console.log(f+g)

function sum(a, b, c){ // parameters
    const s = a + b + c
    console.log(s)
}

sum(20,40, 45) // arguments
sum(678,145, 90) // arguments

function calc(a, operator, b){
    if(operator == "+"){ // conditional statement
        return a + b
    }else if(operator == "-"){
        return a - b
    }else if(operator == "*"){
        return a * b
    }else if(operator == "/"){
        return a / b
    }else{
        return "Invalid operator"
    }
}

const res = calc(10, "oi", 20)

console.log(res);

// loops => for, while, do-while => Loops are used to iterate over a block of code multiple times.

// comparison operators => ==, ===, !=, !==, >, <, >=, <=

"2" == 2 // true
"2" === 2 // false

let sumOfNumbers = 0
for(let i = 1; i <= 10; i++){
    sumOfNumbers = sumOfNumbers + i
}
console.log(sumOfNumbers);