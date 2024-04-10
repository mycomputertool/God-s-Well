document.addEventListener("DOMContentLoaded", function() {
    const signupForm = document.getElementById("signupForm");
    const signupMessage = document.getElementById("signupMessage");

    signupForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission
        
        // Retrieve username and password from the form
        const username = document.getElementById("signupUsername").value;
        const password = document.getElementById("signupPassword").value;

        // Here you would typically send the username and password to a server for signup process
        // For demonstration purposes, we'll just show a success message
        
        // Check if both fields are filled
        if (username.trim() === '' || password.trim() === '') {
            signupMessage.textContent = "Please fill in all fields.";
            return;
        }

        // For demonstration purposes, we'll just display a success message
        signupMessage.textContent = "Signup successful!";
    });
});
