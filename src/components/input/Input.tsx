import { useState } from 'react';
import './Input.css';
// import ButtonStyle1 from '../buttonStyle1/ButtonStyle1';

interface InputProps {
  setUsedLetters: (SetUsedLetters: string) => void;
  setMessage: (setMessage: string) => void;
  setErrors: (setErrors: number) => void;
  usedLetters: string;
  word: string;
  errors: number;
  message: string;
}

const Input: React.FC<InputProps> = ({ setUsedLetters, word, setMessage, usedLetters, setErrors, errors, message }) => {
  const [inputString, setInputString] = useState<string>('');
  const [btnEnabled, setBtnEnabled] = useState<boolean>(true);
  const Check = (): boolean => {
    let check: boolean = true;
    Array.from(word).forEach((e) => {
      if (!(usedLetters + inputString).includes(e)) {
        check = false;
      }
    });
    return check;
  };
  console.log('input: ', inputString, ' word: ', word, ' message: ', message, ' usedLetters: ', usedLetters);
  if (message != '') {
    setBtnEnabled(true);
  }

  const onClickHandler = () => {
    if (!usedLetters.includes(inputString))
      if (inputString.length == 1) {
        setUsedLetters(usedLetters + inputString);
        if (word.includes(inputString)) {
          if (Check()) {
            setMessage('wygrales');
          }
        } else {
          setErrors(errors + 1);
        }
        if (errors + 1 == 5) {
          setMessage('przegrales');
        }
      } else if (inputString.length > 1) {
        if (Check()) {
          setMessage('wygrales');
          setUsedLetters(usedLetters + inputString);
        } else {
          setErrors(errors + 1);
          if (errors + 1 == 5) {
            setMessage('przegrales');
          }
        }
      }
  };

  window.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && message == '') {
      onClickHandler();
    }
  });

  return (
    <div className="inputDiv">
      <input autoFocus type="text" onChange={(e) => setInputString(e.target.value)}></input>
      <div className="buttonStyle">
        <button disabled={btnEnabled} onClick={onClickHandler}>
          Wprowadz
        </button>
      </div>
    </div>
  );
};

export default Input;
