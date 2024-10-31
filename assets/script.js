// Password-protected access for certain pages
document.getElementById("moontuberButton").addEventListener("click", function() {
    checkPassword();
});

function checkPassword() {
    const password = prompt("Please enter the password to access this page:");
    const correctPassword = "moontube123"; // Change to desired password

    if (password === correctPassword) {
        window.location.href = 'secret.html';
    } else {
        alert("Incorrect password. Access denied.");
    }
}
