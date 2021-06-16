import styled from 'styled-components'

export const Wrapper = styled.div `
display: flex;
flex-wrap: wrap;
    width: 50%;
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
    img {
        width: 50%;
        height: 100%;
    }
`;
export const CardBack = styled.div `
    img {
        width: 50%;
        height: 100%;
    }
`;