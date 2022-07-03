function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins

  // Create a variable for the white space and underscores.
  var regex = /\s+|_+/g;
  console.log(regex);
  // Replace low-upper case to low-space-uppercase
  str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
  console.log(str);

  // Replace space and underscore with -
  return str.replace(regex, "-").toLowerCase();
}

console.log(spinalCase("thisIsSpinalTap"));
