interface ResetProps {
  newGame: () => void;
}
const Reset: React.FC<ResetProps> = ({ newGame }) => {
  return <button onClick={newGame}>Reset</button>;
};

export default Reset;
