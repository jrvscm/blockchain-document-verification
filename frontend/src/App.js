import React from 'react';
import DocumentForm from './components/DocumentForm';
import DocumentVerification from './components/DocumentVerification';
import './App.css';

const App = () => (
  <div className="App">
    <h1>Document Verification System</h1>
    <DocumentForm />
    <DocumentVerification />
  </div>
);

export default App;
