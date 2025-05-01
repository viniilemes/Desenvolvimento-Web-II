import React from 'react';
import { LotteryProvider } from './contexts/LotteryContext';
import Megasena from './pages/Megasena';

export default function App() {
  return (
    <LotteryProvider>
      <Megasena />
    </LotteryProvider>
  );
}
