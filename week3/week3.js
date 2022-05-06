// // Function Array
// const nums = [1,2,3,4,5];

// function double(number) {
//     console.log(number * 2);
//     return number * 2;
// }

// nums.forEach(double);

// // Arrow Function
// nums.forEach((number) => number * 2);

const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];

document.querySelector("#array").textContent = numbers;

document.querySelector("#odds").textContent = numbers.filter(numbers => numbers % 2);

document.querySelector("#evens").textContent = numbers.filter(numbers => numbers % 2 === 0);

document.querySelector("#sumOfArray").textContent = numbers.reduce((sum, number) => sum + number, 0);

document.querySelector("#multiply").textContent = numbers.map(number => number * 2);

document.querySelector('#sumOfMultiplied').textContent = numbers.map(number => number * 2).reduce((sum, number) => sum + number, 0);