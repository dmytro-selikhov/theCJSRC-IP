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
// // 1) Удалить все рекламные блоки со страницы (правая часть сайта)
// const adv = document.querySelectorAll('.promo__adv img'),
// 	poster = document.querySelector('.promo__bg'),
// 	genre = poster.querySelector('.promo__genre'),
// 	movieList = document.querySelector('.promo__interactive-list');

// // Стрелочная функция
// adv.forEach(item => item.remove());

// // Обычная функция
// // adv.forEach(function (item){
// // 	item.remove();
// // })

// // 2) Изменить жанр фильма, поменять "комедия" на "драма"
// genre.textContent = 'драма';

// // 3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
// // Реализовать только при помощи JS

// poster.style.backgroundImage = "url('img/bg.jpg')"


// // 4) Список фильмов на странице сформировать на основании данных из этого JS файла.
// // Отсортировать их по алфавиту 

// movieList.innerHTML = "";
// movieDB.movies.sort();

// movieDB.movies.forEach((film, i) => {
// 	movieList.innerHTML += `
// 	<li class="promo__interactive-item">${i + 1} ${film}
//       <div class="delete"></div>
//      </li>
// 	`
// })


/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.





2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */


// Для того, что бы взаимодействовать с элементами страницы и не получать ошибок
// помещаем код в колл бэк функцию и ждем прогрузки DOM элементов страницы
document.addEventListener('DOMContentLoaded', () =>{

        // 1) Удалить все рекламные блоки со страницы (правая часть сайта)
        const adv = document.querySelectorAll('.promo__adv img'),
            poster = document.querySelector('.promo__bg'),
            genre = poster.querySelector('.promo__genre'),
            movieList = document.querySelector('.promo__interactive-list'),
            addForm = document.querySelector('form.add'),
            addInput = addForm.querySelector('.adding__input'),
            checkbox = addForm.querySelector('[type="checkbox"]');

        addForm.addEventListener('submit', (event) =>{
            event.preventDefault();

            let newFilm = addInput.value;
            const favorite = checkbox.checked;



            if (newFilm){
                // 2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

                if(newFilm.length > 21) {
                    newFilm = `${newFilm.substring(0,22)}...`;
                }

                if (favorite) {
                    console.log("Добавляем любимый фильм");
                }

                movieDB.movies.push(newFilm);
                sortArr(movieDB.movies);

                createMovieList(movieDB.movies, movieList);

              }

            event.target.reset();
        })


        const deleteADV =  (arr) => {
            // Стрелочная функция    
            arr.forEach(item => item.remove());

            // Обычная функция
            // adv.forEach(function (item){
            //  item.remove();
            // })
        }

        const makeChanges = () => {
            // 2) Изменить жанр фильма, поменять "комедия" на "драма"
            genre.textContent = 'драма';

            // 3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
            // Реализовать только при помощи JS

            poster.style.backgroundImage = "url('img/bg.jpg')"
        }

        const sortArr = (arr) => {
            // Отсортировать список фильмов по алфавиту 

            arr.sort()
        }

        function createMovieList(films, parent){
                // 4) Список фильмов на странице сформировать на основании данных из этого JS файла.
                parent.innerHTML = "";
                // 5) Фильмы должны быть отсортированы по алфавиту */

                sortArr(films);

                films.forEach((film, i) => {
                parent.innerHTML += `
                <li class="promo__interactive-item">${i + 1} ${film}
                  <div class="delete"></div>
                 </li>
                `
            })

            document.querySelectorAll('.delete').forEach((btn, i) =>{
                btn.addEventListener('click', () => {
                    btn.parentElement.remove();
                    movieDB.movies.splice(i, 1);

                    createMovieList(films, parent);
                })
            });

        }

        deleteADV(adv);
        makeChanges();
        createMovieList(movieDB.movies, movieList);

})


















