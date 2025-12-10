import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
  background-color: #f0f2f5;
  font-family: 'Segoe UI', sans-serif;
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
  margin-bottom: 20px;
  font-size: 1.4rem;
`;


export const OptionsGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const NextButton = styled.button`
  margin-top: 25px;
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
  letter-spacing: 1px;

  &:active {
    box-shadow: none;
    transform: translateY(4px);
  }
`;