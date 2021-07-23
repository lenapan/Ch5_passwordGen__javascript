// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];
var o = {s:specialCharacters, n:numericCharacters, l:lowerCasedCharacters, u:upperCasedCharacters};
// specialCharacters | numericCharacters | lowerCasedCharacters | upperCasedCharacters
console.log(Math.random());
// Function to prompt user for password options
function getPasswordOptions(){
  var length = 
    prompt("Choose a character length between 10 - 64 for your password");

    if (length < 10 || length > 64){
      alert('Please try again. You must pick a number between 10 - 64.');
      return; //if true; function stops or ends with the above alert
    }

//use confirm() to store boolean values:
    var special = confirm("Do you want to include special characters?");
    var numbers = confirm("Do you want to include numbers?");
    var lowerCase = confirm("Do you want to include lowercase characters?");
    var upperCase = confirm("Do you want to include uppercase characters?");

//Create an object {} so that the value from user input can be stored and read:
    var passwordOptions = {
      length: length,
      special: special,
      numbers: numbers,
      lowerCase: lowerCase,
      upperCase: upperCase 
    };

    return passwordOptions;
}


// Function for getting a random element from an array
function getRandom(arr) {

}
var o = {
  s: specialCharacters, 
  n: numericCharacters, 
  l: lowerCasedCharacters, 
  u: upperCasedCharacters
};
// Function to generate password with user input
function generatePassword() {
  // call getPasswordOptions and store password to variable,'option'
  var options = getPasswordOptions();

  // add Array [] to store random generated characters
  var result = [];
  var randomCharacters = [];

  //use push() to add new items to the end of an array
  if (options.special){ //if user confirms 'special characters'
    randomCharacters.push(getRandom(o.s));
  }
  if (options.numbers){ //if user confirms 'numeric characters'
    randomCharacters.push(getRandom(o.n));
  }
  if (options.lowerCase){ // if user confirms 'lowercase characters'
    randomCharacters.push(getRandom(o.l));
  }
  if (options.upperCase){ // if user confirms 'uppercase characters'
    randomCharacters.push(getRandom(o.u));
  }
  return result.join('');
  //"The join() method creates and returns a new string by concatenating all of the elements in an array."
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate'); //<button>

// Write password according to #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password'); //<text area>

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
