document.getElementById("moontuberButton").addEventListener("click", function() {
    checkPassword();
});

function checkPassword() {
    var password = prompt("Please enter the password to access this page:");

    // Define the correct password
    var correctPassword = "moontube123"; // Change this to your desired password

    if (password === correctPassword) {
        // Redirect to the secret page
        window.location.href = 'secret.html';
    } else {
        // Incorrect password, show an alert and re-prompt
        alert("Incorrect password. Access denied.");
    }
}
