"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');
 
const personalMovieDB = {
    count: {},
    movies: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    const a = prompt('Какой последний просмотренный фильм?', ''),
          b = prompt('Насколько оцените его?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
    } else {
        i--;
    }
}

if (personalMovieDB.count < 10) {
    alert('Вы наверное больше книги любите!');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    alert('Вы любите кино!');
} else if (personalMovieDB.count >=30) {
    alert('Вы киноман');
} else {
    alert('Что то непонятно');
}

console.log(personalMovieDB);
