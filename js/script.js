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
// function sayHello(name) {
//   return `Привет, ${name}!`
// }


// // Место для второй задачи
// function returnNeighboringNumbers(num) {
//   let arr = [];
//   arr.push(num -1);
//   arr.push(num);
//   arr.push(num + 1);
//   return arr;

// }

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
// Строки

// const str = 'test';

// console.log(str.length);
// // console.log(str.toUpperCase());
// // console.log(str.toLowerCase());
// const fruit = 'Some fruit';
// console.log(fruit.indexOf('fruit'));

// const logg = 'Hello world!';
// console.log(logg.slice(6, 11));

// // const bigString = 'Большая строка для тестирования!';
// // console.log(bigString.slice(8));
// // console.log(bigString.slice(-13, -1));

// console.log(logg.substring(6, 11));

// // Вырезает определенное количество символов с определенного
// console.log(logg.substr(6, 5));

/////////////////////////////////////
// Числа
// const num = 12.2;
// console.log(Math.round(num));

// const test = '12.2px';
// console.log(parseInt(test));
// console.log(parseFloat(test));


/////////////////////////////////////////
// 29. Практика , ч3. Используем функции
/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

// 'use strict';

// Код возьмите из предыдущего домашнего задания


//////////////////////////////////////////////////
// Coding Exercise 7: (*) Продвинутые задания на использование функций

// // Место для первой задачи
// function calculateVolumeAndArea(side) {
//   if( typeof(side) != 'number' || side < 0 || !Number.isInteger(side)  ) {
//     return `При вычислении произошла ошибка`;
//   } else {
//        const cubeArea = 6 * (side * side);
//        const cubeVolume = side * side * side;
//        return `Объем куба: ${cubeVolume}, площадь всей поверхности: ${cubeArea}`;
//     }   
// }
// calculateVolumeAndArea(15); 

// // Место для второй задачи
// function getCoupeNumber(seat) {

//   if( typeof(seat) != 'number' || seat < 0 || !Number.isInteger(seat)  ) {
//       return `Ошибка. Проверьте правильность введенного номера места`;
//     } else if (seat === 0 || seat > 36) {
//        return `Таких мест в вагоне не существует`;
//     } else if (seat >= 1 && seat <= 4){
//       return 1;
//     } else if (seat >= 5 && seat <= 8){
//       return 2;
//     } else if (seat >= 9 && seat <= 12){
//       return 3;
//     } else if (seat >= 13 && seat <= 16){
//       return 4;
//     } else if (seat >= 17 && seat <= 20){
//       return 5;
//     } else if (seat >= 21 && seat <= 24){
//       return 6;
//     } else if (seat >= 25 && seat <= 28){
//       return 7;
//     } else if (seat >= 29 && seat <= 32){
//       return 8;
//     } else if (seat >= 33 && seat <= 36){
//       return 9;
//     }
// }

// console.log(getCoupeNumber());

//Mentors Solution
// function calculateVolumeAndArea(length) {
//     if (typeof (length) !== 'number' || length < 0 || !Number.isInteger(length)) {
//         return "При вычислении произошла ошибка";
//     }

//     let volume = 0,
//         area = 0;

//     volume = length * length * length;
//     // length ** 3 - это тоже самое, что и выше или варианты через цикл.
//     // ** - это оператор степени, напоминаю. Но онлайн редактор его не принимает =/
//     area = 6 * (length * length);

//     return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;
// }

// calculateVolumeAndArea(5);

// function getCoupeNumber(seatNumber) {
//     if (typeof (seatNumber) !== 'number' || seatNumber < 0 || !Number.isInteger(seatNumber)) {
//         return "Ошибка. Проверьте правильность введенного номера места";
//     }

//     if (seatNumber === 0 || seatNumber > 36) {
//         return "Таких мест в вагоне не существует";
//     }

//     return Math.ceil(seatNumber / 4);
//     // тут очень много вариантов решения, но выбрал один из элегантных :)
// }

// getCoupeNumber(33);

////////////////////////////////////////////////////////////
// Coding Exercise 8: (*) Продвинутые задания на использование функций


// Место для первой задачи
// function getTimeFromMinutes(minutesIncome) {
//   if(typeof minutesIncome !== 'number' || minutesIncome < 0 || !Number.isInteger(minutesIncome)){
//     return 'Ошибка, проверьте данные';
//   } 
//    const hours =  Math.floor(minutesIncome / 60);
//    const minutes = minutesIncome % 60;

//    let hoursStr = '';

//    switch(hours){
//       case 0:
//             hoursStr = 'часов';
//             break;
//       case 1:
//             hoursStr = 'час';
//             break;
//       case 2:
//       case 3:
//       case 4:
//             hoursStr = 'часа';
//             break;
//       default:
//             hoursStr = 'часов';
//    }

//    return `Это ${hours} ${hoursStr} и ${minutes} минут`

// }

// console.log(getTimeFromMinutes(450));;

// // Место для второй задачи
// function findMaxNumber(num1, num2, num3, num4) {
//   if (typeof num1 !== 'number' || typeof num2 !== 'number' || typeof num3 !== 'number' || typeof num4 !== 'number'){
//     return 0;
//   }
//   if(num1 === null || num2 === null || num3 === null || num4 === null){
//     return 0;
//   }
//   let bigNum = 0;
//   const arr = [num1, num2, num3, num4];

//   for( let i = 0; i < arr.length; i++){
//     if (bigNum < arr[i]){
//       bigNum = arr[i];
//     } else {
//       bigNum = bigNum;
//     }
//   }
//   return bigNum;
// }

// console.log(findMaxNumber(36, 5, 10, 18));



/////////////////////////////////////////
// Mentors Solution

// function getTimeFromMinutes(minutesTotal) {
//     if (typeof(minutesTotal) !== 'number' || minutesTotal < 0 || !Number.isInteger(minutesTotal)) {
//         return "Ошибка, проверьте данные";
//     }

//     const hours = Math.floor(minutesTotal / 60);
//     const minutes = minutesTotal % 60;

//     let hoursStr = '';

//     switch (hours) {
//         case 0: 
//             hoursStr = 'часов';
//             break;
//         case 1:
//             hoursStr = 'час';
//             break;
//         case 2:
//         case 3:
//         case 4:
//             hoursStr = 'часа';
//             break;
//         default:
//             hoursStr = 'часов';
//     }

//     return `Это ${hours} ${hoursStr} и ${minutes} минут`;
// }

// getTimeFromMinutes(180)

// function findMaxNumber(a, b ,c, d) {
//     // Самое простое - это использовать Math.max :)
//     // А оптимизировать такую проверку мы научимся совсем скоро
//     if (typeof(a) !== 'number' ||
//         typeof(b) !== 'number' ||
//         typeof(c) !== 'number' ||
//         typeof(d) !== 'number') {
//         return 0;
//     } else {
//         return Math.max(a, b ,c, d);
//     }
// }

// findMaxNumber(1, 5, 6.6, 10.5);
// findMaxNumber(1, 5, '6', '10');


///////////////////////////////////
// Coding Exercise 9: (**) Задача с собеседований на числа Фибоначчи
// function fib(num) {
//     if (typeof(num) !== 'number' || num <= 0 || !Number.isInteger(num)) {
//         return "";
//     }

//     let result = '';
//     let first = 0;
//     let second = 1;

//     for (let i = 0; i < num; i++) {
//         if (i + 1 === num) {
//             result += `${first}`;
//             // Без пробела в конце
//         } else {
//             result += `${first} `;
//         }

//         let third = first + second;
//         first = second;
//         second = third;
//     }

//     return result;
// }

// console.log(fib('7'));

////////////////////////////////////////
// lesson 30. (д) Метод trim()


























