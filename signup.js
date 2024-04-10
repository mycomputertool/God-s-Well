document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const signupUsername = document.getElementById("signupUsername").value;
    const signupPassword = document.getElementById("signupPassword").value;

    // Perform AJAX request to create new account
    // On success, redirect to login page
    // On failure, display error message
});
