import { ButtonVisual } from "./styles";

export default function OptionButton({ option, isSelected, isCorrect, onClick, disabled }) {
  return (
    <ButtonVisual 
      isSelected={isSelected}
      isCorrect={isCorrect}
      disabled={disabled}
      onClick={() => onClick(option)}
    >
      {option.body}
    </ButtonVisual>
  );
}