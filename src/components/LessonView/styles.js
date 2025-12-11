import styled from '@emotion/styled';

const colors = {
  rubyRed: '#e02d3a',
  bgPage: '#202020',
  bgApp: '#ffffff',
  correct: '#d7ffb8',
  correctText: '#58a700',
  wrong: '#ffdfe0',
  wrongText: '#ea2b2b'
};

export const Container = styled.div`
  min-height: 100vh;
  background-color: #f0f2f5; /* Cinza claro nas laterais (adeus preto!) */
  display: flex;
  justify-content: center; /* Centraliza o app */
`;

export const AppScreen = styled.div`
  width: 100%;
  max-width: 600px; /* Largura máxima estilo mobile */
  background-color: white;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  box-shadow: 0 0 20px rgba(0,0,0,0.05); /* Sombra suave nas laterais */
  position: relative;
`;

export const Header = styled.header`
  display: flex;
  align-items: center; /* Alinha tudo verticalmente no centro */
  justify-content: space-between;
  padding: 20px;
  gap: 15px; /* Espaço entre os itens */
  height: 70px;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #e5e5e5;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  &:hover { color: #777; }
`;

export const ProgressBarContainer = styled.div`
  flex-grow: 1; /* Ocupa todo o espaço do meio */
  display: flex;
  align-items: center;
`;

export const HeartsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${colors.rubyRed};
  font-weight: bold;
  font-size: 1.2rem;
  min-width: 60px; /* Garante espaço fixo para não pular */
  justify-content: flex-end;
`;

export const Content = styled.div`
  flex-grow: 1;
  padding: 20px 40px; /* Mais margem interna */
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.h2`
  color: #3c3c3c;
  margin-bottom: 40px;
  font-size: 1.8rem;
  line-height: 1.4;
`;

export const OptionsGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Footer = styled.footer`
  padding: 30px 40px;
  border-top: 2px solid #e5e5e5;
  
  background-color: ${props => 
    props.status === 'correct' ? colors.correct : 
    props.status === 'wrong' ? colors.wrong : 'white'};
    
  border-color: ${props => 
    props.status === 'correct' ? colors.correctText : 
    props.status === 'wrong' ? colors.wrongText : '#e5e5e5'};
`;

export const FeedbackMsg = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 15px;
  animation: slideUp 0.3s ease;
  
  @keyframes slideUp {
    from { transform: translateY(20px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }

  h3 {
    margin: 0;
    font-size: 1.5rem;
    font-weight: 800;
    color: ${props => props.status === 'correct' ? colors.correctText : colors.wrongText};
  }
  
  p {
    margin: 5px 0 0 0;
    font-size: 1.1rem;
    color: ${props => props.status === 'correct' ? colors.correctText : colors.wrongText};
  }
`;

export const CheckButton = styled.button`
  background-color: ${props => 
    props.status === 'correct' ? '#58cc02' : 
    props.status === 'wrong' ? '#ff4b4b' : 
    props.disabled ? '#e5e5e5' : '#58cc02'};
    
  color: ${props => props.disabled ? '#afafaf' : 'white'};
  
  border: none;
  padding: 15px;
  border-radius: 15px;
  font-size: 1rem;
  font-weight: 800; /* Extra bold */
  cursor: ${props => props.disabled ? 'default' : 'pointer'};
  box-shadow: ${props => props.disabled ? 'none' : '0 4px 0 rgba(0,0,0,0.2)'};
  width: 100%;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  transition: all 0.2s;
  
  &:active {
    box-shadow: none;
    transform: translateY(4px);
  }
`;