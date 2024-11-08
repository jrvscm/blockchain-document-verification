import React, { useState } from 'react';
import axios from 'axios';

const DocumentForm = () => {
  const [documentHash, setDocumentHash] = useState('');
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  // Function to handle hash generation (simplified for demo)
  const handleGenerateHash = (e) => {
    e.preventDefault();
    const generatedHash = '0x' + Math.floor(Math.random() * 1e16).toString(16).padEnd(64, '0');
    setDocumentHash(generatedHash);
  };

  // Function to store the hash on the blockchain
  const handleStoreHash = async () => {
    if (!documentHash) return setStatus('Please generate or enter a document hash.');
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:5000/store-hash', { documentHash });
      setStatus(response.data || 'Document hash stored successfully');
    } catch (error) {
      setStatus('Error storing document hash: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="document-form">
      <h2>Store Document Hash</h2>
      <form onSubmit={handleGenerateHash}>
        <button type="submit">Generate Document Hash</button>
      </form>
      <p>Document Hash: <strong>{documentHash || 'None'}</strong></p>
      <button onClick={handleStoreHash} disabled={loading}>
        {loading ? 'Storing...' : 'Store Hash'}
      </button>
      <p>{status}</p>
    </div>
  );
};

export default DocumentForm;
