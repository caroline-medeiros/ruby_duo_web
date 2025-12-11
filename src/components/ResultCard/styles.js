import styled from '@emotion/styled';

const colors = {
  rubyRed: '#e02d3a',
  correct: '#58cc02',
  correctDark: '#46a302',
  textMain: '#3c3c3c',
  textLight: '#777',
  bgLight: '#f0f2f5'
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
  background-color: ${colors.bgLight};
  font-family: 'Segoe UI', sans-serif;
`;

export const Card = styled.div`
  background: white;
  width: 100%;
  max-width: 450px;
  padding: 40px;
  border-radius: 20px;
  border: 2px solid #e5e5e5;
  box-shadow: 0 4px 0 #e5e5e5;
  text-align: center;
`;

export const Title = styled.h2`
  color: ${colors.textMain};
  margin-bottom: 10px;
  font-size: 1.8rem;
  font-weight: 800;
`;

export const Subtitle = styled.p`
  color: ${colors.textLight};
  font-size: 1.1rem;
  margin-bottom: 30px;
`;

export const StatsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 30px;
`;

export const StatBox = styled.div`
  background-color: ${props => props.color || '#f7f7f7'};
  padding: 15px;
  border-radius: 12px;
  min-width: 100px;
  
  span {
    display: block;
    font-size: 0.9rem;
    color: #777;
    margin-bottom: 5px;
  }
  
  strong {
    display: block;
    font-size: 1.5rem;
    color: ${colors.textMain};
  }
`;

export const Message = styled.div`
  margin-bottom: 30px;
  font-size: 1rem;
  color: ${colors.textMain};
  line-height: 1.5;
`;

export const PrimaryButton = styled.button`
  background-color: ${colors.correct};
  color: white;
  border: none;
  padding: 15px 30px;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 4px 0 ${colors.correctDark};
  width: 100%;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 15px;
  
  &:active {
    box-shadow: none;
    transform: translateY(4px);
  }
  &:hover { filter: brightness(1.1); }
`;

export const SecondaryButton = styled.button`
  background-color: transparent;
  color: #afafaf;
  border: 2px solid #e5e5e5;
  padding: 15px 30px;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  width: 100%;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.2s;
  
  &:hover {
    color: ${colors.textLight};
    border-color: #d5d5d5;
    background-color: #f9f9f9;
  }
`;