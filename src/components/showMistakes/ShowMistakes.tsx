import './ShowMistakes.css';

interface ShowMistakesProps {
  mistakes: number;
}
const ShowMistakes: React.FC<ShowMistakesProps> = ({ mistakes }) => {
  return <p>{mistakes}/5 bledow</p>;
};

export default ShowMistakes;
