import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./style.css"

ReactDOM.render(<App />, document.getElementById("root"));

var numbers = [3, 56, 2, 48, 5];

////Map -Create a new array by doing something with each item in an array.
// const newNumbers = numbers.map(function (x) {
//   return x * 2;
// });

const newNumber = numbers.map((num) => num * 2)
console.log(newNumber)

//////Filter - Create a new array by keeping the items that return true.
// const newNumbers = numbers.filter(function(num) {
//   return num < 10;
// });

const newNumber2 = numbers.filter((num) => num % 2 === 0)
console.log(newNumber2)

//Reduce - Accumulate a value by doing something to each item in an array.
// var newNumber = numbers.reduce(function (accumulator, currentNumber) {
//     return accumulator + currentNumber;
// })

const newNumber3 = numbers.reduce((accumulator, num) => {
    return accumulator += num  
},0)
console.log(newNumber3)

////Find - find the first item that matches from an array.
// const newNumber = numbers.find(function (num) {
//   return num > 10;
// })

const newNumber4 = numbers.find((num) => num > 50)
console.log(newNumber4)

////FindIndex - find the index of the first item that matches.
// const newNumber = numbers.findIndex(function (num) {
//   return num > 10;
// })

const newNumber5 = numbers.findIndex((num) => num > 2)
console.log(newNumber5)