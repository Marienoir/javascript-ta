// complete the function
function palindrom(str) {
  // code goes here
  
  var regex = "/[\W_/g";  //declare a variable of regular expression
  var lowerCase =str.toLowerCase().replace(regex,""); //convert string to lowercase and replace with string
  var reverseString = lowerCase.split("").reverse().join(""); //split the lowercase into letters
  return reverseString === lowerCase; //compares the reverseString and lowerCase and returns true if it is a palindrome and false if not a palindrome
}

function solution(arg) {
  return palindrom(arg);
}

if (typeof require !== "undefined" && require.main === module) {
  if (process.argv.length <= 2) {
    throw Error("Require argument");
  }

  const arg = process.argv[2];
  console.log(solution(arg));
}

module.exports = { solution };
