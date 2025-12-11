
"use client"
import { ButtonVisual } from './styles';

export default function OptionButton({ option, isSelected, isCorrect, showFeedback, onClick, disabled }) {
  return (
    <ButtonVisual 
      isSelected={isSelected}
      isCorrect={isCorrect}
      showFeedback={showFeedback}
      disabled={disabled}
      onClick={() => onClick(option)}
    >
      {option.body} 
    </ButtonVisual>
  );
}