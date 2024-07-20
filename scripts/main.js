let myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";

let loginButton = document.querySelector("#Login");
let signUpButton = document.querySelector("#SignUp");

loginButton.onclick = function () {
    let name = prompt("Enter your name:");
    alert(`Your name is ${name}`);
}