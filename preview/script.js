const btns = document.querySelectorAll('button'),
	overlay = document.querySelector('.overlay');


// Устаревший вид
// btn.onclick = function(){
// 	alert('Click 2');
// };

// btn.onclick = function(){
// 	alert('Second click');
// };

// Современный способ назначения событий
// btn.addEventListener('click', () =>{
// 		alert('Click Event Listener');
// });

// let i = 0;
const deleteElement = (e) =>{
	console.log(e.target);
	console.log(e.type);
	// i++;
	// if (i == 1){
	// 	btn.removeEventListener('click', deleteElement);
	// }
};

// btn.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);

btns.forEach((btn) => {
	btn.addEventListener('click', deleteElement, {once: true});
});

const link = document.querySelector('a');

link.addEventListener('click', function(event){
	event.preventDefault();

	console.log(event.target);
});






