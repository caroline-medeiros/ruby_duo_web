"use client"

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaTimes, FaHeart, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

import { 
  Container, Header, CloseButton, HeartsContainer, ProgressBarContainer, 
  Content, Title, OptionsGrid, Footer, CheckButton, FeedbackMsg, 
  AppScreen
} from './styles';

import ProgressBar from '../ProgressBar'; 
import OptionButton from '../OptionButton'; 
import ResultCard from '../ResultCard'; 

const playSound = (type) => {
  const sounds = {
    correct: 'https://assets.mixkit.co/active_storage/sfx/2000/2000-preview.mp3',
    wrong: 'https://assets.mixkit.co/active_storage/sfx/2003/2003-preview.mp3'
  };
  const audio = new Audio(sounds[type]);
  audio.volume = 0.5;
  audio.play().catch(e => console.log("Erro ao tocar som (navegador bloqueou):", e));
};

export default function LessonView({ lesson }) {
  const router = useRouter();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [lives, setLives] = useState(5);
  const [selectedOptionId, setSelectedOptionId] = useState(null); 
  const [status, setStatus] = useState('idle');
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const currentQuestion = lesson.questions[currentIndex];
  const progress = ((currentIndex) / lesson.questions.length) * 100;

  const handleSelect = (option) => {
    if (status !== 'idle') return;
    setSelectedOptionId(option.id);
  };

  const handleCheck = () => {
    if (!selectedOptionId) return;

    const selectedOption = currentQuestion.options.find(opt => opt.id === selectedOptionId);
    
    if (selectedOption.correct) {
      setStatus('correct');
      setScore(score + 1);
      playSound('correct');
    } else {
      setStatus('wrong');
      setLives(lives - 1);
      playSound('wrong');
    }
  };

  const handleContinue = () => {
    if (lives === 0) {
      alert("Suas vidas acabaram! Vamos ver seu resultado.");
      setShowResult(true);
      return;
    }

    const nextIndex = currentIndex + 1;
    if (nextIndex < lesson.questions.length) {
      setCurrentIndex(nextIndex);
      setSelectedOptionId(null);
      setStatus('idle');
    } else {
      setShowResult(true);
    }
  };

  if (showResult) {
    return (
      <ResultCard 
        score={score}
        total={lesson.questions.length}
        lives={lives}
        onRetry={() => window.location.reload()} 
        onBack={() => router.push('/learn')}
      />
    );
  }

  const correctOption = currentQuestion.options.find(opt => opt.correct);

  return (
    <Container>
      <AppScreen>
      <Header>
        <CloseButton onClick={() => router.push('/learn')}>
          <FaTimes />
        </CloseButton>

        <ProgressBarContainer>
          <ProgressBar progress={progress} />
        </ProgressBarContainer>

        <HeartsContainer>
          <FaHeart /> {lives}
        </HeartsContainer>
      </Header>

      <Content>
        <Title>{currentQuestion.body}</Title>
        
        <OptionsGrid>
          {currentQuestion.options.map((option) => (
            <OptionButton
              key={option.id}
              option={option}
              isSelected={option.id === selectedOptionId}
              isCorrect={option.correct}
              showFeedback={status !== 'idle'}
              onClick={handleSelect}
              disabled={status !== 'idle'}
            />
          ))}
        </OptionsGrid>
      </Content>
      <Footer status={status}>
        {status === 'correct' && (
          <FeedbackMsg status="correct">
            <FaCheckCircle size={40} color="#58a700"/>
            <div>
              <h3>Excelente!</h3>
            </div>
          </FeedbackMsg>
        )}

        {status === 'wrong' && (
          <FeedbackMsg status="wrong">
            <FaTimesCircle size={40} color="#ea2b2b"/>
            <div>
              <h3>Incorreto...</h3>
              <p>A resposta correta é: <strong>{correctOption?.body}</strong></p>
            </div>
          </FeedbackMsg>
        )}

        {status === 'idle' ? (
          <CheckButton 
            onClick={handleCheck} 
            disabled={!selectedOptionId}
          >
            VERIFICAR
          </CheckButton>
        ) : (
          <CheckButton 
            onClick={handleContinue}
            status={status}
          >
            CONTINUAR
          </CheckButton>
        )}
      </Footer>
      </AppScreen>

    </Container>
  );
}