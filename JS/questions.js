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
