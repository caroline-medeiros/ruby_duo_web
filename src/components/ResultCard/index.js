"use client"
import { FaTrophy, FaHeartBroken, FaCheckCircle } from 'react-icons/fa';
import { 
  Container, Card, Title, Subtitle, StatsContainer, StatBox, Message, 
  PrimaryButton, SecondaryButton 
} from './styles';

export default function ResultCard({ score, total, lives, onRetry, onBack }) {
  
  const percentage = Math.round((score / total) * 100);
  const isVictory = percentage >= 70 && lives > 0;

  return (
    <Container>
      <Card>
        <div style={{ fontSize: '4rem', marginBottom: '10px' }}>
          {lives === 0 ? <FaHeartBroken color="#ff4b4b"/> : <FaTrophy color="#ffc800"/>}
        </div>

        <Title>
          {lives === 0 ? "Que pena!" : "Lição Completa!"}
        </Title>
        
        <Subtitle>
          {lives === 0 ? "Suas vidas acabaram." : "Você completou este grupo de questões!"}
        </Subtitle>
        
        <StatsContainer>
          <StatBox color="#d7ffb8">
            <span>Acertos</span>
            <strong>{score}</strong>
          </StatBox>
          <StatBox color="#ffdfe0">
            <span>Erros</span>
            <strong>{total - score}</strong>
          </StatBox>
          <StatBox>
            <span>%</span>
            <strong>{percentage}%</strong>
          </StatBox>
        </StatsContainer>

        <Message>
          {isVictory 
            ? "Excelente trabalho! Você dominou esse conteúdo." 
            : "Não desista! Revise o conteúdo e tente novamente para melhorar sua pontuação."}
        </Message>
        
        <PrimaryButton onClick={onBack}>
          Concluir Lição
        </PrimaryButton>

        <SecondaryButton onClick={onRetry}>
          Tentar Novamente
        </SecondaryButton>

      </Card>
    </Container>
  );
}