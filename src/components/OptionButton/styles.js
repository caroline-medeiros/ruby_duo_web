
import styled from '@emotion/styled';

export const ButtonVisual = styled.button`
  width: 100%;
  padding: 15px;
  font-size: 1.1rem;
  border-radius: 12px;
  border: 2px solid;
  cursor: pointer;
  transition: all 0.2s;
  
  /* Lógica de cores (mantive a sua lógica original) */
  border-color: ${props => 
    props.isSelected 
      ? (props.isCorrect ? '#58cc02' : '#ff4b4b') 
      : '#e5e5e5'
  };

  background-color: ${props => 
    props.isSelected 
      ? (props.isCorrect ? '#d7ffb8' : '#ffdfe0') 
      : 'white'
  };

  color: ${props => 
    props.isSelected 
      ? (props.isCorrect ? '#58a700' : '#ea2b2b') 
      : '#4b4b4b'
  };

  /* Efeito 3D */
  box-shadow: ${props => props.isSelected ? 'none' : '0 4px 0 #e5e5e5'};
  transform: ${props => props.isSelected ? 'translateY(4px)' : 'none'};

  &:hover {
    background-color: ${props => props.isSelected ? '' : '#f7f7f7'};
  }
`;

