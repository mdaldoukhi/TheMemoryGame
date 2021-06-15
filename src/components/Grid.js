import { Wrapper } from "../styles";
import Items from './Items'


function Grid(props) {
    return (
        <Wrapper>
            {props.cards.map(card => (<Items card={card}/>))}
        </Wrapper>
    )
}
export default Grid;