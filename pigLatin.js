const translatePigLatin = (str = "") => {
  let consonantRegex = /^[^aeiou]+/;
  let myConsonants = str.match(consonantRegex);
  //console.log(str.replace(consonantRegex, ""));
  //console.log("".concat(myConsonants));
  return myConsonants !== null
    ? str.replace(consonantRegex, "").concat(myConsonants).concat("ay")
    : str.concat("way");
};

console.log(translatePigLatin("consonant"));

function translatePigLatin2(str) {
  if (str.match(/^[aeiou]/)) return str + "way";

  const consonantCluster = str.match(/^[^aeiou]+/)[0];
  // console.log(consonantCluster.length);
  //console.log(str.substring(consonantCluster.length));
  return str.substring(consonantCluster.length) + consonantCluster + "ay";
}

// test here
translatePigLatin2("consonant");

function translatePigLatin3(str) {
  return str
    .replace(/^[aeiou]\w*/, "$&way")
    .replace(/(^[^aeiou]+)(\w*)/, "$2$1ay");
}

// test here
translatePigLatin3("consonant");
