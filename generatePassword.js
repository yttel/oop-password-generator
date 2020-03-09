

class GeneratePassword {
  static generate(pwLength, types){
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const upperCase = lowerCase.toUpperCase();
    const numerals = "0123456789";
    const specialChars = "!#$%&*+-<=>?@[]^~";

    let password = "";
    let charOptions = "";

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
    //console.log(`charOptions: ${charOptions}`);
    for (let i=0; i < pwLength; i++){
      const randNum = Math.floor(Math.random() * (charOptions.length));
      console.log(`randNum: ${randNum}`);
      password += charOptions[randNum]; 
    }
    return password;
  }
}

module.exports = GeneratePassword;