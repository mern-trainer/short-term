// hide mobile number
// email hide

const mobile = "1234567890"
const email = "sample@gmail.com"

// 12******90
// sam*****@gmail.com

const firstTwoDigit = mobile.slice(0, 2)
const lastTwoDigit = mobile.slice(-2)

const hiddenMobile = firstTwoDigit + "******" + lastTwoDigit

console.log(hiddenMobile);

// email hide

const emailArray = email.split("@")

const username = emailArray[0]
const domain = emailArray[1]
// const usernameLen = username.length

const slicedUsername = username.slice(0, 3)

const hiddenEmail = slicedUsername + "****@" + domain

console.log(hiddenEmail);


const number = 7
let flag = 0
for (let i = 2; i <= number / 2; i++) {
    if (number % i == 0) {
        flag = 1
    }
}

if(flag == 0){
    console.log("Prime");
}else{
    console.log("Not Prime");
}

const arr = [1, 2, 3, 4, 8, 2, 5, 4, 10, 9, 100];
let maxIndex = 0
for (let i = 0; i < arr.length; i++){
    if (arr[i] > arr[maxIndex]) {
        maxIndex = i
    }
}

console.log(maxIndex);
