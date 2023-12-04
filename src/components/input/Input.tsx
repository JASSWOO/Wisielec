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

const Input: React.FC<InputProps> = ({ setUsedLetters, setMessage, usedLetters, setErrors, errors, message }) => {
  const [inputString, setInputString] = useState<string>('');
  const [btnEnabled, setBtnEnabled] = useState<boolean>(true);

  //console.log('input: ', inputString, ' word: ', word, ' message: ', message, ' usedLetters: ', usedLetters);
  if (message != '' && btnEnabled != true) {
    setBtnEnabled(true);
  }

  // const fillUsedLetters = (): void => {
  //   Array.from(inputString).forEach((e) => {
  //     if (!usedLetters.includes(e)) {
  //       setUsedLetters(usedLetters + e);
  //     }
  //   });
  // };

  // const onClickHandler = () => {
  //   if (!usedLetters.includes(inputString))
  //     if (inputString.length == 1) {
  //       setUsedLetters(usedLetters + inputString);
  //       if (word.includes(inputString)) {
  //         if (Check()) {
  //           setMessage('wygrales');
  //         }
  //       } else {
  //         setErrors(errors + 1);
  //       }
  //       if (errors + 1 == 5) {
  //         setMessage('przegrales');
  //       }
  //     } else if (inputString.length > 1) {
  //       if (Check()) {
  //         setMessage('wygrales');
  //         setUsedLetters(usedLetters + inputString);
  //       } else {
  //         setErrors(errors + 1);
  //         if (errors + 1 == 5) {
  //           setMessage('przegrales');
  //         }
  //       }
  //     }
  // };

  const onClickHandler = () => {
    if (!usedLetters.includes(inputString)) {
      setUsedLetters(usedLetters + inputString);
      if (!(usedLetters + inputString).includes(inputString)) {
        setErrors(errors + 1);
        if (errors + 1) {
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
      <input autoFocus type="text" maxLength={1} onChange={(e) => setInputString(e.target.value)}></input>
      <div className="buttonStyle">
        <button disabled={!btnEnabled} onClick={onClickHandler}>
          Wprowadz
        </button>
      </div>
    </div>
  );
};

export default Input;
