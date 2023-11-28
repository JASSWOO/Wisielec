import './Container.css';
import React from 'react';
import Letters from './letters/Letters';
import Input from './input/Input';

import { useState } from 'react';
import ShowUsedLetters from './usedWords/ShowUsedLetters';
import ShowMistakes from './showMistakes/ShowMistakes';
import Popup from './popup/Popup';
import Reset from './reset/Reset';

interface ContainerProps {}

const Container: React.FC<ContainerProps> = () => {
  const words: string[] = ['kask', 'slowo'];
  const [UsedLetters, setUsedLetters] = useState<string>('');
  const [Errors, setErrors] = useState<number>(0);
  const [word, setWord] = useState<string>('');

  let message: string = '';
  const checkWin = (word: string, usedLetters: string): boolean => {
    let win: boolean = true;
    if (usedLetters == '') {
      return false;
    }
    Array.from(word).forEach((c) => {
      if (!usedLetters.includes(c)) {
        win = false;
      }
    });
    return win;
  };
  const newGame = () => {
    setUsedLetters('');
    setErrors(0);
    setWord(words[Math.floor(Math.random() * words.length)]);
    console.log(word);
    message = '';
  };
  if (word == '') {
    newGame();
  }

  if (checkWin(word, UsedLetters) == true) {
    message = 'wygrales';
  } else if (Errors == 5) {
    message = 'przegrales';
  }
  return (
    <div className="containerDiv">
      <h1 className="containerTitle">Wisielec</h1>
      <div className="letters">
        {Array.from(word).map((e: string, i: number) => (
          <Letters key={i} letter={e} usedLetters={UsedLetters} />
        ))}
      </div>

      {message != 'wygrales' && message != 'przegrales' && (
        <Input
          onClickHandler={setUsedLetters}
          usedLetters={UsedLetters}
          word={word}
          setErrors={setErrors}
          errors={Errors}
        ></Input>
      )}
      <ShowUsedLetters letters={UsedLetters} />
      <ShowMistakes mistakes={Errors} />
      <Reset newGame={newGame}></Reset>
      <Popup message={message}></Popup>
    </div>
  );
};
export default Container;
