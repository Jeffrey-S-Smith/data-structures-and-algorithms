'use strict';
const yearSort = require("./yearSort");

function sortYear(movies) {
  let moviesCopy = movies;
  moviesCopy = yearSort(moviesCopy);
  console.log(moviesCopy);
  return moviesCopy;
}

function sortTitle(movies) {
  console.log(movies);
  return movies.sort(compareByTitle);

}

function compareByTitle(a, b) {
  const cloneA = Object.assign({}, a);
  const cloneB = Object.assign({}, b);
  let titleA = cloneA.title.toLowerCase();
  titleA= removeArticles(titleA);
  let titleB = cloneB.title.toLowerCase();
  titleB=removeArticles(titleB);

  // if (titleA.startsWith("The ")) {
  //   titleA = titleA.slice(4);
  // }

  // if (titleB.startsWith("The ")) {
  //   titleB = titleB.slice(4);
  // }
  if (titleA < titleB) {
    return -1;
  }

  if (titleA > titleB) {
    return 1;
  }

  return 0;

}

function removeArticles(str) {
  // let words = str.split(" ");
  // if (words.length <= 1) return str;
  // if (words[0] === 'a' || words[0] === 'the' || words[0] === 'an')
  //   return words.splice(1).join(" ");
  // return str;
  

  if (str.startsWith("the")){
    return str.slice(4);
  }
  return str;
}

// function inGenre(movies, genre) {
//   return [];
// }

module.exports = {
  sortYear,
  sortTitle,
  // inGenre,
  removeArticles,
};
