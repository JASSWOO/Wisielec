import { useState } from 'react';
import './Input.css';

interface InputProps {
  onClickHandler: (letter: string) => void;
  usedLetters: string;
}

const Input: React.FC<InputProps> = ({ onClickHandler, usedLetters }) => {
  const [letter, setLetter] = useState<string>('');
  const doesContain = () => {
    if (!usedLetters.includes(letter)) {
      onClickHandler(usedLetters + letter);
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
