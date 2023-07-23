'use strict';

const user = {
	name: 'Alex',
	surname: 'Smith',
	birthday: '20/04/2021',
	showMyPublicData: function() {
		console.log(`${this.name} ${this.surname}`);
	}
}

// hasOwnProperty()

// for (const key in user) { // Получаем сам ключ итерируемого объекта
// 	console.log(user[key]);
// }

const arr = ['b', 'a', 'c'];
Array.prototype.someMethod = function() {};

console.dir(arr);

for (const key of arr) { // Получаем значение итерируемого объекта.
	console.log(key);
}


// for (const key in arr) { 
// 	console.log(key);
// }


// const str = 'Selikhov';

// for (const key in str) {
// 	console.log(str[key]);
// }

const salaries = {
	john: 500,
	ivan: 1000,
	ann: 5000,
	sayHello: function(){
		console.log('Hello');
	}
};

salaries[Symbol.iterator] = function() {
	return {
		current: this.john,
		last: this.ann,

		next(){
			if (this.current < this.last){
				this.current = this.current + 500;
				return {done: false, value: this.current}
			} else {
				return {done: true}
			}

			// {done: true, value: 123}
		}
	}
}



const iterator = salaries[Symbol.iterator]();
console.log(iterator.next());

// for (let res of salaries){
// 	console.log(res);
// }


