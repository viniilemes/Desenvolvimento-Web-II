import React from 'react';
import { LetterProvider } from './contexts/LetterProvider'; // Importando o provedor
import Input from './components/Input';
import Display from './components/Display';

const App: React.FC = () => {
  return (
    <LetterProvider>
      <div style={{ textAlign: 'center', margin: '10px', padding: '10px', borderRadius: '10px' }}>
        <Input />
        <Display />
        </div>
    </LetterProvider>
    
  );
};

export default App;
