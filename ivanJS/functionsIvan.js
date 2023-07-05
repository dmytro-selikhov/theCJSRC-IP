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



// const someString = 'This is some strange string';

// function reverse(str) {
//   let reversedStr = '';

//   if (typeof str !== 'string') {
//     return "Ошибка!"
//   } else {

//     for (let i = str.length - 1; i >= 0; i--) {
//       reversedStr += str[i];
//     }
//     console.log(reversedStr);
//     return reversedStr;
//   }
// }
// reverse(someString)

// const baseCurrencies = ['USD', 'EUR'];
// const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

// function availableCurr(arr, missingCurr) {
//   let str = '';
//   arr.length === 0 ? str = 'Нет доступных валют' : str = 'Доступные валюты:\n';

//   arr.forEach(function (curr, i) {
//     if (curr !== missingCurr) {
//       str += `${curr}\n`;
//     }
//   });

//   return str;

// }
// availableCurr([...baseCurrencies, ...additionalCurrencies], 'CNY')


/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку.
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены -
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/


////////////////////////////////////////////

// const personalMovieDB = {
//     count: 0,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false,
//     start: function(){
// 		personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

// 		while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
// 			personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
// 		}
// 	},
//     rememberMyFilms: function(){
// 		for (let i = 0; i < 2; i++){

// 		  const a = prompt('Один из последних просмотренных фильмов?', '').trim(),
// 		        b = prompt('На сколько оцените его?', '');

// 		  if (a != null && b != null && a != '' && b != '' && a.length < 50 ){
// 		    personalMovieDB.movies[a] = b;
// 		    console.log('done');
// 		  } else {
// 		    console.log('error');
// 		    // При не соответсвии по одному из условий мы:
// 		    // производим уменьшение количества
// 		    // итераций на 1 и возвращаем цикл на шаг назад
// 		    i--;
// 		  }
// 		}
// 	},
//     detectPersonalLevel: function(){
// 		if (personalMovieDB.count < 10) {
// 		  console.log("Просмотрено довольно мало фильмов");
// 		} else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
// 		  console.log("Вы классический зритель");
// 		} else if (personalMovieDB.count >= 30){
// 		  console.log("Вы киноман");
// 		} else{
// 		  console.log("Произошла ошибка");
// 		}
// 	},
//     showMyDB: function(hidden) {
// 		// if (personalMovieDB.privat){
// 		if (!hidden){
// 			console.log(personalMovieDB);
// 		}
// 	},
// 	toggleVisibleMyDB: function(){
// 	 	if (personalMovieDB.privat){
// 	 		personalMovieDB.privat = false;
// 	 	} else {
// 	 		personalMovieDB.privat = true;
// 	 	}
// 	},
//     writeYourGenres: function(){
// 		for (let i = 1; i < 2; i++) {

// 			// Вариант 1
// 			// let genre = prompt(`Ваш любимый жанр под номером ${i}?`, '');

// 			// if (genre === '' || genre === null){
// 			// 	console.log('You enter wrong data or did not enter any!');
// 			// 	i--;
// 			// } else {
// 			// 	personalMovieDB.genres[i - 1] = genre;
// 			// }

// 			// Вариант 2
// 			let genres = prompt(`Введите ваши любимые жанры через запятую`).toLowerCase();

// 			if (genres === '' || genres === null){
// 				console.log('You enter wrong data or did not enter any!');
// 				i--;
// 			} else {
// 				personalMovieDB.genres = genres.split(',');
// 				personalMovieDB.genres.sort();
// 			}
// 		}

// 		personalMovieDB.genres.forEach((item, i) => {
// 			console.log(`Любимый жанр ${i + 1} - это ${item}`);
// 		})
// 	},
// };

//////////////////////////////////////////////////////////////////////
/////////////////////////
// Задача:

// У вас есть небольшой кусочек данных о торговом центре,
// которые записаны в объекте shoppingMallData.
// Они содержат массив с данными о магазинах,
// где указана длина и ширина помещения; высоту помещения;
// стоимость отопления за 1 кубический метр и
//  бюджет на оплату отопления за месяц.

// Основная задача - это написать функцию isBudgetEnough,
//  которая буде возвращать строку. Если бюджета хватает для отопления
//  всего объема торгового центра - выводится 'Бюджета достаточно',
//  если нет - 'Бюджета недостаточно'. И все 🙂

// Но эта задача содержит несколько подзадач внутри:

// - вычисление общей площади всех магазинов,
// которая вычисляется как длина магазина, умноженная на его ширину;

// - вычисление общего объема торгового центра,
// так как цена отопления указана в кубических метрах;

// - определение того, хватает ли бюджета на оплату такого объема;

// - все числа идут без единиц измерения для упрощения, просто цифры и все;

// - функция должна продолжать работать,
// даже если изменяется количество магазинов, высота,
// бюджет или подставляется вообще другой объект.

// const shoppingMallData = {
//     shops: [
//         {
//             width: 10,
//             length: 5
//         },
//         {
//             width: 15,
//             length: 7
//         },
//         {
//             width: 20,
//             length: 5
//         },
//         {
//             width: 8,
//             length: 10
//         }
//     ],
//     height: 5,
//     moneyPer1m3: 30,
//     budget: 500
// }

// function isBudgetEnough(data) {

//     let square = 0;

//     let fullSize = 0;

//     data.shops.forEach(shop => {
//     	// Проходим циклом массив shops и вычисляем общую площадь магазинов.
//     square += shop.width * shop.length

//     });
//     	// Вычисляем объем торгового центра
//     fullSize = square * data.height;

//      return fullSize * data.moneyPer1m3 > data.budget? 'Бюджета недостаточно' : 'Бюджета достаточно'
// }

// isBudgetEnough(shoppingMallData);

///////////////////////////////////////////////////////////////////////////
///////////////////////////
// Задача

// У вас есть список учеников, которые хотят поиграть в игру:

// const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh',
// 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];
// Но команд может быть только 3 по 3 человека.
// Напишите функцию sortStudentsByGroups,
// которая принимает в себя массив строк.

// Внутри она сначала сортирует имена по алфавиту.
//  Затем распределяет учеников по 3 человека в 3 группы по алфавитному порядку.
//  Эти группы должны быть массивами. Как итог,
//  функция возвращает новый массив с тремя командами и строкой как 4й элемент.

// Пример:

// sortStudentsByGroups(students)  =>

// [
//   [ 'Andrew', 'Ann', 'Bernard' ],
//   [ 'Cris', 'Josh', 'Mark' ],
//   [ 'Peter', 'Sam', 'Sandra' ],
//   'Оставшиеся студенты: Takesi'
// ]
// Если убрать одно студента из списка, то результат будет:

// [
//   [ 'Andrew', 'Ann', 'Bernard' ],
//   [ 'Cris', 'Josh', 'Mark' ],
//   [ 'Peter', 'Sam', 'Sandra' ],
//   'Оставшиеся студенты: -'
// ]
// А если добавить одного, то:

// [
//   [ 'Andrew', 'Ann', 'Bernard' ],
//   [ 'Cris', 'Josh', 'Mark' ],
//   [ 'Peter', 'Sam', 'Sandra' ],
//   'Оставшиеся студенты: Takesi, Somebody'
// ]
// То есть, меняется содержимое строки. Все оставшиеся ученики попадают туда.

// Задача интересная, немного заковыристая,
// но все необходимое для неё мы уже проходили.
// Просто распишите логику действий строка за строкой.

// const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

// const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

// function sortStudentsByGroups(arr) {
// 	arr.sort();
// 	let arrGroup = [];
// 		for (let i = 0; i < 3; i++) arrGroup.push(arr.splice(0, 3));
// 		arrGroup.push(`Оставшиеся студенты: ${!arr.length ? `-` : arr.join(", ")}`);
// 	return arrGroup;
// }

/////////////////////////////////////////////////////////////////
///////////////////////
// Coding Exercise 15: Задания на поиск ошибок в коде


// Задание:

// У вас есть объект с данными о ресторане.
//  Начинающий разработчик создал несколько функций,
//   которые работают неправильно и он не может понять почему.
//   Нужно исправить функции так, чтобы они давали всегда правильный
//    результат.

// 1) Функция isOpen не хочет правильно работать. Что мы уже не
// пробовали подставлять в неё - результат все время неправильный.
// Необходимо найти причины и исправить.

// Исправления:
// 1. В строке return anwser; опечатка в слове anwser. Замени это на answer, чтобы возвращалось правильное значение.
// 2. При вызове функции isOpen передай restorantData.openNow вместо openNow, чтобы функция получила доступ к свойству openNow в объекте restorantData.

// 2) Функция isAverageLunchPriceTrue должна брать цены двух
// любых блюд из меню, складывать их и сравнивать с средним чеком
// (averageLunchPrice).

// Сейчас функция работает, но постоянно выдает неправильный
// результат. Ведь из представленного меню сумма двух любых цен
//  всегда будет больше 20. Необходимо найти причину и исправить.

// Исправления:
// В строке (sDish.price) замени на (sDish.price.slice(0, -1)), чтобы получить числовое значение цены, убрав символ доллара ('$') с помощью slice(0, -1).
// В условии if сравнивай totalPrice с числовым значением average, также удаляя символ доллара.
// При вызове функции isAverageLunchPriceTrue передай конкретные блюда из меню (restorantData.menu[0] и restorantData.menu[1]), а не объекты блюд. Это позволит функции получить доступ к их свойствам name и price.


// 3) Функция transferWaitors создана для того, чтобы копировать
//  шаблон данных и передавать их в другой ресторан. Конечно,
//  в другом ресторане будут другие блюда, другие официанты и тп.
//  Сейчас эта функция только в начале разработки и должна менять
//  данные про официантов.

// Но в нынешнем виде мы обнаружили, что после её запуска
// не только копия данных содержит новых официантов, но и
// основные данные! В restorantData сотрудник Alice исчезает и
// заменяется Mike! Необходимо найти причину и немедленно исправить,
// чтобы данные были разделены.

// Исправления:
// Вместо Object.assign({}, data) используется JSON.parse(JSON.stringify(data)), что позволяет создать глубокую копию объекта data, включая вложенные свойства.
// Возвращаем скопированный и обновленный объект copy.

// P.S. Может показаться сложным, но задача решается очень просто, 
// если вы помните один принцип :)



const restorantData = {
  menu: [
    {
      name: 'Salad Caesar',
      price: '14$'
    },
    {
      name: 'Pizza Diavola',
      price: '9$'
    },
    {
      name: 'Beefsteak',
      price: '17$'
    },
    {
      name: 'Napoleon',
      price: '7$'
    }
  ],
  waitors: [
    { name: 'Alice', age: 22 }, { name: 'John', age: 24 }
  ],
  averageLunchPrice: '20$',
  openNow: true
};

function isOpen(prop) {
  let answer = '';
  prop ? answer = 'Открыто' : answer = 'Закрыто';

  return answer;
}

console.log(isOpen(restorantData.openNow));

function isAverageLunchPriceTrue(fDish, sDish, average) {
  const totalPrice = +fDish.price.slice(0, -1) + +sDish.price.slice(0, -1);
  if (totalPrice < +average.slice(0, -1)) {
    return 'Цена ниже средней';
  } else {
    return 'Цена выше средней';
  }
}

console.log(isAverageLunchPriceTrue(restorantData.menu[0], restorantData.menu[1], restorantData.averageLunchPrice));


function transferWaitors(data) {
  const copy = JSON.parse(JSON.stringify(data));

  copy.waitors[0] = { name: 'Mike', age: 32 };
  return copy;
}

const updatedData = transferWaitors(restorantData);
console.log(updatedData);
















