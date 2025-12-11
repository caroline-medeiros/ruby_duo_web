"use client"

import { Container, Header, Title, Subtitle, Grid, Card, CardHeader, Icon, LessonTitle, Description, StartButton } from './styles';

export default function HomeView({ lessons }) {
  return (
    <Container>
      <Header>
        <Title>🦉 RubyDuo</Title>
        <Subtitle>Escolha um módulo e comece a praticar agora!</Subtitle>
      </Header>

      <Grid>
        {lessons.length > 0 ? (
          lessons.map((lesson) => (
            <Card key={lesson.id}>
              <CardHeader>
                <Icon>💎</Icon>
                <LessonTitle>{lesson.title}</LessonTitle>
              </CardHeader>
              
              <Description>{lesson.description}</Description>
              
              <StartButton href={`/quiz/${lesson.id}`}>
                Começar
              </StartButton>
            </Card>
          ))
        ) : (
          <p style={{color: '#999'}}>Carregando lições...</p>
        )}
      </Grid>
    </Container>
  );
}