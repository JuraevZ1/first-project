"use strict";

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: true,
  start: function () {
    personalMovieDB.count = +prompt("сколько фильмов вы уже просмотрели?", "");
    while (
      personalMovieDB.count == "" ||
      personalMovieDB.count == null ||
      isNaN(personalMovieDB.count)
    ) {
      personalMovieDB.count = +prompt(
        "сколько фильмов вы уже просмотрели?",
        ""
      );
    }
  },
  showMyDB: function (obj) {
    if (!obj) {
      console.log(personalMovieDB);
    }
  },
  toggleVisibleMyDB: () => {
    if (personalMovieDB.privat) {
      personalMovieDB.privat = false;
    } else {
      personalMovieDB.privat = true;
    }
  },
  writeYourGenres: function () {
    // for (let i = 1; i <= 3; i++) {
    //   let a = prompt(`vash lyubimiy janr ${i}`, "");

    //   if (a !== null && a !== "") {
    //     personalMovieDB.genres[i - 1] = a;
    //   } else {
    //     i--;
    //   }
    // }
    // personalMovieDB.genres.forEach((item, index, arr) => {
    //   console.log(`vash lyubimiy janr ${index + 1} eto ${item}`);
    // });
    //=============second road
    for (let i = 1; i < 2; i++) {
      let genre = prompt(
        `vedite vash 3 lyubimix janrov posle kajdoy  zapetoy ${i}`,
        ""
      );
      if (genre === "" || genre === null) {
        console.log("error");
        i--;
      } else {
        personalMovieDB.genres = genre.split(",");
        personalMovieDB.genres.sort();
      }
    }
    personalMovieDB.genres.forEach((item, index, arr) => {
      console.log(`vash lyubimiy janr ${index + 1} eto ${item}`);
    });
  },
  rememberMovie: function () {
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
  },
  detectPersonLevel: function () {
    if (personalMovieDB.count < 10) {
      console.log("Посмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      console.log("вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
      console.log("вы киноман");
    } else {
      console.log("error from count");
    }
  },
};

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
personalMovieDB.writeYourGenres();
console.log(personalMovieDB);
