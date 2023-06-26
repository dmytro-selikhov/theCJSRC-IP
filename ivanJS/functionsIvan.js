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


const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    let str = 'Семья состоит из:';
    let arrStr = '';

    if (!arr.length){
        return 'Семья пуста';
    } else {

    arr.forEach((e) => {
    	arrStr+= ` ${e}`
    	return arrStr;
    } )

    str+= arrStr;
    console.log(str);
    return str;
    }
}
showFamily(family);

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    const lowArr = arr.map((e) =>e.toLowerCase());

    lowArr.forEach(e => console.log(e));
}

standardizeStrings(favoriteCities);
















