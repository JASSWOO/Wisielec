import './Letters.css';

interface LettersProps {
  letter: string;
  usedLetters: string[];
}

const Letters: React.FC<LettersProps> = ({ letter, usedLetters }) => {
  return (
    <div className="lettersDiv">
      <p>{usedLetters && usedLetters.includes(letter) ? letter : '_'}</p>
    </div>
  );
};
export default Letters;
