/**
 * A function that is passed as an argument to another function.
 * Also referred to as 'callback'.
 * Higher Order Functions really shine with arrow function syntax.
 * "Filter" is also called "Higher-Order Functions".
 * "Map" is also called a "Higher Order Function".
 * "Reduce" is also called a Higher Order Function
 */



let animals = [{
        name: 'Waffles',
        type: 'dog',
        age: 12
    },
    {
        name: 'Fluffy',
        type: 'cat',
        age: 14
    },
    {
        name: 'Spelunky',
        type: 'dog',
        age: 4
    },
    {
        name: 'Hank',
        type: 'dog',
        age: 11
    },
];


let oldDogs = animals.filter((x) => x.age > 10 && x.type === 'dog');

let oldDogNames = animals.filter((x) => x.age > 10 && x.type === 'dog').map((x) => x.name);


let totalDogYears = animals.filter((x) => x.type === 'dog').map((x) => x.age).reduce((prev, cur) => {
    prev + cur
}, 0);

console.log(totalDogYears);
console.log(oldDogs);
console.log(oldDogNames);