/* Global React */
import { useState, useEffect } from "react";
/* Styled-component */
import { Failed, Reset, Score, Timer, Tools, Wrapper } from "../styles";
/* Component */
import Items from "./Items";
/* Data */
import cardsData from "../Cards";

/* Shuffle the object */
cardsData.sort(() => Math.random() - Math.random());

function Grid() {
  /* Declears States */
  const [cards, setCards] = useState(cardsData);
  const [failed, setFailed] = useState(0);
  const [score, setScore] = useState(0);
  const [firstClick, setFirstClick] = useState(null);
  const [second, setSecond] = useState(0);
  const [mins, setMins] = useState(0);

  /* Functoin that check the clicker */
  const checkClick = (card) => {
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
  /* Timer Function */
  useEffect(() => {
    const intervalId = setInterval(() => {
      const checkStatus = cards.every((card) => card.status === true)
      if (checkStatus === false) {
        if (second < 59) {
          setSecond(second + 1)
        } else {
          setMins(0);
          setMins(mins + 1);
          setSecond(0);
        }
      } else {
        setSecond(second);
      }
    }, 1000);
    return () => clearInterval(intervalId);
  }, [second, mins, cards]);
  /* Restart Function */
  const handleClick = () => {
    const update = cards.map((el) =>
      el.status === true ? { ...el, status: false, match: "not-match" } : el
    );
    update.sort(() => Math.random() - Math.random());
    setFirstClick(null);
    setCards(update);
    setFailed(0);
    setScore(0);
    setMins(0);
    setSecond(0);
  };
  /* chcek if the seconds are mins < 10 add 0 on the fist */
  const zeroSecond = () => {
    return second < 10 ? `0${second}` : second;
  };
  const zeroMins = () => {
    return mins < 10 ? `0${mins}` : mins;
  };
  return (
    <div>
      <Timer>
        Timer: {zeroMins()} : {zeroSecond()}
      </Timer>
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

    </div>
  );
}
export default Grid;
