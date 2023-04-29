class User {
    constructor(username, password) {
      this.username = username;
      this.password = password;
    }
  
    get getPassword() {
      return "*".repeat(this.password.length);
    }
  
    set setPassword(newPassword) {
      if (newPassword.length >= 8 && /[A-Z]/.test(newPassword) && /\d/.test(newPassword)) {
        this.password = newPassword;
      } else {
        console.error("Invalid Password");
      }
    }
  }

  const user = new User("Pratik","pratik@23");
  console.log(user.getPassword());
  
