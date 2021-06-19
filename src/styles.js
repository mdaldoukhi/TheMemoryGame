import styled from 'styled-components'

/* Start header */
export const Header = styled.h1 `
	font-family: 'Gaegu', cursive;
	font-weight: 600;
	font-size: 2.3em;
	text-align: center;
	color: #9f81c8;
    
`;
/* End header */

/* Start Grid */
export const Wrapper = styled.div `
    display: flex;
    flex-wrap: wrap;
    width: 650px;
    margin: 10px auto;
    text-align:center;
	background: linear-gradient(160deg, #02ccba 0%, #aa7ecd 100%);
	padding: 1rem;
	border-radius: 1rem;
	box-shadow: 12px 15px 20px 0 rgba(46, 61, 73, 0.5);
    border-radius: 10px;
    height: 500px;
    div {
        width: 20%;
	    height: 5.5rem;
        margin: 5px 12px;
        div{
            width: 80%;
            height: 100%;
        }
    }
`;
export const Tools = styled.div `
position: relative;
width: 650px;
margin: auto;
display: flex;
justify-content: space-between;
`;
export const Reset = styled.button `
    background-color: transparent;
    width: 10%;
    border: none;
    img{
    width: 80%;
    cursor: pointer;
}
`;
export const Failed = styled.h2 `
    span {
        color: #9f81c8
    }
`;
export const Score = styled.h2 `
      span {
        color: #02ccba
    }  
`;
/* End Grid */

/* Start Item */

export const CardFace = styled.div `
	height: 5rem;
	width: 3.7rem;
	background: #2e3d49;
	font-size: 0; /* hide the icons */
	color: #ffffff; /* white*/
	border-radius: 8px; /* smooth the borders */
	cursor: pointer;
	display: flex; /*centers the icons */
	justify-content: center; /*centers the icons */
	align-items: center;
	box-shadow: 5px 2px 20px 0 rgba(46, 61, 73, 0.5); /*shadow*/
`;
export const CardBack = styled.div `
    &.match {
        background-color: #02ccba;
        border-radius: 1rem;
    }
    img {
        width: 80%;
        height: 80%;
        margin-top: 10px;
    }
`;
/* End Item */
