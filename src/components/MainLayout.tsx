import React from 'react';
import Greeting from './Greeting';

const MainLayout: React.FC = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Greeting />
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
