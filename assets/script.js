// Function to detect if the user is on a mobile device
function isMobileDevice() {
    return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
}

// Toggle visibility based on device
window.onload = function() {
    if (isMobileDevice()) {
        document.getElementById('desktop-minting-button').style.display = 'none';
        document.getElementById('mobile-wallet-connect').style.display = 'block';
    } else {
        document.getElementById('desktop-minting-button').style.display = 'block';
        document.getElementById('mobile-wallet-connect').style.display = 'none';
    }
};

// RainbowKit wallet connection function for mobile users
async function connectWalletRainbowKit() {
    alert("RainbowKit Wallet Connect Placeholder - Implement Wallet Connection Here");
    // Implement RainbowKit initialization and wallet connection here
}

// Password-protected page access function
function checkPassword() {
    const password = prompt("Please enter the password to access this page:");
    const correctPassword = "moontube123"; // Change to your desired password

    if (password === correctPassword) {
        window.location.href = 'secret.html';
    } else {
        alert("Incorrect password. Access denied.");
    }
}
