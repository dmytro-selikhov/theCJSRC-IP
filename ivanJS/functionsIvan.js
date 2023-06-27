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

// let numberOfFilms;

// function start(){
// 	numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// 	while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
// 		numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
// 	}
// }
// start();

// const personalMovieDB = {
//   count: numberOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false,
// };

// function rememberMyFilms(){
// 	for (let i = 0; i < 2; i++){

// 	  const a = prompt('Один из последних просмотренных фильмов?', '').trim(),
// 	        b = prompt('На сколько оцените его?', '');

// 	  if (a != null && b != null && a != '' && b != '' && a.length < 50 ){
// 	    personalMovieDB.movies[a] = b; 
// 	    console.log('done');
// 	  } else {
// 	    console.log('error');
// 	    // При не соответсвии по одному из условий мы:
// 	    // производим уменьшение количества 
// 	    // итераций на 1 и возвращаем цикл на шаг назад
// 	    i--;
// 	  }
// 	}
// }
// rememberMyFilms();

// function detectPersonalLevel(){

// 	if (personalMovieDB.count < 10) {
// 	  console.log("Просмотрено довольно мало фильмов");
// 	} else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
// 	  console.log("Вы классический зритель");
// 	} else if (personalMovieDB.count >= 30){
// 	  console.log("Вы киноман");
// 	} else{
// 	  console.log("Произошла ошибка");
// 	}	
// }
// detectPersonalLevel();

// function showMyDB(hidden) {
// 	if (!hidden){
// 		console.log(personalMovieDB);
// 	}
// }
// showMyDB(personalMovieDB.privat);

// function writeYourGenres(){
// 	for (let i = 1; i <= 3; i++) {
// 		personalMovieDB.genres.push(prompt(`Ваш любимый жанр под номером ${i}?`, ''));
// 	}
// }
// writeYourGenres();

// console.log(personalMovieDB);

////////////////////////////////////////////
// Coding Exercise 10: Задачи на работу с объектами

// const personalPlanPeter = {
//     name: "Peter",
//     age: "29",
//     skills: {
//         languages: ['ru', 'eng'],
//         programmingLangs: {
//             js: '20%',
//             php: '10%'
//         },
//         exp: '1 month'
//     },
//      showAgeAndLangs: function(plan) {
//         const {age} = plan;
//         const {languages} = plan.skills;
//         let str = `Мне ${age} и я владею языками: `;

//         languages.forEach(function(lang) {
//             str += `${lang.toUpperCase()} `;
//         });

//         return str;
//     }
// };

// function showExperience(plan) {
// 	const str = plan.skills.exp;
// 	console.log(str);

// 	return str;
// 	// return `${plan.skills.exp}`

// };

// showExperience(personalPlanPeter);

// function showProgrammingLangs(plan) {
// 	let str = '';
//     const {programmingLangs} = plan.skills;
//     for (let key in programmingLangs) {
//         str += `Язык ${key} изучен на ${programmingLangs[key]}\n`
//     }

//     return str;

// }
// showProgrammingLangs(personalPlanPeter);

// 1) Напишите функцию showExperience, которая будет принимать в себя объект со всеми данными 
// и возвращать строку с опытом.

// Пример:

// showExperience(personalPlanPeter) => '1 month'

// P.S. желательно использовать деструктуризацию, но не обязательно

// 2) Напишите функцию showProgrammingLangs, которая будет принимать в себя объект со всеми данными и возвращать строку в нужном виде.

// Пример:

// showProgrammingLangs(personalPlanPeter)  =>

// "Язык js изучен на 20% Язык php изучен на 10%"

// Причем функция должна работать вне зависимости от количества языков. Если ни один не указан, то возвращается пустая строка.

// P.S. Для переноса строки используется \n в конце строки.

// 3) Создайте метод showAgeAndLangs внутри объекта personalPlanPeter. При его вызове метод будет принимать в себя объект и возвращать строку в нужном виде.

// Пример:

// personalPlanPeter.showAgeAndLangs(personalPlanPeter)
// => 'Мне 29 и я владею языками: RU ENG'

// Заметьте, что возраст и языки подставляются автоматически из объекта, а языки всегда в верхнем регистре (большими буквами). Если данные в объекте поменяются, то и сообщение тоже изменится.

////////////////////////////////////////////////////////////////////////////////////////
// Coding Exercise 11: Задачи на работу с массивами

// 1) Напишите функцию showFamily, которая будет принимать в себя массив строк 
// и возвращать сообщение в нужном формате.

// showFamily(family)  => 'Семья состоит из: Peter Ann Alex Linda'

// Имена подставляются автоматически из массива. Если массив пустой, то выводится сообщение 'Семья пуста'

// 2) напишите функцию standardizeStrings, которая будет принимать в себя массив строк 
// и будет выводить в консоль эти строки в нижнем регистре.

// Пример:

// standardizeStrings(favoriteCities)  выведет в консоль

// lisbon
// rome
// milan
// dublin
// Это частая задача в реальности, так как от пользователя нам могут прийти ответы 
// в самых разных форматах. В том числе и с разными буквами :) Поэтому нам нужно привести строки 
// в один формат для правильной работы.


// const family = ['Peter', 'Ann', 'Alex', 'Linda'];

// function showFamily(arr) {
//     let str = 'Семья состоит из:';
//     let arrStr = '';

//     if (!arr.length){
//         return 'Семья пуста';
//     } else {

//     arr.forEach((e) => {
//     	arrStr+= ` ${e}`
//     	return arrStr;
//     } )

//     str+= arrStr;
//     console.log(str);
//     return str;
//     }
// }
// showFamily(family);

// const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

// function standardizeStrings(arr) {
//     const lowArr = arr.map((e) =>e.toLowerCase());

//     lowArr.forEach(e => console.log(e));
// }

// standardizeStrings(favoriteCities);

///////////////////////////////////////////
// Coding Exercise 12: Задачи на работу с массивами, часть 2

// 3) Задача с собеседований. Напишите функцию reverse, которая принимает в себя строку
// и возвращает эту строку в обратном порядке.

// Пример:

// const someString = 'This is some strange string';
// reverse(someString) => 'gnirts egnarts emos si sihT'

// Функцию можно применить к любой строке. Если в функцию приходит не строка - вернуть сообщение "Ошибка!"

// Это очень интересная задача, которую можно решить несколькими способами. Её дают для того, 
// чтобы оценить навыки и знания программиста, посмотреть как он думает. Как небольшая подсказка, 
// есть метод, который может вам помочь. И часть дополнительных вариантов решения мы тоже изучим в течении курса.

// Может показать сложной с первого взгляда, но это совсем не так 🙂

// 4) Представьте такую реальную ситуацию. У вас есть банкомат, который выдает деньги из двух разных
//  банков в разных валютах. Один банк основной с базовыми валютами, второй дополнительный с прочими валютами:

// const baseCurrencies = ['USD', 'EUR'];
// const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
// Вам нужно создать главную функцию банкомата availableCurr, которая принимает два аргумента: первый - 
// это массив со всеми доступными валютами из двух банков сразу 
// (сейчас представим, что они не могут повторяться), второй - необязательный аргумент, который указывает 
// ту валюту, которая сейчас закончилась в банкомате. Если массив в первом аргументе пустой - то 
// функция возвращает строку 'Нет доступных валют'. Функция возвращает строку в нужном виде.

// Пример:

// availableCurr(['UAH', 'RUB', 'CNY'], 'CNY')
// Вернет строку:

// Доступные валюты:
// UAH
// RUB
// Заметьте:

// - CNY (юань) исчез из списка валют, значит такая валюта закончилась

// - После валюты: стоит перенос строки \n, и после каждой валюты тоже. 
// Это важно для тестов

// - Данные для первого аргумента должны приходить сразу из двух банков, 
// причем сначала baseCurrencies, потом additionalCurrencies по порядку



const someString = 'This is some strange string';

function reverse(str) {
  let reversedStr = '';

  if (typeof str !== 'string') {
    return "Ошибка!"
  } else {

    for (let i = str.length - 1; i >= 0; i--) {
      reversedStr += str[i];
    }
    console.log(reversedStr);
    return reversedStr;
  }
}
reverse(someString)

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
  let str = '';
  arr.length === 0 ? str = 'Нет доступных валют' : str = 'Доступные валюты:\n';

  arr.forEach(function (curr, i) {
    if (curr !== missingCurr) {
      str += `${curr}\n`;
    }
  });

  return str;

}
availableCurr([...baseCurrencies, ...additionalCurrencies], 'CNY')









