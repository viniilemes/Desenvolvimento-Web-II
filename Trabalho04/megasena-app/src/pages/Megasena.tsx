import React, { useContext } from 'react';
import styled from 'styled-components';
import { LotteryContext } from '../contexts/LotteryContext';
import Ball from '../componentes/Ball'; // Ensure the Ball component exists in the specified path

const MegasenaContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #f0f0f0; // Ajuste conforme necessário
`;

const ResultContainer = styled.div`
    background-color: rgba(255, 255, 255, 0.8);
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    text-align: center;
`;

const NumbersContainer = styled.div`
    display: flex;
`;

const Megasena: React.FC = () => {
  const { megasena } = useContext(LotteryContext);

  if (!megasena) {
    return <div>Carregando...</div>; // Mensagem de carregamento
  }

  return (
    <MegasenaContainer>
      <ResultContainer>
        <h1>MEGA-SENA</h1>
        <NumbersContainer>
          {megasena.dezenas.map((number, index) => (
            <Ball key={index} number={number} />
          ))}
        </NumbersContainer>
        <p>{megasena.dataPorExtenso}</p>
      </ResultContainer>
    </MegasenaContainer>
  );
};

export default Megasena;