const add = function(num1, num2) {

  let result = num1 + num2;

  return result;

};

const subtract = function(num1, num2) {

  let result = num1 - num2;

  return result;

};

const sum = function(arr) {

  let runningSum = 0;
  let i = 0;

  for (i = 0; i < arr.length; i++) {
    let currentNum = arr[i];
    runningSum += currentNum;
  }

  return runningSum;

};

const multiply = function(arr) {

  let product = 1;
  let i = 0;

  for (i = 0; i < arr.length; i++) {
    let currentNum = arr[i];
    product *= currentNum;
  }

  return product;

};

const power = function(number, power) {

  let i = 0;
  let product = 1;

  for (i = 0; i < power; i++) {
    product *= number;
  }

  return product;

};

const factorial = function(number) {

  if (number === 0) {
    return 1;
  }

  if (number === 1) {
    return 1;
  }

  let i = 0;
  let product = 1;

  for (i = 1; i <= number; i++) {
    product *= i;
  }

  return product;

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
