require('dotenv').config();
const HDWalletProvider = require('@truffle/hdwallet-provider');

module.exports = {
  networks: {
    // Local Development Network
    development: {
      host: "127.0.0.1", // Localhost
      port: 8545,        // Port (Ganache default port)
      network_id: "*"    // Any network (for development)
    },
    
    sepolia: {
        provider: () => new HDWalletProvider(
          process.env.MNEMONIC,
          `https://sepolia.infura.io/v3/${process.env.INFURA_API_KEY}`
        ),
        network_id: 11155111, // Sepolia's network ID
        gas: 4500000,
        gasPrice: 10000000000, // 10 Gwei
        networkCheckTimeout: 100000,
        timeoutBlocks: 200
      }
    },


    // Mainnet (for production deployment)
    mainnet: {
      provider: () => new HDWalletProvider(process.env.MNEMONIC, `https://mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`),
      network_id: 1,       // Mainnet ID
      gas: 5500000,        // Gas limit
      gasPrice: 10000000000 // 10 Gwei
    },
  

    compilers: {
      solc: {
        version: "0.8.0", // Specify the Solidity version
      }
    }
};
