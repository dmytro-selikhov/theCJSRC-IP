'use strict';

const box = document.querySelector('.box');

let observer = new MutationObserver(mutationRecors => {
  console.log(mutationRecors);
});

observer.observe(box, {
  childList: true,
})

observer.disconnect();



// 65. Скрипты и время их выполнения. setTimeout и setInterval

// const timerId = setTimeout(function () {
//   console.log('Hello!');
// }, 2000);


// lesson 74. (д) MutationObserver, ResizeObserver и contenteditable

// lesson 75. Функции-конструкторы

// function User(name, id) {
//   this.name = name;
//   this.id = id;
//   this.human = true;
//   this.hello = function () {
//     console.log(`Hello ${this.name}`);
//   }
// }

// User.prototype.exit = function (name) {
//   console.log(`Пользователь ${this.name} ушел.`);
// }

// const ivan = new User('Ivan', 28);
// const alex = new User('Alex', 20);

// ivan.exit();
// alex.exit();

// ivan.hello();
// alex.hello();

// console.log(ivan);
// console.log(alex);


