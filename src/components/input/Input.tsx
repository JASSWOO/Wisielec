import { useState } from 'react';
import './Input.css';
// import ButtonStyle1 from '../buttonStyle1/ButtonStyle1';

interface InputProps {
  setUsedLetters: (letter: string) => void;
  setErrors: (setErrors: number) => void;
  usedLetters: string;
  word: string;
  errors: number;
}

const Input: React.FC<InputProps> = ({ setUsedLetters, usedLetters, word, setErrors, errors }) => {
  const [letter, setLetter] = useState<string>('');
  const doesContain = () => {
    if (letter.length > 1) {
      if (word == letter) {
        setUsedLetters(usedLetters + letter);
      } else {
        setErrors(errors + 1);
      }
    } else if (letter.length == 1) {
      if (!usedLetters.includes(letter)) {
        setUsedLetters(usedLetters + letter);
        if (!word.includes(letter)) {
          setErrors(errors + 1);
        }
      }
    }
  };
  window.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      doesContain();
    }
  });
  return (
    <div className="inputDiv">
      <input autoFocus type="text" onChange={(e) => setLetter(e.target.value)}></input>
      <div className="buttonStyle">
        <button onClick={() => doesContain()}>Wprowadz</button>
      </div>
    </div>
  );
};

export default Input;
