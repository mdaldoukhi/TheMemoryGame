import { useState } from "react";
import { Reset, Wrapper } from "../styles";
/* Component */
import Items from './Items'
/*  */
import cardsData from "../Cards"

cardsData.sort(() => Math.random() - Math.random());

function Grid() {

    /* Add useState and mod. */
    const [cards, setCards] = useState(cardsData)
    const [firstClick, setFirstClick] = useState(null);
    //const [secClick, setSecClick] = useState(null);
    const checkClick = (card) => {
        if(firstClick === null){setFirstClick(card);}
            /* if statment to check the name of these two clickers */
        else{
            /* check the first click with the card.name */
            if(firstClick.name === card.name){
                setFirstClick(null);
                console.log('match')
            }else {
                
                card.status = false
                firstClick.status = false;
                setFirstClick(null);
                console.log('not match')
            }
        }
    } 
    const handleClick = () => {
        const update = cards.map(el => (el.status===true? {...el, status: false}: el));
        update.sort(() => Math.random() - Math.random())
        setFirstClick(null);
        setCards(update)
    }

    return (
        <div>
        <Wrapper>
            {cards.map(card => (<Items card={card} checkClick={checkClick} status={card.status}/>))}
        </Wrapper>
        <Reset onClick={handleClick}>Reset</Reset>
        </div>

        
    )
}
export default Grid;