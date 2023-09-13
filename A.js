function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "student01" && password === "1234") {
        alert("your username and password are correct! you are logged in.");
    } else {
        alert("your username or password is incorrect! please try again.");
    }
}