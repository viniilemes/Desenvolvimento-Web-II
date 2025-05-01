// src/components/ThemeToggle.tsx
import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import styled from "styled-components";

// Container com posicionamento fixo para o botão flutuante
const ToggleButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  border: none;
  background: transparent;
  cursor: pointer;
  font-size: 1.2rem;
`;

interface ThemeToggleProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDarkMode, toggleTheme }) => {
  return (
    <ToggleButton onClick={toggleTheme}>
      {isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
    </ToggleButton>
  );
};

export default ThemeToggle;
