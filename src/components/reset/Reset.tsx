interface ResetProps {
  words: string[];
  setWord: (setWord: string) => void;
  setMessage: (setMessage: string) => void;
  setErrors: (setErrors: number) => void;
  setUsedLetters: (setUsedLetters: string) => void;
}
const Reset: React.FC<ResetProps> = ({ words, setWord, setMessage, setErrors, setUsedLetters }) => {
  const newGame = () => {
    setWord(words[Math.floor(Math.random() * words.length)]);
    setMessage('');
    setErrors(0);
    setUsedLetters('');
  };
  return <button onClick={newGame}>Zacznij nową gre</button>;
};

export default Reset;
