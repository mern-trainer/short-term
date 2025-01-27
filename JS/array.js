// array => collection of elements

const arr = [1, 2, 3, 4, 5, 6];

console.log(arr[3]);

console.log(arr.length) // length of the array
console.log(arr.indexOf(2)); // index of the element

console.log(arr.includes(3)); // check if the array contains the element

arr.push(7, 8, 9, 10) // add element at the end of the array
console.log(arr);
const removed = arr.pop() // remove the last element from the array
console.log(arr);
console.log(removed);

arr.unshift(0, -1, -2, -3) // add element at the beginning of the array
console.log(arr);
arr.shift() // remove the first element from the array
console.log(arr);

console.log(arr.toString()) // convert the array to string;
console.log(arr.join("+")); // convert the array to string;


// map, filter

const arr2 = [1, 2, 3, 4, 5, 6, 7];

// const res = arr2.filter(function (element) {
//     return element != 4
// })

// console.log(res);

const res = arr2.map(function (element) {
    if (element == 4) {
        return element * 10
    }
    return element
})

console.log(res);