'use strict';

// 1)
// function showThis(a, b) {
//   console.log(this);

//   function sum() {
//     console.log(this);
//     return a + b;
//   }

//   console.log(sum());
// }
// showThis(4, 5);


// 2)
// const obj = {
//   a: 20,
//   b: 15,
//   sum: function () {
//     console.log(this);
//     function shout() {
//       console.log(this);
//     }
//     shout();
//   }
// };
// obj.sum();

// 3)
// function User(name, id) {
//   this.name = name;
//   this.id = id;
//   this.human = true;
//   this.hello = function () {
//     console.log("Hello! " + this.name);
//   };
// }

// let ivan = new User('Ivan', 23);

// 4)
// function sayName(surname) {
//   console.log(this);
//   console.log(this.name + surname);
// };

// const user = {
//   name: 'John',
// }

// sayName.call(user, 'Smith');
// sayName.apply(user, ['Smith']);

// // bind создает новую функцию
// function count(num) {
//   return this * num;
// }

// const double = count.bind(2);
// console.log(double(3));
// console.log(double(13));

// 1) Обычная функция: this = window, но если use strict - undefined;
// 2) Контекст у методов объекта - сам объект
// 3) This в конструкторах и классах - это новый экземпляр объекта
// 4) Ручная привязка this: call, apply и bind


const btn = document.querySelector('button');

// btn.addEventListener('click', function () {
//   this.style.backgroundColor = 'pink';
// });

btn.addEventListener('click', (e) => {
  e.target.style.backgroundColor = 'pink';
});

const obj = {
  num: 5,
  sayNumber: function () {
    const say = () => {
      console.log(this.num);
    };

    say();
  }
};

obj.sayNumber();

const double = (a, b) => a * 2;
console.log(double(4));