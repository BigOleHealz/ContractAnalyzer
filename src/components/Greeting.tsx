import React from 'react';

const Greeting: React.FC = () => {
  const currentHour = new Date().getHours();
  const isMorning = currentHour >= 5 && currentHour < 12;

  return (
    <div>
      {isMorning && <h1>Good Morning!</h1>}
    </div>
  );
};

export default Greeting;
