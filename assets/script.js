const contractAddress = "0xa66c5d3e81acb18fb29e312f8da4029cab3c0ee7";
const abi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"AddressNotAllowlisted","type":"error"},{"inputs":[],"name":"AllowlistMintClosed","type":"error"},{"inputs":[],"name":"CannotBeNullAddress","type":"error"},{"inputs":[],"name":"CapExceeded","type":"error"},{"inputs":[],"name":"DuplicateTeamAddress","type":"error"},{"inputs":[],"name":"ERC20InsufficientAllowance","type":"error"},{"inputs":[],"name":"ERC20InsufficientBalance","type":"error"},{"inputs":[],"name":"ERC20TokenNotApproved","type":"error"},{"inputs":[],"name":"ERC20TransferFailed","type":"error"},{"inputs":[],"name":"ERC721RestrictedApprovalAddressRestricted","type":"error"},{"inputs":[],"name":"ExcessiveOwnedMints","type":"error"},{"inputs":[],"name":"InvalidPayment","type":"error"},{"inputs":[],"name":"InvalidTeamAddress","type":"error"},{"inputs":[],"name":"MintZeroQuantity","type":"error"},{"inputs":[],"name":"NoStateChange","type":"error"},{"inputs":[],"name":"NotMaintainer","type":"error"},{"inputs":[],"name":"OnlyERC20MintingEnabled","type":"error"},{"inputs":[{"internalType":"address","name":"operator","type":"address"}],"name":"OperatorNotAllowed","type":"error"},{"inputs":[],"name":"PublicMintClosed","type":"error"},{"inputs":[],"name":"TransactionCapExceeded","type":"error"},{"inputs":[],"name":"ValueCannotBeZero","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"CONTRACT_VERSION","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_WALLET_MINTS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PRICE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PROVIDER_FEE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_baseTokenExtension","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_baseTokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_erc20TokenContract","type":"address"},{"internalType":"bool","name":"_isActive","type":"bool"},{"internalType":"uint256","name":"_chargeAmountInTokens","type":"uint256"}],"name":"addOrUpdateERC20ContractAsPayment","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"addToTeam","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseTokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"canMintAmount","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_erc20TokenContract","type":"address"}],"name":"chargeAmountForERC20","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"closeAllowlistMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"collectionSize","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"contractURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"currentTokenId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"disableAllowlistOnlyMode","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_erc20TokenContract","type":"address"}],"name":"disableERC20ContractAsPayment","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"disableERC20OnlyMinting","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"enableAllowlistOnlyMode","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_erc20TokenContract","type":"address"}],"name":"enableERC20ContractAsPayment","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"enableERC20OnlyMinting","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"erc20Payable","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getNextTokenId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_count","type":"uint256"}],"name":"getPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"inTeam","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"bytes32[]","name":"_merkleProof","type":"bytes32[]"}],"name":"isAllowlisted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_erc20TokenContract","type":"address"}],"name":"isApprovedForERC20Payments","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxBatchSize","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"merkleRoot","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_qty","type":"uint256"}],"name":"mintToAdminV2","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"mintToMultiple","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"bytes32[]","name":"_merkleProof","type":"bytes32[]"}],"name":"mintToMultipleAL","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"address","name":"_erc20TokenContract","type":"address"}],"name":"mintToMultipleERC20","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"bytes32[]","name":"_merkleProof","type":"bytes32[]"},{"internalType":"address","name":"_erc20TokenContract","type":"address"}],"name":"mintToMultipleERC20AL","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"mintingOpen","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nextOwnerToExplicitlySet","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"onlyAllowlistMode","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"onlyERC20MintingMode","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"openAllowlistMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"openMinting","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"payableAddressCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"payableAddresses","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"payableFees","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"removeFromTeam","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"restrictedApprovalAddresses","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"},{"internalType":"bool","name":"_isRestricted","type":"bool"}],"name":"setApprovalRestriction","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"baseExtension","type":"string"}],"name":"setBaseTokenExtension","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"baseURI","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newErc20Payable","type":"address"}],"name":"setERC20PayableAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newMaxMint","type":"uint256"}],"name":"setMaxMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_feeInWei","type":"uint256"}],"name":"setPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_fee","type":"uint256"}],"name":"setProviderFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_newStatus","type":"bool"}],"name":"setStrictPricing","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newWalletMax","type":"uint256"}],"name":"setWalletMax","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"stopMinting","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"strictPricing","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"_newMerkleRoot","type":"bytes32"}],"name":"updateMerkleRoot","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_tokenContract","type":"address"},{"internalType":"uint256","name":"_amountToWithdraw","type":"uint256"}],"name":"withdrawERC20","outputs":[],"stateMutability":"nonpayable","type":"function"}];

let web3;
let contract;
let userAddress;
let isConnected = false;
let provider;

// Detect device and set wallet connection method
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

async function initWeb3() {
    if (window.ethereum) {
        web3 = new Web3(window.ethereum);
        contract = new web3.eth.Contract(abi, contractAddress);
        console.log("Contract initialized");
    } else if (isMobile) {
        await connectWithRainbowKit();
    } else {
        alert("Please install MetaMask or a compatible wallet.");
    }
}

// Initialize RainbowKit for Mobile Users
async function connectWithRainbowKit() {
    // Initialize RainbowKit
    provider = await RainbowKit.init({
        appName: "Moontube",
        chains: [{ name: "Ethereum", network: "sepolia" }]  // Use Sepolia for testnet
    });

    const accounts = await provider.enable();
    userAddress = accounts[0];
    document.getElementById("walletActionButton").innerText = "Mint NFT";
    isConnected = true;
    document.getElementById("status").innerText = "Connected to Ethereum network.";
    loadMintedStatus();
    updateGasEstimate();
}

// Connect wallet on button click
async function handleButtonClick() {
    if (!isConnected) {
        try {
            if (isMobile) {
                await connectWithRainbowKit();
            } else {
                const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                userAddress = accounts[0];
                document.getElementById("walletActionButton").innerText = "Mint NFT";
                isConnected = true;
                document.getElementById("status").innerText = "Connected to Ethereum network.";
                loadMintedStatus();
                updateGasEstimate();
            }
        } catch (error) {
            console.error("Wallet connection failed:", error);
            document.getElementById("status").innerText = "Connection failed.";
        }
    } else {
        mintNFT();
    }
}

// Load Minted Status
async function loadMintedStatus() {
    try {
        const totalSupply = await contract.methods.totalSupply().call();
        const collectionSize = await contract.methods.collectionSize().call();
        document.getElementById('mintedStatus').innerText = `${totalSupply}/${collectionSize} NFTs minted`;
    } catch (error) {
        console.error("Error loading minted status:", error);
        document.getElementById('mintedStatus').innerText = "Error loading minted status.";
    }
}

// Estimate Gas
async function updateGasEstimate() {
    if (!isConnected) {
        document.getElementById("gasEstimate").innerText = "Connect wallet to estimate gas.";
        return;
    }
    
    const quantity = parseInt(document.getElementById("mintAmount").value) || 1;
    const mintPrice = web3.utils.toWei('0.21', 'ether');

    try {
        const gasEstimate = await contract.methods.mintToMultiple(userAddress, quantity).estimateGas({
            from: userAddress,
            value: web3.utils.toBN(mintPrice).mul(web3.utils.toBN(quantity))
        });
        document.getElementById("gasEstimate").innerText = `Estimated Gas: ${gasEstimate} units`;
    } catch (error) {
        console.error("Error fetching gas estimate:", error);
        document.getElementById("gasEstimate").innerText = "Error calculating gas.";
    }
}

// Mint NFT
async function mintNFT() {
    const quantity = parseInt(document.getElementById("mintAmount").value) || 1;
    const mintPrice = web3.utils.toWei('0.21', 'ether');
    const totalCost = web3.utils.toBN(mintPrice).mul(web3.utils.toBN(quantity));

    try {
        document.getElementById("status").innerText = "Minting in progress...";
        await contract.methods.mintToMultiple(userAddress, quantity).send({
            from: userAddress,
            value: totalCost
        });
        document.getElementById("status").innerText = "NFT successfully minted!";
        loadMintedStatus(); // Update minted count after minting
    } catch (error) {
        console.error("Minting failed:", error);
        document.getElementById("status").innerText = "Minting failed. Try again.";
    }
}

// Initialize Web3 on page load
window.onload = initWeb3;

// Update gas estimate when quantity changes
document.getElementById("mintAmount").addEventListener("change", updateGasEstimate);

// Password Protection
function checkPassword() {
    const password = prompt("Please enter the password to access this page:");
    if (password === "moontube123") {
        window.location.href = 'secret.html';
    } else {
        alert("Incorrect password. Access denied.");
    }
}

// RainbowKit Wallet Button Event for Mobile Users
document.getElementById("rainbowWalletButton").onclick = connectWithRainbowKit;
