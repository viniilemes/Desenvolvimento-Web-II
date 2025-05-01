import React, { useContext } from 'react';
import { LetterContext } from '../contexts/LetterCtx';

const Input: React.FC = () => {
  const { setName } = useContext(LetterContext);

  return (
    <input
      type="text"
      onChange={(e) => setName(e.target.value)}
      placeholder="Digite seu nome"
      style={{
        padding: '10px',
        border: '2px solid #ccc',
        borderRadius: '5px',
        width: '300px',
        marginBottom: '10px', 
        fontStyle: 'italic black',
        color: 'black',
        background: 'white', // Estilo específico para o placeholder
      }}
    />
  );
};

export default Input;

//   </div>
// }
//
// export default App
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
//
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={viteLogo} className="logo" alt="Vite logo" />
//         <img src={reactLogo} className="logo react" alt="React logo" />
//         <h1>Vite + React</h1>
//       </header>
//       <div className="card">   