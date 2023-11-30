import './Container.css';
import React, { useEffect } from 'react';
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
  const [usedLetters, setUsedLetters] = useState<string>('');
  const [errors, setErrors] = useState<number>(0);
  const [word, setWord] = useState<string>('');
  const [win, setWin] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');

  const newGame = () => {
    setUsedLetters('');
    setErrors(0);
    setWord(words[Math.floor(Math.random() * words.length)]);
    setWin(false);
    setMessage('');
  };
  useEffect(() => {
    if (win) {
      setMessage('przegrales');
    } else if (errors == 5) {
      setMessage('wygrales');
    }
  });

  return (
    <div className="containerDiv">
      <h1 className="containerTitle">Wisielec</h1>
      <div className="gameDiv">
        <div className="letters">
          {Array.from(word).map((e: string, i: number) => (
            <Letters key={i} letter={e} usedLetters={usedLetters} />
          ))}
        </div>

        {win && (
          <Input
            setWin={setWin}
            setUsedLetters={setUsedLetters}
            usedLetters={usedLetters}
            word={word}
            setErrors={setErrors}
            errors={errors}
          ></Input>
        )}
        {usedLetters.length != 0 && <ShowUsedLetters letters={usedLetters} />}

        <Reset newGame={newGame} />
        <ShowMistakes mistakes={errors} />
        <Popup message={message} />
      </div>
      <div className="pictureDiv"></div>
    </div>
  );
};
export default Container;
