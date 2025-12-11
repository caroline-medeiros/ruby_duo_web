"use client"

import { FaGem, FaSketch } from 'react-icons/fa';
import { 
  Container, NavBar, NavLogo, HeroSection, LeftSide, RightSide, 
  Headline, Subheadline, ButtonGroup, PrimaryButton, OutlineButton, FooterBar 
} from './styles';

export default function LandingPage() {
  return (
    <Container>
      <NavBar>
        <NavLogo>
          <FaGem />
          RubyDuo
        </NavLogo>
      </NavBar>
      <HeroSection>
        <LeftSide>
          <FaSketch /> 
        </LeftSide>
        <RightSide>
          <Headline>O jeito grátis, divertido e eficaz de aprender Ruby!</Headline>
          <Subheadline>
            Domine os conceitos de Ruby através de quizzes interativos e desafios práticos.
          </Subheadline>
          
          <ButtonGroup>
            <PrimaryButton href="/signup">Começar agora</PrimaryButton>
            <OutlineButton href="/login">Já tenho uma conta</OutlineButton>
          </ButtonGroup>
        </RightSide>
      </HeroSection>

      <FooterBar>
        Aprenda Ruby do básico ao avançado com exercícios práticos, sistema de níveis e acompanhamento de progresso.
      </FooterBar>
    </Container>
  );
}