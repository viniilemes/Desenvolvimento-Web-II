// Exemplo de Footer corrigido (Footer.tsx)
import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  width: 100%;
  padding: 1rem;
  background: ${(props) => props.theme.footerBackground || "#f5f5f5"};
  text-align: center;
  font-size: 0.9rem;
  color: ${(props) => props.theme.footerText || "#333"};
`;

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      & copy; {new Date().getFullYear()} Mega - Sena App.Todos os direitos reservados.
    </StyledFooter>
  );
};

export default Footer;
