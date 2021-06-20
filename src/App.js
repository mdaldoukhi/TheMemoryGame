import './App.css';
/* Component */
import Grid from './components/Grid';
import { Header, StartBtn, Note } from './styles';
import {useState} from 'react'

function App() {
  const [view, setView] = useState(false)
  const handleClick =  () => {
    setView(true)
  }
  const show = () => {
    return view ? <Grid /> : <Note>Please Click Button To start the game, and notice when you click the button timer will start count</Note>
  }
  return (
      <div>
        <Header>The Memory Game</Header>
        <StartBtn onClick={handleClick} className={view}><a></a></StartBtn>
        {show()}
      </div>
  );
}

export default App;
