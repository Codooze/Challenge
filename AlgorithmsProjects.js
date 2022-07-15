/*
*Palindrome Checker
Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.
*/

function palindrome(str) {
  const newStr = str.replace(/[^a-z0-9]/gi, "").toLowerCase(); //remove all non-alphanumeric characters and turn everything into lower case
  const newStr2 = newStr.split("").reverse().join(""); //reverse the string and join it back together
  return newStr === newStr2;
}

console.log(palindrome("eye"));

/*
*Roman Numeral Converter
Convert the given number into a roman numeral.
*/
function convertToRoman(num) {
  const roman = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  let romanNum = "";
  for (let i in roman) {
    while (num >= roman[i]) {
      //while the number is greater than or equal to the roman numeral
      romanNum += i; //add the roman numeral to the string
      //console.log(`romanNum = ${romanNum}, i = ${i}`);
      console.log(`num = ${num} roman[i] = ${roman[i]}`);
      num -= roman[i]; //subtract the value of the roman numeral from the number to be converted to roman
    }
  }
  console.log(romanNum);
}
convertToRoman(36);

/*
*Caesars Cipher
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.
*/

function rot13(str) {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const newAlphabet = "NOPQRSTUVWXYZABCDEFGHIJKLM".split("");
  const newStr = str.split(""); //split the string into an array
  const newStr2 = newStr.map((char) => {
    if (alphabet.includes(char)) {
      //if the character is in the alphabet
      console.log(alphabet.indexOf(char));
      return newAlphabet[alphabet.indexOf(char)]; //return the new alphabet letter at the same index as the old alphabet letter
    } else {
      return char;
    }
  });
  return newStr2.join("");
}

// rot13("SERR PBQR PNZC");
console.log(rot13("SERR YBIR?"));
