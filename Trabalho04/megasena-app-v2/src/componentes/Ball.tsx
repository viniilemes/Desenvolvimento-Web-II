import React from 'react';
import styled from 'styled-components';

const BallContainer = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #4caf50;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  margin: 5px;
`;

const Ball: React.FC<{ number: string }> = ({ number }) => {
  return <BallContainer>{number}</BallContainer>;
};

export default Ball;