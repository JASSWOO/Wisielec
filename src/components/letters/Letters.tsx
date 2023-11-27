import './Letters.css';

interface LettersProps {
  letter: string;
}

const Letters: React.FC<LettersProps> = ({ letter }) => {
  return (
    <div className="lettersDiv">
      <p>{letter}</p>
    </div>
  );
};
export default Letters;
