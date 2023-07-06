/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};




// // 1) Удалить все рекламные блоки со страницы (правая часть сайта)

// const adsense = document.querySelector('.promo__adv');
// adsense.remove();
// console.log(adsense);

// // 2) Изменить жанр фильма, поменять "комедия" на "драма"
// const genre = document.querySelector('.promo__genre').textContent = 'драма';

// // 3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
// // Реализовать только при помощи JS
// const promo__bg = document.querySelector('.promo__bg');
// promo__bg.style.cssText = `background: url(../img/bg.jpg) center center/cover no-repeat; background-position: top;`;

// // 4) Список фильмов на странице сформировать на основании данных из этого JS файла.
// // Отсортировать их по алфавиту 

// const filmsList = document.querySelectorAll('.promo__interactive-item')
// console.log(filmsList);

// filmsList.forEach((item, i) => {
// 	item.textContent = `${i +1} ${movieDB.movies[i]}`;
// })




/////////////////////////////////////
// Mentors Solutions
// 1) Удалить все рекламные блоки со страницы (правая часть сайта)
const adv = document.querySelectorAll('.promo__adv img'),
	poster = document.querySelector('.promo__bg'),
	genre = poster.querySelector('.promo__genre'),
	movieList = document.querySelector('.promo__interactive-list');

// Стрелочная функция
adv.forEach(item => item.remove());

// Обычная функция
// adv.forEach(function (item){
// 	item.remove();
// })

// 2) Изменить жанр фильма, поменять "комедия" на "драма"
genre.textContent = 'драма';

// 3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
// Реализовать только при помощи JS

poster.style.backgroundImage = "url('img/bg.jpg')"


// 4) Список фильмов на странице сформировать на основании данных из этого JS файла.
// Отсортировать их по алфавиту 

movieList.innerHTML = "";
movieDB.movies.sort();

movieDB.movies.forEach((film, i) => {
	movieList.innerHTML += `
	<li class="promo__interactive-item">${i + 1} ${film}
      <div class="delete"></div>
     </li>
	`
})






