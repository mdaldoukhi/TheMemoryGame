import { useState } from "react";
import { Failed, Reset, Score, Tools, Wrapper } from "../styles";
/* Component */
import Items from './Items'
/*  */
import cardsData from "../Cards"

cardsData.sort(() => Math.random() - Math.random());

function Grid() {

    /* Add useState and mod. */
    const [cards, setCards] = useState(cardsData);
    const [failed, setFailed] = useState(0);
    const [score, setScore] = useState(0);
    const [firstClick, setFirstClick] = useState(null);
    //const [secClick, setSecClick] = useState(null);
    const checkClick = (card) => {
        if(firstClick === null){
            setFirstClick(card);
        }
            /* if statment to check the name of these two clickers */
        else{
            /* check the first click with the card.name */
            if(firstClick.name === card.name){
                firstClick.match = 'match';
                card.match = 'match';
                setFirstClick(null);
                setScore(score+1)
                console.log('match')
            }else {
                card.status = false
                firstClick.status = false;
                setFirstClick(null);
                setFailed(failed+1)
                console.log('not match')
            }
        }
    } 
    const handleClick = () => {
        const update = cards.map(el => (el.status === true? {...el, status: false}: el));
        update.sort(() => Math.random() - Math.random())
        setFirstClick(null);
        setCards(update);
        setFailed(0)
        setScore(0)
    }

    return (
        <div>
        <Tools>
            <Failed>Failed: <span>{failed}</span></Failed>
            <Score>Score: <span>{score}</span></Score>
            <Reset onClick={handleClick}><img src='https://image.flaticon.com/icons/png/512/3419/3419446.png' alt='restart'/></Reset>
        </Tools>
        <Wrapper>
            {cards.map(card => (<Items card={card} checkClick={checkClick} status={card.status}/>))}
        </Wrapper>

        </div>

        
    )
}
export default Grid;