'use strict';

class User {
  constructor(name, age) {
    this.name = name;
    this._age = age;
  }

  #surname = 'Petrichenko';

   say = () => {
     console.log(`Имя пользователя: ${this.name}${this.surname}, возраст ${this._age}`);
   }

   get surname() {
    return this.#surname;
   }

   set surname(surname) {
     this.#surname = surname;
   }

   get age() {
    return this._age;
   }

   set age(age) {
    if (typeof age === 'number' && age > 0 && age < 110) {
      this._age = age;
    } else {
      console.log('Недопустимое значение!');
    }
   }
}

const ivan = new User('Ivan', 27);
ivan.surname = 'Gorshkov';
console.log(ivan.surname);
ivan.say();