import { useEffect, useState } from "react";
import { Failed, Reset, Score, Timer, Tools, Wrapper } from "../styles";
/* Component */
import Items from "./Items";
/*  */
import cardsData from "../Cards";

//cardsData.sort(() => Math.random() - Math.random());

function Grid() {
  /* Declears States */
  const [cards, setCards] = useState(cardsData);
  const [failed, setFailed] = useState(0);
  const [score, setScore] = useState(0);
  const [firstClick, setFirstClick] = useState(null);
  const [second, setSecond] = useState(0);
  const [mins, setMins] = useState(0);
  const [start, setStart] = useState(false);

  /* Functoin that check the clicker */
  const checkClick = (card) => {
    setStart(true); //to start up the timer
    if (firstClick === null) {
      setFirstClick(card); // setup the first click
    } 
    /* check if the cards are equal  */
    else {
      if (firstClick.name === card.name) {
        firstClick.match = "match";
        card.match = "match";
        setFirstClick(null);
        setScore(score + 1);
        console.log("match");
      } else {
        card.status = false;
        firstClick.status = false;
        setFirstClick(null);
        setFailed(failed + 1);
        console.log("not match");
      }
    }
  };
  /* Timer Function  */
  if (start === true) {
    const checkStatus = cards.every((card) => card.status === true);
    if (checkStatus === false) {
      if (second < 60) {
        setTimeout(() => setSecond(second + 1), 1000);
      } else {
        setMins(0);
        setMins(mins + 1);
        setSecond(0);
      }
    } else {
      setSecond(second);
      setStart(false);
    }
  }
  /* Restart Function */
  const handleClick = () => {
    setSecond(0);
    const update = cards.map((el) =>
      el.status === true ? { ...el, status: false, match: "not-match" } : el
    );
    update.sort(() => Math.random() - Math.random());
    setFirstClick(null);
    setCards(update);
    setFailed(0);
    setScore(0);
    setStart(false);
    setMins(0);
  };
  /* chcek if the seconds are mins < 10 add 0 on the fist */
  const zeroSecond = () => {
    return second < 10 ? `0${second}` : second;
  };
  const zeroMins = () => {
    return mins < 10 ? `0${mins / 4}` : mins / 4;
  };
  return (
    <div>
      <Tools>
        <Failed>
          Failed: <span>{failed}</span>
        </Failed>
        <Score>
          Score: <span>{score}</span>
        </Score>
        <Reset onClick={handleClick}>
          <img
            src="https://image.flaticon.com/icons/png/512/3419/3419446.png"
            alt="restart"
          />
        </Reset>
      </Tools>
      <Wrapper>
        {cards.map((card) => (
          <Items card={card} checkClick={checkClick} status={card.status} />
        ))}
      </Wrapper>
      <Timer>
        Timer: {zeroMins()} : {zeroSecond()}
      </Timer>
    </div>
  );
}
export default Grid;
