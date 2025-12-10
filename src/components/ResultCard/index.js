"use client"
import { Container, Card, Title, ScoreText, RestartButton } from './styles';

export default function ResultCard({ score, total, onRetry }) {
  return (
    <Container>
      <Card>
        <h1 style={{fontSize: '4rem', marginBottom: '10px'}}>🎉</h1>
        <Title>Lição Completa!</Title>
        
        <ScoreText>
          Você acertou <strong>{score}</strong> de <strong>{total}</strong> questões.
        </ScoreText>
        
        <RestartButton onClick={onRetry}>
          Tentar Novamente
        </RestartButton>
      </Card>
    </Container>
  );
}