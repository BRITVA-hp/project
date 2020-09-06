'use strict';

// function first() {
//   setTimeout(function() {
//     console.log(1);
//   }, 500);
// }

// function second() {
//   console.log(2);
// }

// first();
// second();

// function learnJS(lang, callback) {
//   console.log(`Я учу: ${lang}`);
//   callback();
// }

// function done() {
//   console.log('Я прошел этот урок!');
// }

// learnJS('JavaScript', done);

// const options = {
//   name: 'test',
//   width: 1024,
//   height: 1024,
//   colors: {
//     border: 'black',
//     bg: 'red'
//   },
//   makeTest: function() {
//     console.log("Test");
//   }
// };

// options.makeTest();

// const {border, bg} = options.colors;
// console.log(border);

// console.log(Object.keys(options).length);



// console.log(options.name);

// delete options.name;
// console.log(options);

// let counter = 0;

// for (let key in options) {
//   if (typeof(options[key]) === 'object') {
//     for (let i in options[key]) {
//       console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//     }
//   } else {
//     console.log(`Свойство ${key} имеет значение ${options[key]}`);
//     counter++;
//   }
// }

// console.log(counter);

// const arr = [10, 2, 13, 26, 8];
// arr.sort();
// console.log(arr);

// function compareNum(a, b) {
//   return a - b;
// }

// // arr[99] = 0;
// // console.log(arr.length);
// // console.log(arr);

// arr.forEach(function(item, i, arr) {
//   console.log(`${i}: ${item} внутри массива ${arr}`);
// });

// arr.pop();
// arr.push(10);

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// for (let value of arr) {
//   console.log(value);
// }

// const str = prompt("", "");
// const products = str.split(", ");
// products.sort();
// console.log(products.join('; '));

// let a = 5,
//     b = a;

// b = b + 5;

// console.log(b, a);

// const obj = {
//   a: 5,
//   b: 1
// };

// const copy = obj; // Ссылка

// copy.a = 10;

// console.log(copy);
// console.log(obj);

// function copy(mainObj) {
//   let objCopy = {};

//   let key;
//   for (key in mainObj) {
//     objCopy[key] = mainObj[key];
//   }

//   return objCopy;
// }

// const numbers = {
//   a: 2,
//   b: 5,
//   c: {
//     x: 7,
//     y: 4
//   }
// };

// const newNumbers = copy(numbers);

// newNumbers.a = 10;
// newNumbers.c.x = 10;


// // console.log(newNumbers);
// // console.log(numbers);

// const add = {
//   d: 17,
//   e: 20
// };

// const clone = Object.assign({}, add);
// clone.d = 20;

// console.log(add);
// console.log(clone);

// const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray.slice();

// newArray[2] = 'hello';
// console.log(newArray);
// console.log(oldArray);

// const video = ['youtube', 'vimeo', 'rutube'],
//       blogs = ['wordpress', 'livejournal', 'blogger'],
//       internet = [...video, ...blogs, 'vk', 'facebook'];

// console.log(internet);

// function log(a, b, c) {
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }

// const num = [2, 5, 7];

// log(...num);

// const array = ['a', 'b'];

// const newAarray = [...array];

// const q = {
//   one: 1,
//   two: 2
// };

// const newObj = {...q};

// let str = "some";
// let strObj = new String(str);

// console.log(typeof(str));
// console.log(typeof(strObj));

// console.dir([1,2,3]);

// const soldier = {
//   health: 400,
//   armor: 100,
//   sayHello: function() {
//     console.log("Hello");
//   }
// };

// const jonh = Object.create(soldier);

// const jonh = {
//   health: 100
// };

// // jonh.__proto__ = soldier;

// Object.setPrototypeOf(jonh, soldier);

// // console.log(jonh.armor);
// jonh.sayHello();

// // To string
// //1
// console.log(String(null));
// console.log(typeof(String(4)));

// //2
// console.log(typeof(5 + ''));

// const num = 5;

// console.log("https://vk.com/catalog/" + num);

// const fontSize = 26 + 'px';

// //To number

// //1
// console.log(typeof(Number('4')));

// //2
// console.log(typeof(+'5'));

// //3
// console.log(typeof(parseInt("15px", 10)));

// //To boolean

// // 0, '', null, undefined, NaN;  - это всё false

// //1
// let switcher = null;

// if (switcher) {
//   console.log('working...');
// }

// switcher = 1;

// if (switcher) {
//   console.log('working...');
// }

// //2
// console.log(typeof(Boolean('4')));

// //3
// console.log(typeof(!!"44wfr"));

console.log("а" > "Б");