import React, { useEffect, useState } from 'react';
import './Container.css';
import Input from './input/Input';
import Letters from './letters/Letters';

interface ContainerProps {}

const Container: React.FC<ContainerProps> = () => {
  const [words] = useState<string[]>(['kask', 'slowo']);
  const [usedLetters, setUsedLetters] = useState<string[]>([]);
  const [correctedLetters, setCorrectedLetters] = useState<string[]>([]);
  const [word, setWord] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [errors, setErrors] = useState<number>(0);

  useEffect(() => {
    if (word === null) {
      setWord(words[Math.floor(Math.random() * words.length)]);
    }
  }, [words, word]);

  useEffect(() => {
    const isCorrectWord = [...new Set(word)].every((letter) => correctedLetters.includes(letter));
    if (word && isCorrectWord) {
      //setWin(true);
      setMessage('Wygrałeś');
    }
  }, [word, correctedLetters]);

  useEffect(() => {
    if (errors >= 5) {
      setMessage('Przegrałeś');
    }
  }, [errors]);
  const newGame = () => {
    setUsedLetters([]);
    setCorrectedLetters([]);
    setWord(words[Math.floor(Math.random() * words.length)]);
    setMessage(null);
    setErrors(0);
  };

  return (
    <div className="containerDiv">
      <h1 className="containerTitle">Wisielec</h1>
      <div className="gameDiv">
        <div className="letters">
          {word &&
            Array.from(word).map((letter: string, index: number) => (
              <Letters key={index} letter={letter} usedLetters={usedLetters} />
            ))}
        </div>
        <Input
          setUsedLetters={setUsedLetters}
          setCorrectedLetters={setCorrectedLetters}
          setErrors={setErrors}
          word={word}
          errors={errors}
          usedLetters={usedLetters}
        />
        <p>Uzyte litery: {usedLetters}</p>
        <p>{errors}/5 bledow</p>
        <p>{message}</p>
        <button onClick={newGame}>Zacznij nową gre</button>
      </div>
      <div className="pictureDiv">
        <img src={'images/img' + errors + '.png'}></img>
      </div>
    </div>
  );
};
export default Container;
