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
        <CardFace onClick={handleClick} cardName={props.card.name}>
          <img src="https://cdn.shopify.com/s/files/1/0200/7616/products/playing-cards-aviator-1_1024x1024.png?v=1530155012"/>
        </CardFace>
        <CardBack >
        <img src={props.card.image}/>
        </CardBack>
      </ReactCardFlip>
    )
}

export default Items;