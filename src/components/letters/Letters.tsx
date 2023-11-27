import './Letters.css';

interface LettersProps {
  letter: string;
  usedLetters: string;
}

const Letters: React.FC<LettersProps> = ({ letter, usedLetters }) => {
  const ifLetterUsed = () => {
    if (usedLetters?.includes(letter)) {
      return letter;
    } else {
      return '_';
    }
  };
  return (
    <div className="lettersDiv">
      <p>{ifLetterUsed()}</p>
    </div>
  );
};
export default Letters;
