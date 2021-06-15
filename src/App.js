import './App.css';
import Grid from './components/Grid';
import cards from "./Cards"



function App() {
  /* Will random the object  */
  cards.sort(() => Math.random() - Math.random()).find(() => true);

  return (
    <Grid cards={cards} />
  );
}

export default App;
