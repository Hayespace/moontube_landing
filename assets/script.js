// Detect if the user is on a mobile device
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

// Function for RainbowKit wallet connection
async function connectWalletRainbowKit() {
    const { chains, provider } = wagmi.configureChains(
        [wagmi.mainnet, wagmi.polygon],
        [wagmi.publicProvider()]
    );

    const client = wagmi.createClient({
        autoConnect: true,
        connectors: wagmi.getDefaultWallets({
            appName: 'Moontube NFT App',
            chains,
        }).connectors,
        provider
    });

    const { WagmiConfig, RainbowKitProvider } = RainbowKit;
    new WagmiConfig({
        client
    });
    new RainbowKitProvider({
        chains
    });

    // Use the client to connect to the wallet
    const { address, isConnected } = wagmi.useAccount();

    if (!isConnected) {
        alert("Please connect your wallet!");
        return;
    }

    console.log(`Connected wallet address: ${address}`);
    // Proceed with minting logic here if required
}

// Password-protected access function
function checkPassword() {
    const password = prompt("Please enter the password to access this page:");
    const correctPassword = "moontube123"; // Change to desired password

    if (password === correctPassword) {
        window.location.href = 'secret.html';
    } else {
        alert("Incorrect password. Access denied.");
    }
}
