const inquirer = require("inquirer");

const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const upperCase = lowerCase.toUpperCase();
const numerals = "0123456789";
const specialChars = "!#$%&*+-<=>?@[]^{}~";

const questions = [{
  type: "number",
  message: "What length password do you want? (8-128)",
  name: "pwLength",
  validate: function(value) {
    if (value < 8 || value > 128){
      return 'Please enter a number between 8 and 128!';
    }
    return true;
  }
},{
  type: "checkbox",
  message: "Which character types should be included? (select at least one)",
  name: "charTypes",
  choices: [
    {
      name: "Lower case letters",
    },{
      name: "Upper case letters"
    },{
      name: "Numbers"
    },{
      name: "Special characters"
    }],
  validate: function(answer) {
    if (answer.length < 1) {
      return 'You must choose at least one type!';
    }
    return true;
  }
}];

class Password {
  constructor(pwLength, types){
    let password = "";
    let charOptions = "";
    console.log(`types: ${types}`);

    if (types.includes("L")){
      charOptions+=lowerCase;
    }
    if (types.includes("U")){
      charOptions+=upperCase;
    }
    if (types.includes("N")){
      charOptions+=numerals;
    }
    if (types.includes("S")){
      charOptions+=specialChars;
    }

    for (let i=0; i < pwLength; i++){
      password += charOptions[Math.floor(Math.random() * (charOptions.length))]; 
    }

    this.securePassword = password;
  }
}

inquirer
  .prompt(questions).then((data) => {
    const {pwLength, charTypes} = data;
    //console.log(`pwLength: ${pwLength}`);
    //console.log(`charTypes: ${charTypes}`);
    const password = new Password(pwLength, charTypes.map((word) => word[0]));
    console.log(`Your new password is: ${password.securePassword}`);
    //would you like to make another password? 
});
