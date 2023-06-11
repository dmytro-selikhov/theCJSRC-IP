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
// let num = 50;

// while (num <= 55) {
//   console.log(num);
//   num++;
// }

// do {
//   console.log(num);
//   num++;
// }
// while (num <= 55);

// for (let i = 1; i < 10; i++) {
//   if (i === 6) {
//     // break;
//     continue;
//   }

//   console.log(i);

// }


//////////////////////////////////////
// Цикл в цикле.
// for (let i = 0; i < 3; i++){
//   console.log(i);
//   for (let j = 0; j < 3; j++){
//     console.log(j);
//   }
// }

/////////////////////////////////////
// Рисуем звездочки
// *
// **
// ***
// ****
// *****
// ******

// let result = '';
// const lenght = 7;

// for (let i = 1; i < lenght; i++) {
//   for(let j = 0; j < i; j++){
//     result += '*';
//   }

//   result += '\n';
// }

// console.log(result);


//////////////////////////////////////
// Цикл в цикле. Метки
// first: for (let i = 0; i < 3; i++){
//   console.log(`First level(continue): ${i}`);
//   for (let j = 0; j < 3; j++){
//     console.log(`Second level(continue): ${j}`);
//        for (let k = 0; k < 7; k++){
//         if (k === 5) continue first;
//         console.log(`Third level(continue): ${k}`);
//       }
//   }
// }


// first: for (let i = 0; i < 3; i++){
//   console.log(`First level(break): ${i}`);
//   for (let j = 0; j < 3; j++){
//     console.log(`Second level(break): ${j}`);
//        for (let k = 0; k < 7; k++){
//         if (k === 5) break first;
//         console.log(`Third level(break): ${k}`);
//       }
//   }
// }

//////////////////////////////////////
// Практические задачи

// Coding Exercise 3: Задания на использование циклов и условий
// // Место для первой задачи
// function firstTask() {
//     // Пишем решение вот тут
//     for(let i = 5; i <= 10; i++){
//       console.log(i);
//     }
    
// }

// // Место для второй задачи
// function secondTask() {
//     // Пишем решение вот тут
//     for(let i = 20; i>=10; i--){
//       if(i === 13) break;
//       console.log(i);
//     }
// }

// // Место для третьей задачи
// function thirdTask() {
//     // Пишем решение вот тут
//     for(let i = 2; i <= 10; i++){
//       if(i%2 === 0){
//         console.log(i);
//       }
//     }
    
// }

// // Место для четвертой задачи

// // Цикл, который нужно переписать:

// // for (let i = 2; i <= 16; i++) {
// //     if (i % 2 === 0) {
// //         continue;
// //     } else {
// //         console.log(i);
// //     }
// // }


// function fourthTask() {
//     // Пишем решение вот тут
//   let i = 2;
//     while (i <= 16) {
//        if (i % 2 === 0) {
//         i++;
//         continue;
//         } else {
//             console.log(i);
//         }
//       i++;
//     }   
// }

// // Место для пятой задачи

// function fifthTask() {
//     const arrayOfNumbers = [];

//     // Пишем решение вот тут
//     for (let i = 5; i < 11; i++ ){
//       arrayOfNumbers.push(i);
//     }
//     // Не трогаем
//     return arrayOfNumbers;
// }
// fifthTask()

////////////////////////////////////////////////
// Coding Exercise 4: (*) Продвинутые задания на использование циклов и условий
// Место для первой задачи
// function firstTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const arr = [3, 5, 8, 16, 20, 23, 50];
//     const result = [];


//     // Пишем решение вот тут
//      for (let i = 0; i <arr.length; i++ ){
//       result.push(arr[i]);
//     }

//     // Не трогаем
//     return result;
// }
// // Место для второй задачи
// function secondTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const data = [5, 10, 'Shopping', 20, 'Homework'];

//     // Пишем решение вот тут
//     for (let i = 0; i < data.length; i++){
//       if(typeof(data[i]) === 'number'){
//         data[i] = data[i] * 2;
//       }
//       if (typeof(data[i]) === 'string'){
//         data[i] = data[i] + ' - done';
//       }
//     }
//     // Не трогаем
//     return data;
// }

// // Место для третьей задачи
// function thirdTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const data = [5, 10, 'Shopping', 20, 'Homework'];
//     const result = [];

//     // Пишем решение вот тут
//     for (let i = data.length -1; i >= 0; i--){
//       result.push(data[i]);
//     }

//     // Не трогаем
//     return result;
// }

/////////////////////////////////////////
// Coding Exercise 5: (**) Задача на формирование фигуры

// const lines = 5;
// let result = '';
// Проверяется именно переменная result, формируйте строку в ней

// Рисуем звездочки
// *
// **
// ***
// ****
// *****
// ******

// let result = '';
// const lenght = 7;

// for (let i = 1; i < lenght; i++) {
//   for(let j = 0; j < i; j++){
//     result += '*';
//   }

//   result += '\n';
// }

// console.log(result);


//      *
//     ***
//    *****
//   *******
//  *********
// ***********
//Solution

// const lines = 5;
// let result = '';

// for (let i = 0; i <= lines; i++) {
//     for (let j = 0; j < lines - i; j++) {
//         result += " ";
//     }
//     for (let j = 0; j < 2 * i + 1; j++) {
//         result += "*";
//     }
//     result += "\n";
// }

// console.log(result)

///////////////////////////////////////////////////
// 24. Практика, ч2. Применяем условия и циклы

/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/


// Код возьмите из предыдущего домашнего задания

// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// const personalMovieDB = {
//   count: numberOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false,
// };

// for (let i = 0; i < 2; i++){

//   const a = prompt('Один из последних просмотренных фильмов?', ''),
//         b = prompt('На сколько оцените его?', '');

//   if (a != null && b != null && a != '' && b != '' && a.length < 50 ){
//     personalMovieDB.movies[a] = b; 
//     console.log('done');
//   } else {
//     console.log('error');
//     // При не соответсвии по одному из условий мы:
//     // производим уменьшение количества 
//     // итераций на 1 и возвращаем цикл на шаг назад
//     i--;
//   }

// }

// if (personalMovieDB.count < 10) {
//   console.log("Просмотрено довольно мало фильмов");
// } else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
//   console.log("Вы классический зритель");
// } else if (personalMovieDB.count >= 30){
//   console.log("Вы киноман");
// } else{
//   console.log("Произошла ошибка");
// }


// console.log(personalMovieDB);


////////////////////////////////
// Два дополнительных варианта цикла

// First 
// let x = 0;
// while (x < 1){
//     const   a = prompt('Последний фильм?', ''),
//             b = +prompt('Ваша оценка?', '');
//     if(a != null && b != null && a != '' && b != '' && a.length < 50){
//     // Если а не "отмена" и b не "отмена" и a не пустая строка и b не пустая строка и а < 50 символов то
//     personalMovieDB.movies[a] = b;
//     console.log("Done!");
//     } else {
//         console.log("Error");
//         x--;
//     }
//     x++;
// }
// // Second
// let x = 0;
// while (x < 1){
//     const   a = prompt('Последний фильм?', ''),
//             b = +prompt('Ваша оценка?', '');
//     (a != null && b != null && a != '' && b != '' && a.length < 50) ? personalMovieDB.movies[a] = b : x--, console.log("Error");
//     x++;
// }
/////////////////////////////////////////////////////////
// lesson 25. Функции, стрелочные ф-ции (ES6)
//
// let num = 20;

// function showFirstMessage(text){
//   console.log(text);
//   num = 10;
// };

// showFirstMessage('Hello, World!');
// console.log(num);


// function calc(a, b) {
//   return (a + b);
// }

// console.log(calc(3, 4));
// console.log(calc(5, 7));
// console.log(calc(9, 11));

// function ret(){
//   let num = 50;

//   // 

//   return num;
// }

// const anotherNum = ret();
// console.log(anotherNum);


// ///////////////////////
// // FUNCTION DECLARATION
// // Создается до начала выполнения скрипта,
// // можно вызвать перед объявлением

// function fooDec(text){
//   console.log(text);
// };

// fooDec('Function Declaration');


// ///////////////////////
// // FUNCTION EXPRESSION
// // Создается только тогда, когда доходит
// // поток кода, можно вызвать только после объявления.

// let fooExp = function (text){
//   console.log(text);
// };

// fooExp('Function Expression');

// ///////////////////////
// // ARROW FUNCTION
// // Не имеет своего контекста (this)

// let arrowFoo = (text) =>  console.log(text);

// arrowFoo('Arrow Function');


// //////////////////////
// const calc = (a, b) => a + b;
// calc(4, 5);


///////////////////////////////////////
// 26. (д) Еще раз про аргументы функций
// DRY - Don't Repeat Yourself

// const usdCurr = 28;
// const eurCurr = 32;

// function convert (amount, curr) {
//   console.log(curr * amount);
// };

// convert(500, usdCurr);
// convert(500, eurCurr);

///////////////////////////////////////
// 27. (д) Про важность return


// const usdCurr = 28;
// const discount = 0.9;

// function convert (amount, curr) {
//   return curr * amount;
// };

// function promotion(result){
//   console.log(result * discount);
// }
// const res = convert(500, usdCurr);

// promotion(res);


// function test(){
//   for (let i = 0; i < 5; i++){
//     console.log(i);
//     if(i === 3) return
//   }
//   console.log('Done');
// }

// test();

// function doNothing(){}
// console.log(doNothing() === undefined);

////////////////////////////////////////
// Coding Exercise 6: Задание на работу с функциями

// Место для первой задачи
function sayHello(name) {
  return `Привет, ${name}!`
}


// Место для второй задачи
function returnNeighboringNumbers(num) {
  let arr = [];
  arr.push(num -1);
  arr.push(num);
  arr.push(num + 1);
  return arr;

}

// Место для третьей задачи
// function getMathResult(baseNum, repeatTimes) {
//   let result = 1;
//   let str = ''; 

//   if (typeof repeatTimes != 'number' || repeatTimes === 0 || repeatTimes < 0){
//       console.log(baseNum);
//     return baseNum;
//   } else {
//       for (let i = 0; i < repeatTimes; i++){
//         // console.log(result, baseNum);
//         result *= baseNum;

//         str += `${result}---`
//       }
//     let fn = str.substring(0, str.length -3);
//     console.log(fn);
//     return fn;
//   }
// }

// getMathResult(10, 5);

// Second Solution
// function getMathResult(baseNum, repeatTimes) {
//   let result = baseNum; 

//   if (typeof repeatTimes != 'number' || repeatTimes === 0 || repeatTimes < 0){
//       console.log(baseNum);
//     return baseNum;
//   } else {
//       for (let i = 2; i <= repeatTimes; i++){
//         // console.log(result, baseNum);
//         result += `---${baseNum * i}`;
//       }
//       console.log(result);
//     return result;
//   }
// }

// getMathResult(10, 5);


////////////////////////////////
// Mentor Solution
// function sayHello(name) {
//     return `Привет, ${name}!`;
// }

// sayHello('Alex');

// function returnNeighboringNumbers(num) {
//     return [num - 1, num, num + 1];
// }

// returnNeighboringNumbers(5);

// function getMathResult(num, times) {
//     if (typeof(times) !== 'number' || times <= 0) {
//         return num;
//     }

//     let str = '';

//     for (let i = 1; i <= times; i++) {
//         if (i === times) {
//             str += `${num * i}`;
//             // Тут без черточек в конце
//         } else {
//             str += `${num * i}---`;
//             // Это тоже самое, что и
//             // str = str + num * i + "---"
//         }
//     }

//     return str;
// }

// getMathResult(10, 5);

////////////////////////////////////////
// 28. Методы и свойства строк и чисел














