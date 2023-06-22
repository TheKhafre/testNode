const { ethers } = require('ethers');

async function deployLightNode() {
  const provider = new ethers.providers.JsonRpcProvider('https://alfajores-forno.celo-testnet.org');
  
  const privateKey = 'YOUR_PRIVATE_KEY_HERE'; // Replace with your private key
  const wallet = new ethers.Wallet(privateKey, provider);

  const lightNodeFactory = await ethers.getContractFactory('LightNode');
  const lightNode = await lightNodeFactory.connect(wallet).deploy();

  console.log(`Light Node deployed at address: ${lightNode.address}`);
}

deployLightNode().catch(console.error);