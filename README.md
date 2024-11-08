# Document Verification Project

This project is a blockchain-based document verification system using Ethereum smart contracts, a React frontend, and a Node.js backend. It demonstrates decentralized document verification on the Sepolia testnet.

## Project Structure

Here's an overview of the project's main directories:

- **backend/**: Contains the Node.js server code that interacts with the Ethereum blockchain and provides API endpoints for the frontend.
- **contracts/**: Holds the smart contract files written in Solidity. The main contract for document verification is here.
- **frontend/**: Contains the React frontend application that interacts with the backend APIs.
- **migrations/**: Truffle migration scripts used to deploy the smart contracts to a blockchain network.
- **test/**: Test files for the smart contracts, written in JavaScript, for use with Truffle's testing framework.

## Files and Configuration

- **truffle-config.js**: Configuration file for Truffle, specifying network settings for local and testnet deployments.
- **.env**: Environment file that holds sensitive information like mnemonic and Infura API keys. (Excluded from Git by .gitignore.)

## Setup and Installation

#### Prerequisites

- Node.js and npm
- Truffle and Ganache (for local development)
- A MetaMask wallet (for connecting to the Sepolia testnet)

### Install Dependencies

From the project root directory, install the dependencies:

```
npm install
```

Then, navigate to frontend/ and backend/ folders and install dependencies for each:

```
cd frontend
npm install
cd ../backend
npm install
```

### Environment Variables

Create a .env file in the root directory and add the following keys:

```
MNEMONIC=your-wallet-mnemonic
INFURA_API_KEY=your-infura-project-id
```

### Compile and Deploy Contracts

To compile the contracts, run:

```
truffle compile
```

### To deploy the contracts locally:

```
truffle migrate --network development
```

### To deploy on Sepolia (requires Sepolia testnet ETH):

```
truffle migrate --network sepolia --reset
```

### Running the Project

#### Backend: 

Start the backend server from the root folder:

```
cd backend
node index.js
```

#### Frontend: 

Start the frontend React app:

```
cd frontend
npm start
```

### Usage: 

##### Store Document Hash: 
The backend provides an API to store a document hash on the blockchain.

##### Verify Document Hash: 
The frontend allows users to verify if a document hash exists on the blockchain.

### Project Status

This project is set up as a demo, and the deployment to Sepolia testnet is optional. Testnet ETH is not required if only local testing is needed.

### Future Improvements

Implement frontend styling for a better user experience.
Add more comprehensive testing on both the frontend and backend.
Integrate with additional blockchain networks if desired.

### License
This project is open-source and available under the MIT License.
