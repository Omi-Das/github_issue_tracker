console.log("hi");

// Login Button Element-ti dhorun
const loginBtn = document.getElementById("login-btn");

loginBtn.addEventListener("click", function(event) {
    // Form reload bondho korar jonno
    event.preventDefault();

    // Input field gulo theke value gulo nile
    const userName = document.getElementById("input-username").value;
    const pin = document.getElementById("input-password").value;

    // Validation Check (Shothik Number o Pin kina)
    const validUserName = "admin";
    const validPin = "admin123";

    if (userName === validUserName && pin === validPin) {
        alert("Login successful!");
        // Home page-e niye jaoa hosche
        window.location.href = "main.html"; 
    } else {
        alert("Vul Number athoba Pin diyechen. Abar chesta korun!");
    }
});
