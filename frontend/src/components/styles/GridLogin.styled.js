import styled from "styled-components";
import img from "../../pictures/catlogin.jpg";
export const GridLogin = styled.div`
`;

export const RowLogin = styled.div`
display: flex;
flex-direction: row;
height: 75vh;
width: 50vw;
background: #ffffff;
margin: auto;
margin-top: 10vh;
border: 1px solid #F3F0D7;
padding: 5px;
border-radius: 1rem;
box-shadow: 5px 3px 20px 3px #F6F6F6;
`;
export const Col1Login = styled.div`
width: 50%;
border-radius: 0.5rem;
background-image: url(${img});
background-repeat: no-repeat;
background-size: cover;
margin: 1.5%;
`;
export const Col2Login = styled.div`
width: 50%;
border-radius: 0.5rem;
margin: 5.5% 0 1.5% 0;
padding-left: 5.5%;
font-weight: bold;
h1{
    margin-bottom: 2rem;
}

`;

