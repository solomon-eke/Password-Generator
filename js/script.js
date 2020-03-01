// Assignment Code
let generateBtn = document.querySelector("#generate");
// create and array that will contain the upper case letters
let upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "V",
  "W",
  "X",
  "Y",
  "Z"
];
// create and array that will contain the lower case letters
let lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];
// create and array that will contain the special characters
let specialCharacter = ["!", "#", "$", "%", "(", ")", "*", "+", "@", "&"];
// create and array that will contain the numbers
let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// create a function that will generate the password
function generatePassword() {
  // prompt the user to include the password size
  let passwordSize = prompt("Give me a length between 8 and 128");
  // if the password size meets the required condition, run the code below
  if (passwordSize >= 8 && passwordSize <= 128) {
    // declare a variable called password and assign it an empty string
    let password = "";
    let userInputSpecialCharacter = confirm(
      "Do you want to include a special character?"
    );
    let userInputUpperCase = confirm(
      "Do you wish to include upper case letters?"
    );
    let userInputLowerCase = confirm(
      "Do you wish to include lower case letters?"
    );
    let userInputNumber = confirm("Do you want to include numbers?");
    // if any of the conditions is true
    if (
      userInputSpecialCharacter ||
      userInputUpperCase ||
      userInputLowerCase ||
      userInputNumber
    ) {
      // while the length of the password input by the user is less than the required password length
      while (password.length < passwordSize) {
        if (userInputSpecialCharacter) {
          password +=
            specialCharacter[
              Math.floor(Math.random() * specialCharacter.length)
            ];
        }
        if (userInputUpperCase) {
          password += upperCase[Math.floor(Math.random() * upperCase.length)];
        }
        if (userInputLowerCase) {
          password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
        }
        if (userInputNumber) {
          password += number[Math.floor(Math.random() * number.length)];
        }
      }
      // Ensure the password has a minimum of 8 and maximum of 128 characters
      let passwordLength = passwordSize;
      let trimmedPassword = password.substring(0, passwordSize);
      // return the trimmed password
      return trimmedPassword;
    } else {
      alert(
        "Hey, user must select aleast one of the critaria to get a strong password"
      );
    }
    // if it did not meet the requirement alert the user
  } else {
    alert("The length of the password is not right");
    return;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", function() {
  let passwordText = document.querySelector("#password");
  // put the value of the generate password into the field of the password text
  passwordText.value = generatePassword();
});
