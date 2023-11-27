import './Container.css';
import React from 'react';
import Letters from './letters/Letters';
import Input from './input/Input';

import { useState } from 'react';
import ShowUsedLetters from './usedWords/ShowUsedLetters';

interface ContainerProps {
  word: string;
}
const Container: React.FC<ContainerProps> = ({ word }) => {
  const [UsedLetters, setUsedLetters] = useState<string>('');
  const [Errors, setErrors] = useState<number>(0);
  return (
    <div className="containerDiv">
      <h1 className="containerTitle">Wisielec</h1>

      {Array.from(word).map((e: string, i: number) => (
        <Letters key={i} letter={e} usedLetters={UsedLetters} />
      ))}
      <Input
        onClickHandler={setUsedLetters}
        usedLetters={UsedLetters}
        word={word}
        setErrors={setErrors}
        errors={Errors}
      ></Input>
      <ShowUsedLetters letters={UsedLetters} />
    </div>
  );
};
export default Container;
