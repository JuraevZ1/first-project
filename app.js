"use strict";
const numberOfFilms = +prompt("сколько фильмов вы уже просмотрели?", "");
const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};
let a = prompt("Один из последных просмотренных фильмов?", "");
let b = prompt("На сколько оцените его?", "");
let c = prompt("Один из последных просмотренных фильмов?", "");
let d = prompt("На сколько оцените его?", "");
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
console.log(personalMovieDB);
