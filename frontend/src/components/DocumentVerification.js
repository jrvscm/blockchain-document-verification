import React, { useState } from 'react';
import axios from 'axios';

const DocumentVerification = () => {
  const [documentHash, setDocumentHash] = useState('');
  const [verificationStatus, setVerificationStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleVerifyHash = async () => {
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:5000/verify-hash', { documentHash });
      setVerificationStatus(response.data.isStored ? 'Hash is verified on blockchain!' : 'Hash not found.');
    } catch (error) {
      setVerificationStatus('Error verifying document hash: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="document-verification">
      <h2>Verify Document Hash</h2>
      <input
        type="text"
        placeholder="Enter document hash"
        value={documentHash}
        onChange={(e) => setDocumentHash(e.target.value)}
      />
      <button onClick={handleVerifyHash} disabled={loading || !documentHash}>
        {loading ? 'Verifying...' : 'Verify Hash'}
      </button>
      <p>{verificationStatus}</p>
    </div>
  );
};

export default DocumentVerification;
