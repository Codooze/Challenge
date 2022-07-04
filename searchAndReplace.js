function myReplace(str, before, after) {
  //check if first letter is uppercase
  if (before[0] === before[0].toUpperCase()) {
    //if so, make the first letter of after uppercase
    after = after[0].toUpperCase() + after.slice(1);
  } else {
    //if not, make the first letter of after lowercase
    after = after[0].toLowerCase() + after.slice(1); //slice(1) to remove the first letter of after
  }
  str = str.replace(before, after);

  console.log(str);

  return str;
}

console.log(
  myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped")
);

function myReplace2(str, before, after) {
  // Check if first character of argument "before" is a capital or lowercase letter and change the first character of argument "after" to match the case
  if (/^[A-Z]/.test(before)) {
    after = after[0].toUpperCase() + after.substring(1);
  } else {
    after = after[0].toLowerCase() + after.substring(1);
  }

  // return string with argument "before" replaced by argument "after" (with correct case)
  return str.replace(before, after);
}

// test here
console.log(
  myReplace2("A quick brown fox jumped over the lazy dog", "jumped", "leaped")
);
