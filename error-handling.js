// 1.
// function sum(array) {
//   if(typeof array !== 'array') {
//     throw new Error('This is not an array!')
//   } else {
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//       sum += array[i];
//     }
//     return sum;
//   }
// }

// let res = sum(null);
// console.log(res);

// try {
//   console.log(res)
// } catch(error) {
//   console.error(error.name + ':' + error.message)
// }

// 2.
// tests
// sayName("Alex");
// sayName(1);
// // Your code here
// function sayName(name) {
//   if(typeof name !== 'string') {
//     throw new Error('This is not a valid name, it is a number!')
//   } else {
//     return name
//   }
// }

// try {
//   sayName("Alex");
//   sayName(1);
// } catch(error) {
//   console.error(error.name + ':' + error.message)
// }

// 3.
// function greet(greeting) {
//   if (!greeting) {
//     throw new Error("There was no greeting given.");
//   }

//   console.log(greeting);
// }

// greet()
