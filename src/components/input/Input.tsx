import { useState } from 'react';
import './Input.css';

interface InputProps {
  onClickHandler: (letter: string) => void;
  setErrors: (setErrors: number) => void;
  usedLetters: string;
  word: string;
  errors: number;
}

const Input: React.FC<InputProps> = ({ onClickHandler, usedLetters, word, setErrors, errors }) => {
  const [letter, setLetter] = useState<string>('');
  const doesContain = () => {
    if (!usedLetters.includes(letter)) {
      onClickHandler(usedLetters + letter);
      if (!word.includes(letter)) {
        setErrors(errors + 1);
      }
    } else {
      window.alert('Letter was already used');
    }
  };
  return (
    <>
      <input type="text" maxLength={1} onChange={(e) => setLetter(e.target.value)}></input>
      <button onClick={() => doesContain()}></button>
    </>
  );
};

export default Input;
