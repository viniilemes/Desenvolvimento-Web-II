// src/App.tsx
import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
import Megasena from './pages/Megasena';
import { LotteryProvider } from './contexts/LotteryContext';

// Temas de exemplo
const themeLight = {
  background: "#fff",
  text: "#000",
  headerBackground: "#209869",
  headerText: "#fff",
  footerBackground: "#f5f5f5",
  footerText: "#333",
};

const themeDark = {
  background: "#333",
  text: "#fff",
  headerBackground: "#555",
  headerText: "#fff",
  footerBackground: "#444",
  footerText: "#ccc",
};

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <ThemeProvider theme={isDarkMode ? themeDark : themeLight}>
      <LotteryProvider>
        <GlobalStyles />
        <Header />
        <main>
          <Megasena />
        </main>
        <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        <Footer />
      </LotteryProvider>
    </ThemeProvider>
  );
}

export default App;
