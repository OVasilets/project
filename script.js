//let number = 5;

//number = 10;
//console.log (number);
//const obj = {
//    a : 50
//};
//obj. a = 10;
//console.log (obj) ;

const numberOfFilms = +promt ('Сколько фильмов Вы уже посмотрели?', '');
const personalMovieDB =  {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
const a = promt ('Один из последних просмотренных фильмов ?', ''),
    b = promt ('На сколько оцените его ?', ''),
    c = promt ('Один из последних просмотренных фильмов ?', ''),
    d = promt ('На сколько оцените его ?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;      
console.log(personalMovieDB);  

