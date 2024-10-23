import React, { useEffect, useState } from 'react';

const HeyooGreeting: React.FC = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchGreeting = async () => {
      const response = await fetch('/api/heyoo');
      const data = await response.json();
      setMessage(data.message);
    };
    fetchGreeting();
  }, []);

  return <div>{message}</div>;
};

export default HeyooGreeting;