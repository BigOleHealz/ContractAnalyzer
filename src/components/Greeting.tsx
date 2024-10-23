import React from 'react';

const Greeting: React.FC = () => {
  const currentHour = new Date().getHours();
  const isMorning = currentHour >= 5 && currentHour < 12;

  if (!isMorning) {
    return null;
  }

  return (
    <div className="p-4 bg-blue-100 text-blue-800 rounded-md">
      <h1 className="text-2xl font-bold">Good Morning!</h1>
      <p>Hope you have a great day ahead!</p>
    </div>
  );
};

export default Greeting;
