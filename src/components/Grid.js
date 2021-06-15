import { Wrapper } from "../styles";
import Items from './Items'


function Grid(props) {
    return (
        <div>
            {props.cards.map(card => (<Items id={card.id}/>))}
        </div>
    )
}
export default Grid;