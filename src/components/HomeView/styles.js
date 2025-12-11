import styled from '@emotion/styled';
import Link from 'next/link';

const colors = {
  rubyRed: '#e02d3a',
  darkRed: '#b91c28',
  hoverRed: '#f24e5b',
  textMain: '#3c3c3c',
  bgLight: '#f0f2f5'
};

export const Container = styled.main`
  min-height: 100vh;
  background-color: ${colors.bgLight};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
`;

export const Header = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  color: ${colors.rubyRed}; /* Título Vermelho */
  margin-bottom: 10px;
  letter-spacing: -1px;
  text-transform: uppercase;
`;

export const Subtitle = styled.p`
  color: #777;
  font-size: 1.2rem;
`;

export const Grid = styled.div`
  display: grid;
  gap: 25px;
  width: 100%;
  max-width: fit-content;
`;

export const Card = styled.div`
  background: white;
  border: 2px solid #e5e5e5;
  border-radius: 20px;
  padding: 25px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 0 #e5e5e5;
  transition: transform 0.2s, border-color 0.2s;

  &:hover {
    transform: translateY(-5px);
    border-color: ${colors.rubyRed}; /* Borda fica vermelha ao passar o mouse */
  }
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 15px;
`;

export const Icon = styled.span`
  font-size: 2rem;
  color: ${colors.rubyRed}; /* O diamante agora é um Ruby! */
`;

export const LessonTitle = styled.h2`
  font-size: 1.4rem;
  color: #4b4b4b;
  margin: 0;
`;

export const Description = styled.p`
  color: #777;
  font-size: 0.95rem;
  line-height: 1.5;
  margin-bottom: 25px;
  flex-grow: 1;
`;

export const StartButton = styled(Link)`
  display: block;
  width: 100%;
  padding: 15px;
  background-color: ${colors.rubyRed}; /* Botão Vermelho */
  color: white;
  text-align: center;
  text-decoration: none;
  font-weight: bold;
  border-radius: 15px;
  text-transform: uppercase;
  letter-spacing: 1px;
  box-shadow: 0 4px 0 ${colors.darkRed}; /* Sombra 3D Escura */
  transition: all 0.1s;

  &:active {
    box-shadow: none;
    transform: translateY(4px);
  }

  &:hover {
    background-color: ${colors.hoverRed};
  }
`;