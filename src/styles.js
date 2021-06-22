import styled from 'styled-components'

/* First message for the user contain [button to start] and [paragraph] */
export const StartBtn = styled.span `
    position: relative;
    display: inline-flex;
    width: 88%;
    height: 55px;
    perspective: 1000px;
    justify-content: center;
    margin: 100px 0;
    i{
    cursor: pointer;
    font-size: 19px;
    letter-spacing: 1px;
    transform-style: preserve-3d;
    transform: translateZ(-25px);
    transition: transform .25s;
    font-family: 'Montserrat', sans-serif;
    }
    i:before,
    i:after{
    position: absolute;
    content: "START";
    height: 55px;
    width: 180px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 5px solid black;
    box-sizing: border-box;
    border-radius: 5px;
    }
    i:before{
    color: #fff;
    background: #000;
    transform: rotateY(0deg) translateZ(25px);
    }
    i:after{
    color: #000;
    transform: rotateX(90deg) translateZ(25px);
    }
    i:hover{
    transform: translateZ(-25px) rotateX(-90deg);
    }
    &.true{display:none}
`;
export const Note = styled.p `
    margin: auto;
    width: 45%;
    line-height: 1.7;
    font-size: 25px;
    font-weight: bold;
    color: #02ccba;
    font-family: Copperplate;
    text-align: center;
    span{
        color: red;
        display: inline-block;
        font-weight: bold;
        font-size: 35px;
    }
`;
/* End */

/* Start header */
export const Header = styled.h1 `
	font-family: Copperplate;
	font-weight: 600;
	font-size: 3em;
	text-align: center;
	color: #9f81c8;
    
`;
/* End header */

/* Start Grid */
export const Wrapper = styled.div `
    display: flex;
    flex-wrap: wrap;
    width: 650px;
    margin: 15px auto;
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
    @media (max-width: 768px) {
    width: 100%;
    margin:0 auto;
    div {
        width: 25%;
	    height: 5.5rem;
        margin: 0;
    }
  }
`;
export const Tools = styled.div `
position: relative;
width: 650px;
margin: auto;
display: flex;
justify-content: space-between;
@media (max-width: 768px) {
    width: 100%;
  }
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
    font-family: Copperplate;
    font-size: 2rem;
    span {
        color: #FF0000
    }
`;
export const Score = styled.h2 `
    font-family: Copperplate;
    font-size: 2rem;
      span {
        color: #02ccba
    }  
`;
export const Timer = styled.h2 `
    text-align: center;
    font-family: Copperplate;
	font-size: 3em;
    margin: 15px;
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
