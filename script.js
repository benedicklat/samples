function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    if (username === "myusername" && password === "mypassword") {
      alert("Login successful!");
    } else {
      alert("Incorrect username or password. Please try again.");
    }
  }
  