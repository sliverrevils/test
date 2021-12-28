let numbersOfFilms=+prompt("Numbers of films");

const personalMovieDB={
    count:numbersOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat:false
}

let i=0;
while(i<personalMovieDB.count){3
    i++;
    let movie=prompt("What a film you look"),
        score=prompt("Set score for him");
    personalMovieDB.movies[movie]=score;
}



console.log(personalMovieDB);


