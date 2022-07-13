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
function convertHTML(str) {
  // Use Object Lookup to declare as many HTML entities as needed.
  const htmlEntities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;",
  };
  // Using a regex, replace characters with it's corresponding html entity
  return str.replace(/([&<>\"'])/g, (match) => htmlEntities[match]);
}

// test here
console.log(convertHTML("Dolce & Gabbana"));

//*Sum All Odd Fibonacci Numbers
/*
Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
*/
function sumFibs(num) {
  let prevNumber = 0;
  let currNumber = 1;
  let result = 0;
  while (currNumber <= num) {
    if (currNumber % 2 !== 0) {
      result += currNumber;
    }
    console.log((currNumber += prevNumber));
    prevNumber = currNumber - prevNumber;
    console.log(prevNumber);
  }

  return result;
}

console.log(sumFibs(10));

/*
*Steamroller
Flatten a nested array. You must account for varying levels of nesting.*/

function steamrollArray(arr) {
  const flattenedArray = [];
  // Loop over array contents
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      // Recursively flatten entries that are arrays
      //  and push into the flattenedArray
      flattenedArray.push(...steamrollArray(arr[i]));
    } else {
      // Copy contents that are not arrays
      flattenedArray.push(arr[i]);
    }
  }
  return flattenedArray;
}
console.log(steamrollArray([1, [2], [3, [[4]]]]));

function steamrollArray2(arr) {
  const flat = [].concat(...arr);
  return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
}

console.log(steamrollArray2([1, [2], [3, [[4]]]]));
/*Code Explanation
Use spread operator to concatenate each element of arr with an empty array
Use Array.some() method to find out if the new array contains an array still
If it does, use recursion to call steamrollArray again, passing in the new array to repeat the process on the arrays that were deeply nested
If it does not, return the flattened array */

//*Binary Agents
//Return an English translated sentence of the passed binary string.

function binaryAgent(str) {
  var biString = str.split(" ");
  var uniString = [];

  /*using the radix (or base) parameter in parseInt, we can convert the binary
      number to a decimal number while simultaneously converting to a char*/

  for (var i = 0; i < biString.length; i++) {
    uniString.push(String.fromCharCode(parseInt(biString[i], 2)));
  }

  // we then simply join the string
  return uniString.join("");
}

console.log(
  binaryAgent(
    "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
  )
);

function binaryAgent2(str) {
  console.log(...str.split(" "));
  return String.fromCharCode(
    ...str.split(" ").map(function (char) {
      return parseInt(char, 2);
    })
  );
}

// test here
binaryAgent2(
  "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
);

/*Code Explanation
First we use split() to be able to work on each character as an Array element
Then use map() to process each element from binary to decimal using pareseInt()
Last we can use String.fromCharCode() to convert each ASCII number into the corresponding character
However fromCharCode() expects a series of numbers rather than an Array! We can use ES6 Spread Operator to pass in an Array of numbers as individual numbers. See here for more info; Spread Operator 18 */

/*
*Everything Be True
Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

In other words, you are given an array collection of objects. The predicate pre will be an object property and you need to return true if its value is truthy. Otherwise, return false. */

function truthCheck(collection, pre) {
  return collection.every(
    (element) => element.hasOwnProperty(pre) && Boolean(element[pre])
  );
}

//#region tests
truthCheck(
  [
    { name: "Quincy", role: "Founder", isBot: false },
    { name: "Naomi", role: "", isBot: false },
    { name: "Camperbot", role: "Bot", isBot: true },
  ],
  "role"
);

truthCheck(
  [
    { name: "Quincy", role: "Founder", isBot: false },
    { name: "Naomi", role: "", isBot: false },
    { name: "Camperbot", role: "Bot", isBot: true },
  ],
  "isBot"
);

truthCheck(
  [
    { id: 1, data: { url: "https://freecodecamp.org", name: "freeCodeCamp" } },
    {
      id: 2,
      data: { url: "https://coderadio.freecodecamp.org/", name: "CodeRadio" },
    },
    { id: null, data: {} },
  ],
  "id"
);

truthCheck(
  [
    { name: "Quincy", role: "Founder", isBot: false },
    { name: "Naomi", role: "", isBot: false },
    { name: "Camperbot", role: "Bot", isBot: true },
  ],
  "name"
);

truthCheck(
  [
    { name: "freeCodeCamp", users: [{ name: "Quincy" }, { name: "Naomi" }] },
    { name: "Code Radio", users: [{ name: "Camperbot" }] },
    { name: "", users: [] },
  ],
  "users"
);
//#endregion

/*
?code Explanation
Do not use a Boolean object to convert a non-boolean value to a boolean value. To perform this task, instead, use Boolean as a function, or a double NOT operator:

const x = Boolean(expression);     // use this...
const x = !!(expression);          // ...or this
const x = new Boolean(expression); // don't use this!

The value passed as the first parameter is converted to a boolean value, if necessary. If the value is omitted or is 0, -0, null, false, NaN, undefined, or the empty string (""), the object has an initial value of false. All other values, including any object, an empty array ([]), or the string "false", create an object with an initial value of true.
*/

//!2nd best way
//?https://frontend.turing.edu/lessons/module-1/js-truthy-falsy-expressions.html#:~:text=Vocabulary&text=Truthy%20values%20In%20JavaScript%2C%20a,encountered%20in%20a%20Boolean%20context.
function truthCheck2(collection, pre) {
  // Is everyone being true?
  return collection.every((obj) => obj[pre]);
}

//!Understanding curried funtions
function curried(x) {
  return (y) => x + y;
}
console.log(curried(2)(3));

/*
*Arguments Optional
Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.
*/

function addTogether() {
  const [first, second] = arguments;
  if (typeof first !== "number") return undefined;
  if (second === undefined) return (second) => addTogether(first, second);
  if (typeof second !== "number") return undefined;
  return first + second;
}

console.log(addTogether(2, 3)); // 5
console.log(addTogether()); // undefined
console.log(addTogether(3)(2)); // 5
console.log(addTogether(2)([3])); //undefined
console.log(addTogether(2, "3")); //undefined
console.log(addTogether("2", 3)); //undefined
