import "./App.css";
/* Component */
import Grid from "./components/Grid";
/* Styled-component */
import { Header, StartBtn, Note } from "./styles";
/* Global react */
import { useState } from "react";

function App() {
  /* State to start the game */
  const [view, setView] = useState(false);
  /* Function will set the view to true  */
  const handleClick = () => {
    setView(true);
  };
  /* Function to Show the message or the cards */
  const show = () => {
    return view ? (
      <Grid />
    ) : (
      <Note>
        <span>*</span>Please Click Button To start the game, and notice when you click the
        button timer will start count
      </Note>
    );
  };
  return (
    <div>
      <Header>The Memory Game</Header>
      <StartBtn onClick={handleClick} className={view}>
        <a > </a>
      </StartBtn>
      {show()}
    </div>
  );
}

export default App;
