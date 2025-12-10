import styled from '@emotion/styled';

// --- Trazemos os Estilos que só a tela de resultado usa ---
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
  background-color: #f0f2f5;
`;

export const Card = styled.div`
  background: white;
  width: 100%;
  max-width: 500px;
  padding: 40px;
  border-radius: 20px;
  border: 2px solid #e5e5e5;
  box-shadow: 0 4px 0 #e5e5e5;
  text-align: center;
`;

export const Title = styled.h2`
  color: #3c3c3c;
  margin-bottom: 10px;
  font-size: 1.8rem;
`;

export const ScoreText = styled.p`
  font-size: 1.2rem;
  color: #777;
  margin-bottom: 30px;
`;

export const RestartButton = styled.button`
  background-color: #58cc02;
  color: white;
  border: none;
  padding: 15px 30px;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 4px 0 #46a302;
  width: 100%;
  text-transform: uppercase;
  
  &:hover {
    filter: brightness(1.1);
  }
  &:active {
    box-shadow: none;
    transform: translateY(4px);
  }
`;
