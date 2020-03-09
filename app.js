const inquirer = require("inquirer");
const Password = require("./password");
const GeneratePassword = require("./generatePassword");

const questions = [{
  type: "number",
  message: "\nWhat length password do you want? (8-128)",
  name: "pwLength",
  validate: function(value) {
    const valid = (value > 8) && (value < 128) && (!isNaN(parseFloat(value)));
    return valid || "Please enter a number between 8 and 128!";
  },
  // filter: Number
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
      return "You must choose at least one type!";
    }
    return true;
  }
}];

class App{
  static makeAnother(){
    return inquirer
      .prompt([{
        type: "input",
        name: "doItAgain",
        message: "Do you want to make another password?"
      }]).then(({doItAgain}) => {
        if ((doItAgain[0] === "y") || (doItAgain[0] === "Y")){
          return this.init();
        }
        return false;
      });
  }

  static init(){
    return inquirer
      .prompt(questions).then((data) => {
        const {pwLength, charTypes} = data;

        const genPassword = GeneratePassword.generate(pwLength, charTypes.map((word) => word[0]));
        const password = new Password(genPassword);

        console.log(`\nYour new password is: ${password.getPassword()}\n`);
        
        //copy to clipboard?

        // function copyToClipboard() {
        //   document.getElementById('newPassword').select();
        //   document.execCommand('copy');
        // }

        // write password to 'clipboard'
        // console.log(`Your new password has been copied to clipboard.`);

        //would you like to make another password?
        return this.makeAnother();    
        
  });
  }
}

module.exports = App;