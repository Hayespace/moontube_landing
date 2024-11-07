import { ethers, BigNumber } from 'ethers';
import { Core } from '@walletconnect/core';
import { WalletKit } from '@reown/walletkit';

const core = new Core({
  projectId: '7a2281ea81b6b46e9136d8f543024872'
});

const metadata = {
  name: 'Moontube',
  description: 'AppKit Example',
  url: 'https://reown.com/appkit',
  icons: ['https://assets.reown.com/reown-profile-pic.png']
};

async function setupWalletConnect() {
  const walletKit = await WalletKit.init({
    core,
    metadata
  });
  return walletKit.getProvider();
}

const contractAddress = '0xa66c5d3e81acb18fb29e312f8da4029cab3c0ee7';
const contractABI = [
  {
    inputs: [
      { internalType: 'address', name: '_to', type: 'address' },
      { internalType: 'uint256', name: '_amount', type: 'uint256' }
    ],
    name: 'mintToMultiple',
    outputs: [],
    stateMutability: 'payable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'uint256', name: '_count', type: 'uint256' }
    ],
    name: 'getPrice',
    outputs: [
      { internalType: 'uint256', name: '', type: 'uint256' }
    ],
    stateMutability: 'view',
    type: 'function'
  }
];

async function mintTokens(toAddress, amount) {
  const provider = await setupWalletConnect();
  const signer = provider.getSigner();
  const contract = new ethers.Contract(contractAddress, contractABI, signer);
  const price = await contract.getPrice(amount);

  const tx = await contract.mintToMultiple(toAddress, amount, {
    value: BigNumber.from(price).toString()
  });

  const receipt = await tx.wait();
  alert('Transaction successful!');
  console.log('Transaction receipt:', receipt);
}

// Attach handleMint directly to window
window.handleMint = async function () {
  const amount = document.getElementById('amount').value;
  if (!amount || isNaN(amount) || amount <= 0) {
    alert('Please enter a valid token amount.');
    return;
  }

  const recipientAddress = '0x342624F2279EAf3b78901c6E81EcffCb44C153Ab';
  await mintTokens(recipientAddress, BigNumber.from(amount));
};
