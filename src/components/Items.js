import { CardBack, CardFace, } from "../styles";
import { useState } from "react";
import ReactCardFlip from 'react-card-flip';


function Items(props) {
    const [isFlipped, setIsFlipped] = useState(false)
  const handleClick = () => {
    setIsFlipped(!isFlipped)
  }
    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <CardFace onClick={handleClick}>
          {props.card.id}
        </CardFace>

        <CardBack onClick={handleClick}>
        {props.card.name}
        </CardBack>
      </ReactCardFlip>
        
    )
}

export default Items;