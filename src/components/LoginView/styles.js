import styled from '@emotion/styled';
import Link from 'next/link';

const colors = {
  rubyRed: '#e02d3a',
  darkRed: '#b91c28',
  hoverRed: '#f24e5b',
  textMain: '#3c3c3c',
  textLight: '#777',
  bgLight: '#f0f2f5'
};

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.bgLight};
  padding: 20px;
`;

export const Card = styled.div`
  background: white;
  width: 100%;
  max-width: 400px;
  padding: 40px;
  border-radius: 20px;
  border: 2px solid #e5e5e5;
  box-shadow: 0 4px 0 #e5e5e5;
  text-align: center;
  
  /* Borda superior vermelha para dar um charme */
  border-top: 5px solid ${colors.rubyRed};
`;

export const Title = styled.h1`
  color: ${colors.textMain};
  margin-bottom: 30px;
  font-size: 1.8rem;
  font-weight: 800;
`;

export const InputGroup = styled.div`
  margin-bottom: 20px;
  text-align: left;
`;

export const Label = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 8px;
  color: ${colors.textLight};
  font-size: 0.9rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 2px solid #e5e5e5;
  border-radius: 12px;
  font-size: 1rem;
  background-color: #f7f7f7;
  transition: all 0.2s;
  color: #333;

  &:focus {
    outline: none;
    border-color: ${colors.rubyRed}; /* Borda vermelha ao clicar */
    background-color: white;
    box-shadow: 0 0 0 3px rgba(224, 45, 58, 0.1); /* Glow suave vermelho */
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 15px;
  background-color: ${colors.rubyRed}; /* Botão Vermelho */
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 12px;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  box-shadow: 0 4px 0 ${colors.darkRed}; /* Sombra 3D Vermelho Escuro */
  margin-top: 10px;
  transition: all 0.1s;

  &:active {
    box-shadow: none;
    transform: translateY(4px);
  }

  &:hover {
    background-color: ${colors.hoverRed};
  }
  
  &:disabled {
    background-color: #ccc;
    box-shadow: none;
    cursor: not-allowed;
  }
`;

export const ErrorMsg = styled.p`
  color: #d8000c;
  font-size: 0.9rem;
  margin-bottom: 15px;
  background-color: #ffbaba;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #d8000c;
`;

export const FooterText = styled.p`
  margin-top: 25px;
  color: ${colors.textLight};
  font-size: 0.9rem;

  a {
    color: ${colors.rubyRed}; /* Link Vermelho */
    font-weight: bold;
    text-decoration: none;
    transition: color 0.2s;
    
    &:hover { 
      text-decoration: underline; 
      color: ${colors.darkRed};
    }
  }
`;