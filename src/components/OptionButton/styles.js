import styled from '@emotion/styled';

const colors = {
  defaultBorder: '#e5e5e5',
  defaultText: '#4b4b4b',
  
  selectedBorder: '#84d8ff',
  selectedBg: '#ddf4ff',
  selectedText: '#1899d6',
  
  correctBorder: '#58cc02',
  correctBg: '#d7ffb8',
  correctText: '#58a700',
  
  wrongBorder: '#ff4b4b',
  wrongBg: '#ffdfe0',
  wrongText: '#ea2b2b'
};

export const ButtonVisual = styled.button`
  width: 100%;
  padding: 15px;
  font-size: 1.1rem;
  border-radius: 12px;
  border: 2px solid;
  cursor: pointer;
  transition: all 0.2s;
  background-color: white;
  box-shadow: 0 4px 0 #e5e5e5;
  
  /* Efeito de Clique 3D */
  &:active {
    box-shadow: none;
    transform: translateY(4px);
  }

  /* --- LÓGICA DE CORES --- */
  
  /* 1. ESTADO PADRÃO (Não selecionado) */
  border-color: ${colors.defaultBorder};
  color: ${colors.defaultText};

  /* 2. ESTADO SELECIONADO (Mas ainda não verificado) -> AZUL */
  ${props => props.isSelected && !props.showFeedback && `
    border-color: ${colors.selectedBorder};
    background-color: ${colors.selectedBg};
    color: ${colors.selectedText};
    box-shadow: none; /* Remove sombra pra parecer "apertado" */
    border-bottom-width: 2px; /* Mantém tamanho */
  `}

  /* 3. FEEDBACK: CERTO (Só aparece depois de verificar) -> VERDE */
  ${props => props.showFeedback && props.isCorrect && `
    border-color: ${colors.correctBorder};
    background-color: ${colors.correctBg};
    color: ${colors.correctText};
  `}

  /* 4. FEEDBACK: ERRO (Só aparece depois de verificar) -> VERMELHO */
  ${props => props.showFeedback && props.isSelected && !props.isCorrect && `
    border-color: ${colors.wrongBorder};
    background-color: ${colors.wrongBg};
    color: ${colors.wrongText};
  `}
`;