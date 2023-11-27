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
  console.log(UsedLetters);
  return (
    <div className="containerDiv">
      <h1 className="containerTitle">Wisielec</h1>

      {Array.from(word).map((e: string, i: number) => (
        <Letters key={i} letter={e} />
      ))}
      <Input onClickHandler={setUsedLetters} usedLetters={UsedLetters}></Input>
      <ShowUsedLetters letters={UsedLetters} />
    </div>
  );
};
export default Container;
