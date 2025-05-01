import React, { useContext } from 'react';
import { LetterContext } from '../contexts/LetterCtx';
import Ball from './Ball';

const Display: React.FC = () => {
  const { name } = useContext(LetterContext);

  if (!name) {
    return <p style={{ border: '2px solid grey', padding: '10px', borderRadius: '5px' }}>Sem entrada</p>;
  }
  

  return (
    <div>
      {name.split('').map((letter, index) => (
        <Ball key={index} letter={letter} />
      ))}
    </div>
  );
};

export default Display;
