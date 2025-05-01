import React from 'react';

interface BallProps {
  letter: string;
}

const Ball: React.FC<BallProps> = ({ letter }) => {
  return <div style={{ padding: '10px', border: '2px solid #000', margin: '5px', borderRadius: '50%' }}>{letter}</div>;
};

export default Ball;

