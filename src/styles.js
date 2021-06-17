import styled from 'styled-components'

/* Start header */
export const Header = styled.h1 `
    text-align: center;
    color: #fca311
`;
/* End header */

/* Start Grid */
export const Wrapper = styled.div `
display: flex;
flex-wrap: wrap;
    width: 40%;
    margin: auto;
    text-align:center;
    border: 5px solid #e5e5e5;
    border-radius: 10px;
    padding: 15px;
    div {
        width: 25%;
        margin: 10px auto;
        div{
            width: 100%;
            height: 100%;
        }
    }
`;
export const Reset = styled.button `
    position: absolute;
    top: 0%;
    height: 50px;
    border-radius: 7px;
    left: 61%;
    width: 10%;
    margin: 15px auto;
    padding: 5px 10px;
    background-color: #e5e5e5;
    color: #14213d;
    font-size: 18px;
    font-weight: bold;
    border: none;
    cursor: pointer;
    transition:  0.3s ease-out;
    :active {
        transform: translateY(10px);
    }
    :hover {
        background-color: #14213d;
        color: #e5e5e5
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
