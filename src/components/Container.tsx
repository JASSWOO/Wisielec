import './Container.css';
import React from 'react';
import Letters from './letters/Letters';
import Input from './input/Input';

import { useState } from 'react';
import ShowUsedLetters from './usedWords/ShowUsedLetters';
import ShowMistakes from './showMistakes/ShowMistakes';

interface ContainerProps {}

const Container: React.FC<ContainerProps> = () => {
  const words: string[] = ['kask', 'slowo'];
  const [UsedLetters, setUsedLetters] = useState<string>('');
  const [Errors, setErrors] = useState<number>(0);
  const [word, setWord] = useState<string>('');
  const checkWin = (word: string, usedLetters: string): boolean => {
    let win: boolean = true;
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
  };

  if (checkWin(word, UsedLetters) == true) {
    window.alert('Wygrałeś!');
    newGame();
  } else if (Errors == 5) {
    window.alert('Przegrałeś');
    newGame();
  }

  return (
    <div className="containerDiv">
      <h1 className="containerTitle">Wisielec</h1>
      <div className="letters">
        {Array.from(word).map((e: string, i: number) => (
          <Letters key={i} letter={e} usedLetters={UsedLetters} />
        ))}
      </div>

      <Input
        onClickHandler={setUsedLetters}
        usedLetters={UsedLetters}
        word={word}
        setErrors={setErrors}
        errors={Errors}
      ></Input>
      <ShowUsedLetters letters={UsedLetters} />
      <ShowMistakes mistakes={Errors} />
    </div>
  );
};
export default Container;
