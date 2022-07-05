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

const uniteUnique2 = (...arr) => [...new Set(arr.flat())];
console.log(uniteUnique([1, 2, 3], [5, 2, 1]));

//*Convert HTML Entities
