console.log("hi");

const loginBtn = document.getElementById("login-btn");

loginBtn.addEventListener("click", function(event) {
  
    event.preventDefault();

   
    const userName = document.getElementById("input-username").value;
    const pin = document.getElementById("input-password").value;

   
    const validUserName = "admin";
    const validPin = "admin123";

    if (userName === validUserName && pin === validPin) {
        alert("Login successful!");
       
        window.location.href = "main.html"; 
    } else {
        alert("Another Try!");
    }
});
