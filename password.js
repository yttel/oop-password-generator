class Password {
  constructor(password){
    this._password = password;
  }
  getPassword() {
    return this._password;
  }
}

// function copyToClipboard() { //copy to clipboard
//   document.getElementById('newPassword').select();
//   document.execCommand('copy');
// }

module.exports = Password;