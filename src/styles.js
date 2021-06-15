import styled from 'styled-components'

export const Wrapper = styled.div `
display: flex;
flex-wrap: wrap;
    width: 100%;
    margin: 15px auto;

    div {
        width: 20%;
        margin: 15px;
        div{
            width: 100%;
            height: 100%;
        }
    }
`;
export const CardFace = styled.div `
    border: 1px solid blue;
`;
export const CardBack = styled.div `
border: 1px solid blue;
`;