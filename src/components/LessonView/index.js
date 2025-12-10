"use client"

import { useState } from 'react';
import { Container, Card, Title, OptionsGrid, NextButton } from './styles';
import ProgressBar from '../ProgressBar';
import OptionButton from '../OptionButton';
import ResultCard from '../ResultCard';



export default function LessonView({ lesson }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedOptionId, setSelectedOptionId] = useState(null); 
  const [isAnswerChecked, setIsAnswerChecked] = useState(false);

  const currentQuestion = lesson.questions[currentIndex];
  
  const progress = ((currentIndex) / lesson.questions.length) * 100;

  const handleOptionClick = (option) => {
    if (isAnswerChecked) return;

    setSelectedOptionId(option.id);
    setIsAnswerChecked(true);

    if (option.correct) {
      setScore(score + 1);
    } else {
    }
  };

  const handleNext = () => {
    const nextIndex = currentIndex + 1;

    if (nextIndex < lesson.questions.length) {
      setCurrentIndex(nextIndex);
      setSelectedOptionId(null);
      setIsAnswerChecked(false);
    } else {
      setShowResult(true);
    }
  };

  if (showResult) {
    return (
      <ResultCard 
        score={score}
        total={lesson.questions.length}
        onRetry={() => window.location.reload()} 
      />
    );
  }

  return (
    <Container>
      <div style={{width: '100%', maxWidth: '500px'}}>
        <ProgressBar progress={progress} />
      </div>

      <Card>
        <Title>{currentQuestion.body}</Title>
        
        <OptionsGrid>
          {currentQuestion.options.map((option) => (
            <OptionButton
              key={option.id}
              option={option}
              isSelected={option.id === selectedOptionId}
              isCorrect={option.correct}
              onClick={handleOptionClick}
              disabled={isAnswerChecked}
            >
            </OptionButton>
          ))}
        </OptionsGrid>

        {isAnswerChecked && (
          <NextButton onClick={handleNext}>
            {currentIndex + 1 === lesson.questions.length ? 'Finalizar' : 'Próximo'}
          </NextButton>
        )}
      </Card>
    </Container>
  );
}