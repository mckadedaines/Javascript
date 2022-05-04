// Function Array
const nums = [1,2,3,4,5];

function double(number) {
    console.log(number * 2);
    return number * 2;
}

nums.forEach(double);

// Arrow Function
nums.forEach((number) => number * 2);