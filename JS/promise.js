// sync => synchronous => line by line execution of code
// async => asynchronous => Multple tasks can be executed at the same time.

// callback function => function which is passed as an argument to another function.



function sum(a, b, callbackFunc) {
    const s = a + b 
    callbackFunc(s)
}

sum(10, 20, function (value) {
    console.log(value);
})

// Promise => A promise is an object that represents the outcome of an asynchronous operation.
// A way to handle asynchronous operations.

// 3 states of a promise => pending, fulfilled, rejected, settled Promise

// pending => initial state of the promise
// fulfilled => when the promise is resolved
// rejected => when the promise is rejected

// constructor => is a function that initializes a new object

const promise = function () {
    return new Promise(function (resolve, reject) {
        setInterval(() => {
            reject("Promise rejected")
        }, 3000);
    })
}

// promise().then(function (response) {
//     console.log(response);
// }).catch(function (error) {
//     console.log(error);
// })

// async await => is a keyword that is used to wait for a promise to resolve

async function getData() {
    try {
        const response = await promise()
        console.log(response);
    } catch (error) {
        console.log("Error: " + error);
    }
}

getData()