// Assignment Code
var generateBtn = document.querySelector("#generate");

//Special Characters 
var numbers = "0123456789";
var symbols = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lower = "abcdefghijklmnopqrstuvwxyz";
var userChoice="";

function generatePassword() {
  console.log("Button has been clicked");

  //Promts the user with password criteria modal
    var passLength = window.prompt ("Please choose the length of your characters from. You have a min of 8 and a max of 128 characters");
    console.log(passLength);
    //if clicks cancel will alert the user of an error
    if (!passLength) {
      window.alert("Please add a value"); 
      console.log("User Failed to add value");
      return "";
      
    } 
    //sets number range for the password
    // If the length not between 8 or 128 characters then loop back to original prompt
    else if (passLength <8 || passLength > 128 ) {
      window.alert("Try choosing a number between 8 and 128");
      generatePassword()
      return "";
    } 
    
    // Once the password length passes critera, the user can choose lowercase or uppercase or numbers or special characters 
    else {
      var comNum = window.confirm("Add numbers to my password");
      console.log(comNum);
      var comSym = window.confirm ("Add symbols ex: #$%& to my password");
      console.log(comSym);
      var comUpp = window.confirm ("Add uppercase letters to my password");
      console.log(comUpp);
      var comLow = window.confirm ('add lowercase letters to my password');
      console.log(comLow);     
    } 

     //Validate the input - ensure the character criterias has been met and at min one character type is selected
     //  If no criteria chosen, the prompt will alert the user that there is an error and loops the choices back in

     if (!comNum && !comSym && !comUpp && !comLow) {
      window.alert ("please choose at least one critera");
     var comNum = window.confirm ("Add numbers to my password");
     var comSym = window.confirm ("Add symbols ex: #$%& to my password");
     var comUpp = window.confirm ("Add uppercase letters to my password");
     var comLow = window.confirm ('add lowercase letters to my password');
    } 
     
    //Conditions that allows the user to pick and choose 
      if (comNum && comSym && comUpp && comLow) {
        userChoice = numbers.concat(symbols, upper, lower);
      }
      else if (comNum && comSym) {
        userChoice = numbers.concat(symbols);
      }
      else if (comNum && comUpp) {
        userChoice = numbers.concat(upper);
      }
      else if (comNum && comLow) {
        userChoice = numbers.concat(lower);
      }
      else if (comNum) {
        userChoice += numbers;
      }
      else if (comSym) {
        userChoice += symbols;
      } 
      else if (comUpp) {
        userChoice += upper;
      } 
      else if (comLow) {
        userChoice += lower;
      }; 

      //3. Generate a password  (this is broken - need help to fix )  
      var userPass=""; 
      for ( var i=0; i <= passLength; i++) {
        userPass += userChoice.charAt(Math.floor(Math.random() * userChoice.length));
        console.log(userPass);
      }
      
      
  //4. Display it on the page
  return userPass;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); //called but never been defined
  var passwordText = document.querySelector("#password"); 

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 

