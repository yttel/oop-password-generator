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

    for (let i=0; i < pwLength; i++){
      password += charOptions[Math.floor(Math.random() * (charOptions.length))]; 
    }
    return password;
  }
}

module.exports = GeneratePassword;