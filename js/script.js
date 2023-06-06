"use strict";

/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате:
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

// const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

// const personalMovieDB = {
//   count: numberOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false,
// };

// const answers = []

// personalMovieDB.movies = [prompt('Один из последних просмотренных фильмов?', ''), prompt('На сколько оцените его?', '')];
// personalMovieDB.movies = [prompt('Один из последних просмотренных фильмов?', ''), prompt('На сколько оцените его?', '')];


// if (4 === 9){
//   console.log('fine');
// } else {
//   console.log('Error');
// }

// const num = 50;

// if(num < 49){
//   console.log('Error');
// } else if( num > 100) {
//   console.log('Too much');
// } else {
//   console.log('ok');
// }


// (num === 50) ? console.log('ok') : console.log('Error');

/////////////////////
//Switch


// const num = 50;

// switch(num){
//   case 49:
//     console.log('That is false');
//     break;
//   case 100:
//     console.log('That is not true');
//     break;
//   case 50:
//     console.log('That is true');
//     break;
//   default:
//     console.log('Not now');
//     break;
// }


// console.log(NaN || 2 || undefined); // 2
// console.log(NaN && 2 && undefined); // NaN
// console.log(1 && 2 && 3); // 3
// console.log(!1 && 2 && !3); // false
// console.log(25 || null || !3); // 25
// console.log(NaN || null || !3 || undefined || 5); // 5
// console.log(NaN || null && !3 && undefined || 5); // 5
// console.log(5 === 5 && 3 > 1 || 5); // true

// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;

// if (hamburger === 3 && cola || fries === 3 && nuggets){
//   console.log('Done');
// }

////////////////////
// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;

// if (hamburger || cola || fries === 3 || nuggets){
//   console.log('Done 2');
// }


//////////////////////////
// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;

// if (hamburger && cola || fries === 3 && nuggets){
//   console.log('Done 3');
// }






// Логические операторы

// const hamburger = 5;
// const fries = null;

// if (hamburger && fries) {
//   console.log('I dont want eat');
// }



// Всегда false - это 0, '', null, undefind, NaN
// Операто && возвращает первое ложное значение,
// на котором он остановился. А если все аргументы
// правдивые, то он вернет последний на
// котором он сработал

// const hamburger = 3;
// const fries = 1;
// const cola = 0;
// console.log(hamburger === 3 && cola && fries );

// console.log(1 && 0); // 0
// console.log(1 && 5); // 5
// console.log(null && 5); // null
// console.log(0 && 'dejbjkbF'); // 0

// if (hamburger === 3 && cola === 1 && fries ) {
//   console.log('All Done');
// } else{
//   console.log('We go to another place');
// }


// Оператор || возвращает первое правдивое значение,
// на котором он остановился. А если все аргументы
// ложные, то он вернет последнее ложное значение

// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;

// if (hamburger === 3 && cola === 2 || fries === 3 && nuggets ) {
//   console.log('Fine');
// } else{
//   console.log('We go to another place');
// }

// console.log(hamburger === 3 && cola === 2 || fries === 3 && nuggets );
// let johnReport, alexReport, samReport, mariaRepot = 'done';

// console.log(johnReport || alexReport || samReport || mariaRepot);

//lesson 22. Циклы
let num = 50;

// while (num <= 55) {
//   console.log(num);
//   num++;
// }

// do {
//   console.log(num);
//   num++;
// }
// while (num <= 55);

for (let i = 1; i < 10; i++) {
  if (i === 6) {
    // break;
    continue;
  }

  console.log(i);

}







