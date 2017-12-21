var square = x => x*x;
// var square = (x) => x*x;
/* {
    var result = x*x;
    return result;
} */

console.log(square(9));

var user = {
    name: 'Naveen',
    sayHi: () => {
        console.log(arguments); // does not works as expected
        console.log(`Hi. I'm ${this.name}`) // ES6 arrow function does not support this. 
    },
    sayHiAlt () {
        console.log(arguments);
        console.log(`Hi. I'm ${this.name}`) // Older regular function
    }
};

user.sayHiAlt(1, 2, 3);