'use strict';

// const boxesQuery = document.querySelectorAll('.box');
// const boxesGet = document.getElementsByClassName('box');

// boxesQuery.forEach( box => {
// 	if (box.matches('.this')) console.log('This one!', box);
// })
// console.log(boxesQuery[0].closest('.wrapper'));

// boxesQuery[0].remove();
// boxesGet[0].remove();

// for(let i = 0; i < 5; i++){
// 	const div = document.createElement('div');
// 	div.classList.add('box');
// 	document.body.append(div);
// 	// boxesGet[boxesGet.length] = div; // - Uncaught TypeError: Failed to set an indexed property on 'HTMLCollection': Indexed property setter is not supported. 
// }

// console.log(boxesQuery);
// console.log(boxesGet);
// // console.log(document.body.children);

// console.log(Array.from(boxesGet));

// const obj = {
// 	'name': 'Test',
// 	[Symbol('id')]: 1,
// 	getId: function(){
// 		return this[id]; 
// 	}
// }



// // obj[id] = 1;

// // console.log(obj.getId());
// console.log(obj[Object.getOwnPropertySymbols(obj)[0]]);



// for (let value in obj) console.log(value);




// const myAwesomeDB = {
// 	movies: [],
// 	actors: [],
// 	[Symbol.for('id')]: 123,
// }



// // Сторонний код библиотеки

// myAwesomeDB.id = '123434143';

// console.log(myAwesomeDB[Symbol.for('id')]);
// console.log(myAwesomeDB);


///////////////////////////////////////////////////
 // Дескрипторы свойств и полезные методы объектов

const birthday = Symbol('birthday');

const user = {
	name: 'Alex',
	surname: 'Smith',
	[birthday]: '20/04/2021',
	showMyPublicData: function() {
		console.log(`${this.name} ${this.surname}`);
	}
}

// Object.defineProperty(user, 'birthday', {value: prompt('Date?'), enumerable: true, configurable: true});

// console.log(Object.getOwnPropertyDescriptor(user, 'birthday'));


// console.log(Object.getOwnPropertyDescriptor(Math, 'PI'));


Object.defineProperty(user, 'showMyPublicData', {enumerable: false})

for (let key in user) console.log(key);

console.log(Object.getOwnPropertyDescriptor(user, birthday));



Object.defineProperties(user, {
	name: {	writable: false	},
	surname: { writable: false },
})


// Object.defineProperty(user, 'name', {writable: false});
// Object.defineProperty(user, 'gender', {value: 'male'});

// console.log(Object.getOwnPropertyDescriptor(user, 'gender'));

// user.name = 'Max'; // Uncaught TypeError: Cannot assign to read only property 'name' of object '#<Object>'



// Флаги:
// writable  - если true, то свойства можно переписать
// enumerable - если true, то свойство перечисляется в циклах
// configurable - если true, то свойство можно удалить, а атрибуты изменить

///////////////////////////////////////////////////////////


// Object.preventExtensions() // Запрещает расширение объекта (добавление свойств в объект).
// Object.seal() // Запечатывает объект. Запрещает добавление свойств в объект и добавляет флаг configurable: false
// Object.freeze() // Замораживает объект. Запрещает добавлять, изменять, удалять свойства в объекте.

// // Методы, проверяющие изменения объекта.
// Object.is() // Определяет, являются ли два значения различимыми(тоесть одинаковыми). Позволяет сравнивать содержимое объектов.


// //////////////////////////////////////////
// Object.entries()
// // Object.entries() метод возвращает массив собственных перечисляемых свойств указанного объекта в формате [key, value], в том же порядке, что и в цикле for...in (разница в том, что for-in перечисляет свойства из цепочки прототипов). Порядок элементов в массиве который возвращается Object.entries() не зависит от того как объект объявлен. Если существует необходимость в определённом порядке, то массив должен быть отсортирован до вызова метода, например Object.entries(obj).sort((a, b) => a[0] - b[0]);.


// Object.values()
// // Метод Object.values() возвращает массив значений перечисляемых свойств объекта в том же порядке что и цикл for...in. Разница между циклом и методом в том, что цикл перечисляет свойства и из цепочки прототипов.


// Object.keys()
// // Метод Object.keys() возвращает массив из собственных перечисляемых свойств переданного объекта, в том же порядке, в котором они бы обходились циклом for...in (разница между циклом и методом в том, что цикл перечисляет свойства и из цепочки прототипов).









