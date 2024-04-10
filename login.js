document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");
    const loginMessage = document.getElementById("loginMessage");
    const rememberCheckbox = document.getElementById("rememberCheckbox");
    
    // Check if there are stored credentials
    const storedUsername = localStorage.getItem("rememberedUsername");
    const storedPassword = localStorage.getItem("rememberedPassword");

    if (storedUsername && storedPassword) {
        // Populate the login form with stored credentials
        document.getElementById("loginUsername").value = storedUsername;
        document.getElementById("loginPassword").value = storedPassword;
    }

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission
        
        // Retrieve username and password from the form
        const username = document.getElementById("loginUsername").value;
        const password = document.getElementById("loginPassword").value;

        // Here you would typically send the username and password to a server for authentication
        // For demonstration purposes, we'll just do a basic check
        
        // Check if both fields are filled
        if (username.trim() === '' || password.trim() === '') {
            loginMessage.textContent = "Please fill in all fields.";
            return;
        }

        // For demonstration purposes, we'll just check if the username is "user" and password is "password"
        if (username === "user" && password === "password") {
            loginMessage.textContent = "Login successful!";

            // Store the credentials if "remember me" is checked
            if (rememberCheckbox.checked) {
                localStorage.setItem("rememberedUsername", username);
                localStorage.setItem("rememberedPassword", password);
            } else {
                // Clear stored credentials if "remember me" is unchecked
                localStorage.removeItem("rememberedUsername");
                localStorage.removeItem("rememberedPassword");
            }
        } else {
            loginMessage.textContent = "Invalid username or password.";
        }
    });
});
