import './App.css';
import Container from './components/Container.tsx';

function App() {
  const words: string[] = ['słowo', 'kask'];
  const word: string = words[Math.floor(Math.random() * words.length)];
  return <Container word={word}></Container>;
}

export default App;
