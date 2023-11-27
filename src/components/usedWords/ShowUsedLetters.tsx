import './ShowUsedLetters.css';

interface ShowUsedLettersProps {
  letters: string;
}
const ShowUsedLetters: React.FC<ShowUsedLettersProps> = ({ letters }) => {
  return <p>{letters}</p>;
};

export default ShowUsedLetters;
