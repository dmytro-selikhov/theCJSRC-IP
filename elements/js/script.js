'use strict';

const box = document.getElementById('box');
const wrapper = document.querySelector('.wrapper');
const btns = document.getElementsByTagName('button'); // получили псевдомассив - html коллекция
const circles = document.getElementsByClassName('circle');
const hearts = wrapper.querySelectorAll('.heart'); // Помещается CSS селектор. У него есть метод forEach(). При выборе селектора обязательно использовать точку или решётку (./#) или другой обозначитель элемента.
const oneHeart = wrapper.querySelector('.heart');

const div = document.createElement('div');

console.dir(box);

// box.style.backgroundColor = 'blue';
// box.style.width = '500px';
let num = 200;

box.style.cssText = `background-color: pink; width: ${num}px`;

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

// Циклы устаревший вариант использования
// for (let i = 0; i < hearts.length; i++) {
//   hearts[i].style.backgroundColor = 'blue'
// }

// Лучше использовать перебирающие методы
hearts.forEach(item => {
  item.style.backgroundColor = 'green';
})



// const text = document.createTextNode('I was here');

div.classList.add('black');

// document.body.append(div);

wrapper.append(div);
// wrapper.appendChild(div);
// wrapper.prepend(div);

// hearts[0].before(div);
// hearts[0].after(div);

// wrapper.insertBefore(div, hearts[1])

// wrapper.removeChild(hearts[1]);
// circles[0].remove();

// hearts[0].replaceWith(circles[0]);

// wrapper.replaceChild(circles[0], hearts[0]);

div.innerHTML = `<h1>Hello World!</h1>`;

// div.textContent = 'Wazzap!';

// div.insertAdjacentHTML('beforebegin', '<h2>Hello</h2>');
// div.insertAdjacentHTML('afterbegin', '<h2>Hello</h2>');
// div.insertAdjacentHTML('beforeend', '<h2>Hello</h2>');
// div.insertAdjacentHTML('afterend', '<h2>Hello</h2>');







