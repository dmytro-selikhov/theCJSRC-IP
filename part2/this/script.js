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


// const btn = document.querySelector('button');

// // btn.addEventListener('click', function () {
// //   this.style.backgroundColor = 'pink';
// // });

// btn.addEventListener('click', (e) => {
//   e.target.style.backgroundColor = 'pink';
// });

// const obj = {
//   num: 5,
//   sayNumber: function () {
//     const say = () => {
//       console.log(this.num);
//     };

//     say();
//   }
// };

// obj.sayNumber();

// const double = (a, b) => a * 2;
// console.log(double(4));



//////////////////////////
// lesson 77. Классы (ES6)

// class Rectangle {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }

//   calcArea() {
//     return this.height * this.width;
//   }
// }

// class ColoredRectangleWithText extends Rectangle {
//   constructor(height, width, text, bgColor) {
//     super(height, width);
//     this.text = text;
//     this.bgColor = bgColor;
//   }

//   showMyProps() {
//     console.log(`Text: ${this.text}, color: ${this.bgColor}`);
//   }
// }

// const div = new ColoredRectangleWithText(25, 10, 'Hello World', 'red');
// console.log(div);
// console.log(div.calcArea());

// const square = new Rectangle(10, 10);
// const long = new Rectangle(20, 100);

// console.log(square.calcArea());
// console.log(long.calcArea());







// lesson 80. Rest оператор и параметры по умолчанию (ES6)

// const log = function(a, b, ...rest){
//   console.log(a, b, rest);
// }

// log('basic', 'rest', 'operator', 'usage');


// function calcOrDouble(number, basis){
//   basis = basis || 2;
//   console.log(number * basis);
// }

// calcOrDouble(3, 5);
// calcOrDouble(3);


// lesson 82. JSON формат передачи данных, глубокое клонирование объектов

const person = {
  name: 'Alex',
  tel: '+4777777777',
  parents: {
    mom: 'Olga',
    dad: 'Mike'
  }
};

const clone = JSON.parse(JSON.stringify(person));

console.log(person);

clone.parents.mom = 'Ann';
console.log(clone);





