"use strict";

let numberWatchingFilms;
function start() {
  numberWatchingFilms = +prompt("сколько фильмов вы уже просмотрели?", "");
  while (
    numberWatchingFilms == "" ||
    numberWatchingFilms == null ||
    isNaN(numberWatchingFilms)
  ) {
    numberWatchingFilms = +prompt("сколько фильмов вы уже просмотрели?", "");
  }
}
start();
const personalMovieDB = {
  count: numberWatchingFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};
function showMyDB(obj) {
  if (!obj) {
    console.log(personalMovieDB);
  }
}
showMyDB(personalMovieDB.privat);
function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    personalMovieDB.genres[i - 1] = prompt(`vash lyubimiy janr ${i}`, "");
  }
}
writeYourGenres();
// with while
// let i = 0;
// while (i < 2) {
//   const a = prompt("Один из последных просмотренных фильмов?", ""),
//     b = prompt("На сколько оцените его?", "");
//   if (a !== null && b !== null && a !== "" && b !== "" && a.length < 50) {
//     personalMovieDB.movies[a] = b;
//     console.log("done");
//   } else {
//     i--;
//     console.log("error");
//   }
//   i++;
// }
//==========================with do while
// let i = 0;
// do {
//   const a = prompt("Один из последных просмотренных фильмов?", ""),
//     b = prompt("На сколько оцените его?", "");
//   if (a !== null && b !== null && a !== "" && b !== "" && a.length < 50) {
//     personalMovieDB.movies[a] = b;
//     console.log("done");
//   } else {
//     i--;
//     console.log("error");
//   }
//   i++;
// } while (i < 2);
function rememberMovie() {
  for (let i = 0; i < 2; i++) {
    const a = prompt("Один из последных просмотренных фильмов?", ""),
      b = prompt("На сколько оцените его?", "");
    if (a !== null && b !== null && a !== "" && b !== "" && a.length < 50) {
      personalMovieDB.movies[a] = b;
      console.log("done");
    } else {
      i--;
      console.log("error");
    }
  }
}
rememberMovie();

function detectPersonLevel() {
  if (personalMovieDB.count < 10) {
    console.log("Посмотрено довольно мало фильмов");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("вы классический зритель");
  } else if (personalMovieDB.count >= 30) {
    console.log("вы киноман");
  } else {
    console.log("error from count");
  }
}
detectPersonLevel();
