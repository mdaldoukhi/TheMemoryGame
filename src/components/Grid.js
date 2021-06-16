import { useState } from "react";
import { Wrapper } from "../styles";
import Items from './Items'
import cardsData from "../Cards"

cardsData.sort(() => Math.random() - Math.random()).find(() => true);
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
                firstClick.status = false
                card.status = false
                setFirstClick(null);
                console.log('not match')
            }
        }
        
    } 


    return (
        <Wrapper>
            {cards.map(card => (<Items card={card} checkClick={checkClick} status={card.status}/>))}
        </Wrapper>
        
    )
}
export default Grid;