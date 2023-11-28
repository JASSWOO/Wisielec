import './ShowUsedLetters.css';

interface ShowUsedLettersProps {
  letters: string;
}
const ShowUsedLetters: React.FC<ShowUsedLettersProps> = ({ letters }) => {
  return <p>Uzyte litery: {letters}</p>;
};

export default ShowUsedLetters;
