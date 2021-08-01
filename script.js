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

// Function to prompt user for password options
function getPasswordOptions(){
  var length = 
    parseInt(prompt("Choose a password length between 10 - 64 characters."));

    if (length < 10 || length > 64 || isNaN(length)){
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
    //check console log to see the values stored base on user input
    console.log(passwordOptions);
    return passwordOptions; // returns the value of user input within an object array

}
// Function for getting a random element from an array, 'a'
function getRandom(a) {
  var index = Math.floor(Math.random() * a.length);
  return a[index];
}

function generatePassword() {
  // calling getPasswordOptions() to retrieve the value of user input
  var options = getPasswordOptions(); //'var options' is equivalent to line 117

  // add Array [] to store random generated characters
  var result = [];
  var confirmedCharacterType = [];
  var mustInclude = []; //this is to ensure that at least one of each character type that user confirms WILL be included

  //Adding an object of 4 diff arrays (for testing purposes)
  var o = {
  s: specialCharacters, //line 2
  n: numericCharacters, //line 29
  l: lowerCasedCharacters, //line 32
  u: upperCasedCharacters //line 62
          };
  //use push() to add new items to the end of an array
  if (options.special){ 
    confirmedCharacterType = confirmedCharacterType.concat(o.s);
    mustInclude.push(getRandom(o.s));
  }
  if (options.numbers){ 
    confirmedCharacterType = confirmedCharacterType.concat(o.n);
    mustInclude.push(getRandom(o.n));
  }
  if (options.lowerCase){ 
    confirmedCharacterType= confirmedCharacterType.concat(o.l);
    mustInclude.push(getRandom(o.l));
  }
  if (options.upperCase){ 
    confirmedCharacterType = confirmedCharacterType.concat(o.u);
    mustInclude.push(getRandom(o.u));
  }
 
  for (var i = 0; i < options.length; i++){
    result.push(getRandom(confirmedCharacterType));
  }
  for (var i = 0; i <mustInclude.length; i++){
    result[i] = mustInclude[i];
  }
  return result.join('');
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
