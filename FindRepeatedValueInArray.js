const testObj = {};
testObj[1] = 2;
testObj[2];
const isTrue = testObj[1] ? console.log(true) : console.log(false);
console.log(testObj);
const a = [1, 2, 3, 2];
const findRepeatedNumber = (arr) => {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    console.log(obj[arr[i]]);
    if (obj[arr[i]]) {
      //si es true, es que ya existe el numero en el objeto
      console.log(arr[i]);
      return [arr[i], i + 1];
    } else {
      obj[arr[i]] = true; //si el numero esta en el objeto, dale un valor true
    }
  }
};
console.log(findRepeatedNumber(a));

const arr = [2, 2, 3, 4, 4];
//find how many times a number appears in an array
const findNumberOfOccurrences = (arr) => {
  let obj = {}; //create an object to store the number and its frequency
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) {
      //if the number is already in the object, increase its frequency by 1
      obj[arr[i]]++;
    } else {
      obj[arr[i]] = 1; //if the number is not in the object, add it to the object with frequency 1
    }
  }
  //find the key of the number with the highest frequency
  console.log(obj);
  let max = 0;
  for (let key in obj) {
    //loop through the object to find the key with the highest frequency and its value (frequency) (key, value)
    if (obj[key] > max) {
      max = obj[key];
    }
    max = Object.keys(obj).find((i) => obj[i] === max && i > key); //find the key with the highest frequency and its value (frequency) (key, value)
    console.log(key, max);
    return max;
  }
};
console.log(findNumberOfOccurrences(arr));
