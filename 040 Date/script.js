'use strict';

const now = new Date('2020-09-17');
// new Date.parse('2020-09-17');

console.log(now.getTime());

console.log(now.setHours(40));
console.log(now);

// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate());
// console.log(now.getHours());
// console.log(now.getUTCHours());

// console.log(now.getTimezoneOffset());

let start = new Date();

for(let i = 0; i < 100000; i++) {
  let some = i ** 3;
}

let end = new Date();

alert(`Цикл отрабготал за ${end - start} миллисекунд`);