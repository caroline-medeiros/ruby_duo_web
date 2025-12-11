import styled from '@emotion/styled';
import Link from 'next/link';

const colors = {
  rubyRed: '#e02d3a',      
  darkRed: '#b91c28',
  lightRed: '#ffebec',
  hoverRed: '#f24e5b',
  textMain: '#3c3c3c',
  textLight: '#777'
};

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #fff;
`;

export const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  border-bottom: 1px solid #e5e5e5;

  @media (max-width: 768px) {
    padding: 15px 20px;
  }
`;

export const NavLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.5rem;
  font-weight: 800;
  color: ${colors.rubyRed}; /* Agora é vermelho! */
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const HeroSection = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  padding: 60px 40px;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  gap: 60px;

  @media (max-width: 900px) {
    flex-direction: column;
    text-align: center;
    padding: 40px 20px;
    gap: 30px;
  }
`;

export const LeftSide = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  
  svg {
    font-size: 25rem;
    color: ${colors.rubyRed}; /* Diamante vermelho */
    filter: drop-shadow(0 15px 30px rgba(224, 45, 58, 0.4)); /* Sombra avermelhada brilhante */
    animation: float 3s ease-in-out infinite;

    @media (max-width: 900px) {
      font-size: 15rem;
    }
  }

  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-15px); }
    100% { transform: translateY(0px); }
  }
`;

export const RightSide = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 500px;
`;

export const Headline = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  color: ${colors.textMain};
  line-height: 1.2;
  margin-bottom: 20px;

  /* Destaque visual na palavra Ruby */
  span {
    color: ${colors.rubyRed};
  }

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

export const Subheadline = styled.p`
  font-size: 1.3rem;
  color: ${colors.textLight};
  margin-bottom: 40px;
  line-height: 1.5;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;

  @media (max-width: 900px) {
    justify-content: center;
  }
`;

export const PrimaryButton = styled(Link)`
  padding: 15px 30px;
  background-color: ${colors.rubyRed};
  color: white;
  font-weight: bold;
  text-decoration: none;
  border-radius: 15px;
  text-transform: uppercase;
  letter-spacing: 1px;
  box-shadow: 0 4px 0 ${colors.darkRed}; /* Sombra 3D vermelho escuro */
  transition: all 0.1s;
  min-width: 200px;
  text-align: center;

  &:active {
    box-shadow: none;
    transform: translateY(4px);
  }
  &:hover { background-color: ${colors.hoverRed}; }
`;

export const OutlineButton = styled(Link)`
  padding: 15px 30px;
  background-color: transparent;
  color: ${colors.rubyRed};
  border: 2px solid ${colors.rubyRed};
  font-weight: bold;
  text-decoration: none;
  border-radius: 15px;
  text-transform: uppercase;
  letter-spacing: 1px;
  box-shadow: 0 4px 0 #e5e5e5;
  transition: all 0.1s;
  min-width: 200px;
  text-align: center;

  &:active {
    box-shadow: none;
    transform: translateY(4px);
  }
  &:hover { background-color: ${colors.lightRed}; }
`;

export const FooterBar = styled.footer`
  background-color: #f9f9f9;
  padding: 30px;
  text-align: center;
  color: ${colors.textLight};
  font-size: 1rem;
  border-top: 1px solid #e5e5e5;
`;