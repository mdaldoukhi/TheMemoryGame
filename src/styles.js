import styled from 'styled-components'
/* Start Grid */
export const Wrapper = styled.div `
display: flex;
flex-wrap: wrap;
    width: 45%;
    margin: auto;

    div {
        width: 25%;
        margin: 15px auto;
        div{
            width: 100%;
            height: 100%;
        }
    }
`;
export const Reset = styled.button `
    position: absolute;
    top: 50%;
    height: 50px;
    border-radius: 7px;
    left: 1%;
    width: 10%;
    margin: 15px auto;
    padding: 5px 10px;
    background-color: red;
    color: #fff;
    border: none;
    cursor: pointer;
    transition:  0.3s ease-out;
    :active {
        transform: translateY(10px);
    }
`;
/* End Grid */

/* Start Item */

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
/* End Item */
