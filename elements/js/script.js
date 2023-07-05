'use strict';

const box = document.getElementById('box');

console.log(box);

const btns = document.getElementsByTagName('button'); // получили псевдомассив - html коллекция

console.log(btns[0]);

const circles = document.getElementsByClassName('circle');

console.log(circles);

const hearts = document.querySelectorAll('.heart'); // Помещается CSS селектор. У него есть метод forEach(). При выборе селектора обязательно использовать точку или решётку (./#) или другой обозначитель элемента.

hearts.forEach(item => {
  console.log(item);
});

const oneHeart = document.querySelector('.heart');
console.log(oneHeart);