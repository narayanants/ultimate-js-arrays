// Use of Spread Operator

let arr1 = [1, 2, 3];
let arr2 = [...arr1];
console.log(arr2);
arr2.push(4);
arr2.unshift(5);
console.log(arr2);

// Using Numbers
let numbers = [1, 2, 3, 4, 5, 6, 7];
Math.min(...numbers);
console.log(numbers);