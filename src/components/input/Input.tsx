import { useState } from 'react';
import './Input.css';

interface InputProps {
  usedLetters: string[];
  setUsedLetters: React.Dispatch<React.SetStateAction<string[]>>;
  setErrors: React.Dispatch<React.SetStateAction<number>>;
  setCorrectedLetters: React.Dispatch<React.SetStateAction<string[]>>;
  errors: number;
  word: string | null;
  //win: boolean;
}

const Input: React.FC<InputProps> = ({
  setUsedLetters,
  setCorrectedLetters,
  setErrors,
  errors,
  usedLetters,
  word,
  //win,
}) => {
  const [inputString, setInputString] = useState<string>('');

  const onClickHandler = () => {
    if (inputString.length === 1) {
      if (!usedLetters.includes(inputString)) {
        if (word && word.includes(inputString)) {
          setCorrectedLetters((correctedLetters) => [...correctedLetters, ...inputString]);
          setUsedLetters((usedLetters) => [...usedLetters, ...inputString]);
          setInputString('');
        } else if (word && !word.includes(inputString)) {
          setUsedLetters((usedLetters) => [...usedLetters, ...inputString]);
          setErrors((errors) => errors + 1);
          setInputString('');
        }
      } else {
        setUsedLetters((usedLetters) => [...usedLetters, ...inputString]);
        setErrors((errors) => errors + 1);
        setInputString('');
      }
    } else if (inputString.length > 1) {
      if (inputString === word) {
        setCorrectedLetters((correctedLetters) => [...correctedLetters, ...inputString]);
        setUsedLetters((usedLetters) => [...usedLetters, ...inputString]);
        setInputString('');
      } else {
        setErrors((errors) => errors + 1);
      }
    }
  };
  return (
    <div className="inputDiv">
      <input
        disabled={errors >= 5}
        autoFocus
        value={inputString}
        onChange={(evt) => setInputString(evt.target.value)}
      />
      <div className="buttonStyle">
        <button disabled={errors >= 5} onClick={onClickHandler}>
          Wprowadź
        </button>
      </div>
    </div>
  );
};

export default Input;
