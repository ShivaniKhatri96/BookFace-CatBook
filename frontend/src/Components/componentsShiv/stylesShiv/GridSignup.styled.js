import styled from "styled-components";
import img5 from "../../pictures/signup5.jpg";
import {BsCheckCircleFill } from "react-icons/bs";
import { DeviceMax, DeviceMin } from"../Breakpoints";
export const GridSignup = styled.div``;

export const RowSignup = styled.div`
  display: flex;
  flex-direction: row;
  background: #ffffff;
  margin: auto;
  box-shadow: 5px 3px 20px 3px #f6f6f6;
  @media ${DeviceMax.sm} {
    background-image: url(${img5});
    background-repeat: no-repeat;
    background-size: cover;
    width: 92vw;
    height: 92vh;
    border-radius: 0.2rem;
    margin: 4vh auto 4vh auto;
  
  }
  @media ${DeviceMin.sm} {
    // height: 90vh;
    width: 90vw;
    margin: 6vh auto 4vh auto;
    padding: 3px;
    border-radius: 1rem;
    //border stays same for all screens
    border: 1px solid #f3f0d7;
  }
  @media ${DeviceMin.md} {
    width: 80vw;
    margin: 10vh auto 6vh auto;
    //same for below
    padding: 5px;
    border-radius: 1rem;
  }
  @media ${DeviceMin.lg} {
    width: 75vw;
    margin: 6vh auto 3vh auto;
  }
  @media ${DeviceMin.xl} {
    height: 90vh;
    width: 65vw;
    margin-top: 4vh;
  }
  @media ${DeviceMin.xxl} {
    width: 55vw;
  }
`;
export const Col1Signup = styled.div`
@media ${DeviceMin.sm} {
  display: flex;
  flex-direction: column;
  width: 50%;
  border-radius: 0.5rem;
  background-image: url(${img5});
  background-repeat: no-repeat;
  background-size: cover;
  margin: 1.5%;
  padding: 5% 0 3% 0;
}
`;
export const Col2Signup = styled.div`
@media ${DeviceMax.sm} {
  background-color: rgba(255, 255, 255, 0.45);
  width: 100%;
  height: 100%;
  border-radius: 0.2rem;
  padding: 2% 0 0 8.5%;
}
@media ${DeviceMin.sm} {
  width: 50%;
  margin: 0 0 1.5% 0;
  padding-left: 5%;
  font-weight: bold;
  h1 {
    font-size: 26px;
    margin-bottom: 1rem;
  }
  //same for all sizes
    font-weight: bold;
}
@media ${DeviceMin.md} {
  margin: 1% 0 1.5% 0;
  padding-left: 5.5%;
  h1 {
    font-size: 28px;
    margin-bottom: 1.4rem;
  }
}
@media ${DeviceMin.lg} {
  h1 {
    font-size: 32px;
    margin-bottom: 1.6rem;
  }
}
@media ${DeviceMin.xl} {
  h1 {
    font-size: 32px;
    margin-bottom: 1.8rem;
  }
}
@media ${DeviceMin.xxl} {
  h1 {
    margin-bottom: 2rem;
  }
}
`;
export const Col1BoxSignup = styled.div`
display: flex;
flex-direction: column;
background: rgba(0, 0, 0, 0.3);
//applying rgba color helps to have background have opacity 
//but exclude text to recieve opacity
margin: 0 8% 2% 8%;
padding: 4% 3% 4% 3%;
border-radius: 0.3rem;
color: #ffffff;
@media ${DeviceMax.sm} {
display:none;
}
@media ${DeviceMin.sm} {
  width: 70%;
}
@media ${DeviceMin.md} {
  width: 75%;
}
@media ${DeviceMin.lg} {
  width: 65%;
}
@media ${DeviceMin.xl} {
  width: 60%;
}
@media ${DeviceMin.xxl} {
  width: 50%;
}
`;
export const TextHeading = styled.div`
@media ${DeviceMin.sm} {
  font-size: 1.1rem;
  padding:5% 0 2% 0;
}
@media ${DeviceMin.md} {
  font-size: 1.3rem;
}
`;
export const TextContent = styled.div`
@media ${DeviceMin.sm} {
  font-size: 0.8rem;
}
@media ${DeviceMin.md} {
  font-size: 1.1rem;
}
`;
export const CircleIcon = styled(BsCheckCircleFill)`
@media ${DeviceMin.sm} {
  color:white;
  opacity: 0.50;
  font-size: 2rem;
}
`
