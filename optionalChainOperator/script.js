'use strict';

const box = document.querySelector('.box');
const block = document.querySelector('.block');

console.log(block);

// if(block){
// 	console.log(block.textContent);
// }

console.log(block?.textContent);


// console.log(1 + 2);

const userData = {
	name: 'Dimas',
	age: null,
	say: function() {
		console.log('Hello');
	},
	skills: {
		js: 'He knows JS!'
	},
};

userData.say();
userData.hey?.();
// if (userData && userData.skills && userData.skills.js){
// 	console.log(userData.skills.js);	
// }

console.log(userData?.skills?.js);	

