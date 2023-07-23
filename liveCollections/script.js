'use strict';

const boxesQuery = document.querySelectorAll('.box');
const boxesGet = document.getElementsByClassName('box');

boxesQuery.forEach( box => {
	if (box.matches('.this')) console.log('This one!', box);
})
console.log(boxesQuery[0].closest('.wrapper'));

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




