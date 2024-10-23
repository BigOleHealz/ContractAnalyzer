import React, { useState } from 'react';

export const ScrumPrompt: React.FC = () => {
  const [yesterday, setYesterday] = useState('');
  const [today, setToday] = useState('');
  const [impediments, setImpediments] = useState('');

  const handleSubmit = () => {
    console.log('Yesterday:', yesterday);
    console.log('Today:', today);
    console.log('Impediments:', impediments);
    // Add logic to send data to the backend
  };

  return (
    <div>
      <h2>Daily Scrum Update</h2>
      <textarea placeholder="What did you do yesterday?" value={yesterday} onChange={(e) => setYesterday(e.target.value)} />
      <textarea placeholder="What will you do today?" value={today} onChange={(e) => setToday(e.target.value)} />
      <textarea placeholder="Any impediments?" value={impediments} onChange={(e) => setImpediments(e.target.value)} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default ScrumPrompt;
