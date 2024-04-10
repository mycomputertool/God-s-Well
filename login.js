document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");
    const loginMessage = document.getElementById("loginMessage");
    const profileSection = document.getElementById("profileSection");
    const usernameDisplay = document.getElementById("username");
    const rememberCheckbox = document.getElementById("rememberCheckbox");
    const logoutButton = document.getElementById("logoutButton");

    // Check if the user is already logged in
    const loggedInUsername = localStorage.getItem("loggedInUsername");
    if (loggedInUsername) {
        showProfile(loggedInUsername);
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
            
            // Store the login state and username in local storage if "remember me" is checked
            if (rememberCheckbox.checked) {
                localStorage.setItem("loggedInUsername", username);
            } else {
                // Clear stored login state if "remember me" is unchecked
                localStorage.removeItem("loggedInUsername");
            }
            
            // Show the profile section with the logged-in username
            showProfile(username);
        } else {
            loginMessage.textContent = "Invalid username or password.";
        }
    });

    logoutButton.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default button action
        
        // Clear the stored login state and username
        localStorage.removeItem("loggedInUsername");

        // Hide the profile section and show the login section
        profileSection.style.display = "none";
        document.getElementById("loginSection").style.display = "block";
    });

    function showProfile(username) {
        // Hide the login section and show the profile section
        document.getElementById("loginSection").style.display = "none";
        profileSection.style.display = "block";

        // Display the username in the profile section
        usernameDisplay.textContent = "Logged in as: " + username;
    }
});
