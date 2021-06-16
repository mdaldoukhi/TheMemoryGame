import { CardBack, CardFace, } from "../styles";
import { useState } from "react";
import ReactCardFlip from 'react-card-flip';


function Items(props) {

    const [isFlipped, setIsFlipped] = useState(false)
    const handleClick = () => {
        setIsFlipped(!isFlipped)
        props.card.status = true
        props.checkClick(props.card)
  }
  
  if(props.card.status == false && isFlipped == true) setIsFlipped(false) 

    return (  
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal" >
        <CardFace onClick={handleClick} cardName={props.card.name}>
          <img src="https://cdn.shopify.com/s/files/1/0200/7616/products/playing-cards-aviator-1_1024x1024.png?v=1530155012"/>
        </CardFace>
        <CardBack>
        <img src={props.card.image}/>
        </CardBack>
      </ReactCardFlip>
    )
}

export default Items;