// Exemplo de Header (Header.tsx)
import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  width: 100%;
  padding: 1rem 2rem;
  background: ${(props) => props.theme.headerBackground || "#209869"};
  color: ${(props) => props.theme.headerText || "#fff"};
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const Title = styled.h1`
  font-size: 1.5rem;
`;

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <Title>Mega-Sena</Title>
    </StyledHeader>
  );
};

export default Header;
