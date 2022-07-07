function fearNotLetter(str) {
  //find the missing letter in the string
  for (let i = 0; i < str.length; i++) {
    //loop through string to find missing letter
    if (str.charCodeAt(i) !== str.charCodeAt(0) + i) {
      //if the character code of the current letter is not the same as the character code of the first letter plus the index of the current letter, return the missing letter
      return String.fromCharCode(str.charCodeAt(0) + i); //return the missing letter
    }
  }
  return undefined;
}

console.log(fearNotLetter("abce"));

//*Sorted Union
/*Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.*/
function uniteUnique(...arr) {
  //   const array = [...arguments]; //otra forma de hacer spread de los argumentos en el caso de que no haga spread en la funcion
  //   console.log(array);
  const unique = [];
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    for (let j = 0; j < arr[i].length; j++) {
      console.log(arr[i][j]);
      if (unique.indexOf(arr[i][j]) === -1) {
        unique.push(arr[i][j]);
      }
    }
  }
  return unique;
}
console.log(uniteUnique([1, 2, 3], [5, 2, 1]));

//?Then the spread operator in ...new Set() just converts this back into an array  🔥
const uniteUnique2 = (...arr) => [...new Set(arr.flat())]; //Set elimina los valores duplicados y flat() convierte el array en un array de un solo nivel
console.log(uniteUnique([1, 2, 3], [5, 2, 1]));

function uniteUnique3() {
  return [...arguments]
    .flat()
    .filter((item, ind, arr) => arr.indexOf(item) === ind); //filter() elimina los valores duplicados y flat() convierte el array en un array de un solo nivel
}

console.log(uniteUnique3([1, 3, 2], [5, 2, 1, 4], [2, 1]));

//*Convert HTML Entities
