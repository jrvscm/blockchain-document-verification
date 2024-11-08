require('dotenv').config();
const cors = require('cors');
const express = require('express');
const Web3 = require('web3');
const { Pool } = require('pg');
const contractABI = require('../build/contracts/DocumentVerification.json').abi;

const app = express();
const port = 5000;

// Initialize Web3 and connect to the local Ganache network
const web3 = new Web3(process.env.INFURA_URL);
const contractAddress = process.env.CONTRACT_ADDRESS;
const contract = new web3.eth.Contract(contractABI, contractAddress);

// PostgreSQL Database Setup
// const pool = new Pool({
//   connectionString: process.env.DATABASE_URL,
// });

app.use(cors());
// Middleware to parse JSON
app.use(express.json());

// API to store document hash
app.post('/store-hash', async (req, res) => {
  const { documentHash } = req.body;
  try {
    if (!documentHash) {
      return res.status(400).json({ error: "documentHash is required" });
    }
    const accounts = await web3.eth.getAccounts();
    const receipt = await contract.methods.storeDocumentHash(documentHash).send({ from: accounts[0] });
    // console.log("Transaction receipt:", receipt);
    res.status(200).send('Document hash stored successfully');
  } catch (error) {
    // console.error("Error storing document hash:", error);
    res.status(500).json({ error: `Failed to store document hash: ${error.message}` });
  }
});

// API to verify document hash
app.post('/verify-hash', async (req, res) => {
  const { documentHash } = req.body;
  try {
    if (!documentHash) {
      return res.status(400).json({ error: "documentHash is required" });
    }
    const isStored = await contract.methods.isHashStored(documentHash).call();
    // console.log("Document verification result:", isStored);
    res.status(200).json({ isStored });
  } catch (error) {
    // console.error("Error verifying document hash:", error);
    res.status(500).json({ error: `Failed to verify document hash: ${error.message}` });
  }
});

module.exports = app; 
