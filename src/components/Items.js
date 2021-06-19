import { CardBack, CardFace, } from "../styles";
/* Global  */
import { useState } from "react";
/* Library React Card Flip */
import ReactCardFlip from 'react-card-flip';


function Items(props) {
    /* State to flip the card if is it true and unflip it in false */
    const [isFlipped, setIsFlipped] = useState(props.card.status)
    /* flip the card once clicked, change the card status to be true, and check the second card with the first card */
    const handleClick = () => {
        setIsFlipped(!isFlipped)
        props.card.status = true
        setTimeout(() => {props.checkClick(props.card)}, 700);     
  }
    /* Return to Grip the cards  */
    return (  
        <ReactCardFlip isFlipped={props.card.status} flipDirection="horizontal" >
        <CardFace onClick={handleClick} cardName={props.card.name} >
        </CardFace>
        <CardBack className={props.card.match}>
        <img src={props.card.image} alt={props.card.name}/>
        </CardBack>
      </ReactCardFlip>
    )
}

export default Items;