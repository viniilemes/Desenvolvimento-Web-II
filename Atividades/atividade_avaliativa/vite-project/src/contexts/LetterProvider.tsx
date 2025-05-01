import React, { useState, ReactNode } from 'react';
import { LetterContext } from './LetterCtx';

export const LetterProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [name, setName] = useState('');

  return (
    <LetterContext.Provider value={{ name, setName }}>
      {children}
    </LetterContext.Provider>
  );
};
