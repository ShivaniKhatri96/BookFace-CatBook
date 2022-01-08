import styled from "styled-components";
import img from "../../pictures/catsignup.jpg";
import {BsCheckCircleFill } from "react-icons/bs";
export const GridSignup = styled.div``;

export const RowSignup = styled.div`
  display: flex;
  flex-direction: row;
  height: 90vh;
  width: 55vw;
  background: #ffffff;
  margin: auto;
  margin-top: 4vh;
  border: 1px solid #f3f0d7;
  padding: 5px;
  border-radius: 1rem;
  box-shadow: 5px 3px 20px 3px #f6f6f6;
`;
export const Col1Signup = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  border-radius: 0.5rem;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: cover;
  margin: 1.5%;
  padding-top: 5%;
`;
export const Col2Signup = styled.div`
  width: 50%;
  border-radius: 0.5rem;
  margin: 3.5% 0 1.5% 0;
  padding-left: 5.5%;
  font-weight: bold;
  h1 {
    margin-bottom: 2rem;
  }
`;
export const Col1BoxSignup = styled.div`
  display: flex;
  flex-direction: column;
  background: rgba(0, 0, 0, 0.2);
  //applying rgba color helps to have background have opacity 
  //but exclude text to recieve opacity
  width: 50%;
  margin: 0 0 2% 8%;
  padding: 4% 3% 4% 3%;
  border-radius: 0.3rem;
  color: #ffffff;
`;
export const TextHeading = styled.div`
  font-size: 1.3rem;
  padding:5% 0 2% 0;
`;
export const TextContent = styled.div`
  font-size: 1.1rem;
`;
export const CircleIcon = styled(BsCheckCircleFill)`
color:white;
opacity: 0.50;
font-size: 2rem;
`
