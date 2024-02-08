import React, { useState, useEffect } from 'react';
import './App.css';
import './components/AdviceDisplay';
import AdviceDisplay from './components/AdviceDisplay';
import FetchButton from './components/FetchButton';
import { fetchAdvice } from './services/adviceService';

const App = () => {
  const [advice, setAdvice] = useState('');

  const handleFetch = async () => {
    try {
      const newAdvice = await fetchAdvice();
      setAdvice(newAdvice);
    } catch (error) {
      console.error('Failed to fetch new advice:', error);
    }
  };

  // Use useEffect to call handleFetch when the component mounts
  useEffect(() => {
    handleFetch();
  }, []); // The empty dependency array ensures this effect runs only once

  return (
    <div className='adviceContainer'>
      <AdviceDisplay advice={advice} />
      <FetchButton onFetch={handleFetch} />
    </div>

  );
}

export default App;
