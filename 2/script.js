

'use strict';

let numberOfFilms;
let urGenres;

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};



    function start(){

    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}


    function rateFilm (){

        for(let i = 1; i <= 2; i++){

            const a = prompt('Один из последних просмотренных фильмов?', ''),
                  b = prompt('На сколько оцените его?', '');
        
        
            if( a != "" && b != "" && a != null && b != null && a.length < 50){

                personalMovieDB.movies[a]=b;
            } else {

                i--;
            }
        }
    }


    function personalMovieRate (){
    
        if (personalMovieDB.count < 10){
            alert('Просмотрено довольно мало фильмов');
        }   else if(personalMovieDB.count > 10 && personalMovieDB.count < 30 ){
            alert('Вы классический зритель');
        } else if (personalMovieDB.count > 30) {
            alert('Вы киноман');
        } else {
            alert('Произошла ошибка');
        }
    }

    function showMyDb(hidden){
        if (hidden == false){
            console.log(personalMovieDB)
        }
    }

    function writeYourGenres (){
        for( let i = 1; i <= 3; i++){
           urGenres =  prompt(`Ваш любимый жанр под номером ${i}`,'');
           numberOfFilms.genres[i-1] = urGenres;
        }
        
    }


//старт функций
start();
rateFilm ();
personalMovieRate ();
showMyDb(personalMovieDB.privat);
writeYourGenres ();