import React from 'react';

interface ScrumSummaryProps {
  scrumData: {
    userId: string;
    yesterday: string;
    today: string;
    impediments: string;
  }[];
}

export const ScrumSummary: React.FC<ScrumSummaryProps> = ({ scrumData }) => {
  return (
    <div>
      <h2>Scrum Summary</h2>
      {scrumData.map((data, index) => (
        <div key={index}>
          <p>{data.userId}: {data.yesterday}, {data.today}, {data.impediments}</p>
        </div>
      ))}
    </div>
  );
};
