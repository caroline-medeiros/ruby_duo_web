"use client"
import { Container, Fill } from './styles';

export default function ProgressBar({ progress }) {
  return (
    <Container>
      <Fill progress={progress} />
    </Container>
  );
}