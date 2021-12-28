"use strict";


//First HW
// let numbersOfFilms=+prompt("Numbers of films");

const personalMovieDB = {
    count: +prompt("Numbers of films"),
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    addMovie: function (movie = prompt("What a film you look")) {
        this.movies[movie] = (movie == "Jay and Silent Bob") ? 9999 : prompt("Set score for him");
    },
    addMovies:function(){
        if(+this.count>0){
            
            for(let i=0;i<this.count;i++){
                console.log(movie);
            }
        }
    }

}

//first variant
// let i=0;
// while(i<personalMovieDB.count){3
//     i++;
//     let movie=prompt("What a film you look"),
//         score=prompt("Set score for him");
//     personalMovieDB.movies[movie]=score;
// }

//second

// for(let i=0; i <  personalMovieDB.count;i++){

//     let movie=prompt("What a film you look"),
//         score=prompt("Set score for him");
//     personalMovieDB.movies[movie]=score;
// }

//third
for (let i = personalMovieDB.count; i != 0; i--) {
    if (i == 3) {
        personalMovieDB.addMovie("Jay and Silent Bob");
        continue;
    }
    personalMovieDB.addMovie();

}

// Fourth

console.log(personalMovieDB);


