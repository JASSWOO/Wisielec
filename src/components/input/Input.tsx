import { useState } from 'react';
import './Input.css';
// import ButtonStyle1 from '../buttonStyle1/ButtonStyle1';

interface InputProps {
  setUsedLetters: (letter: string) => void;
  setErrors: (setErrors: number) => void;
  setWin: (seWin: boolean) => void;
  usedLetters: string;
  word: string;
  errors: number;
}

const Input: React.FC<InputProps> = ({ setUsedLetters, usedLetters, word, setErrors, errors, setWin }) => {
  const [inputString, setInputString] = useState<string>('');
  const doesContain = () => {
    if (inputString.length == 1) {
      if (word.includes(inputString)) {
        setUsedLetters(usedLetters + inputString);
      } else {
        setErrors(errors + 1);
      }
    } else if (inputString.length > 1) {
      if (word === inputString) {
        setUsedLetters('');
        setWin(true);
      }
    }
  };
  window.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && errors < 5) {
      doesContain();
    }
  });
  return (
    <div className="inputDiv">
      <input autoFocus type="text" onChange={(e) => setInputString(e.target.value)}></input>
      <div className="buttonStyle">
        <button onClick={() => doesContain()}>Wprowadz</button>
      </div>
    </div>
  );
};

export default Input;
