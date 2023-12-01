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
  const [usedLetters, setUsedLetters] = useState<string>('');
  const [errors, setErrors] = useState<number>(0);
  const [word, setWord] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  //console.log('used: ', usedLetters, ' errors: ', errors, ' word: ', word, ' message: ', message);

  return (
    <div className="containerDiv">
      <h1 className="containerTitle">Wisielec</h1>
      <div className="gameDiv">
        <div className="letters">
          {Array.from(word).map((e: string, i: number) => (
            <Letters key={i} letter={e} usedLetters={usedLetters} />
          ))}
        </div>

        {word != '' && (
          <Input
            setUsedLetters={setUsedLetters}
            setErrors={setErrors}
            setMessage={setMessage}
            word={word}
            usedLetters={usedLetters}
            errors={errors}
            message={message}
          ></Input>
        )}
        {usedLetters.length != 0 || (message == '' && <ShowUsedLetters letters={usedLetters} />)}

        <Reset
          words={words}
          setWord={setWord}
          setErrors={setErrors}
          setMessage={setMessage}
          setUsedLetters={setUsedLetters}
        />
        {word != '' && <ShowMistakes mistakes={errors} />}
        <Popup message={message} />
      </div>
      <div className="pictureDiv"></div>
    </div>
  );
};
export default Container;
