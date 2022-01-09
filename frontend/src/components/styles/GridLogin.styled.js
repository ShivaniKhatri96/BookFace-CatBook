import styled from "styled-components";
import img from "../../pictures/catlogin.jpg";
import { DeviceMax, DeviceMin } from "../Breakpoints";
export const GridLogin = styled.div``;

export const RowLogin = styled.div`
  display: flex;
  flex-direction: row;
  background: #ffffff;
  margin: auto;
  box-shadow: 5px 3px 20px 3px #f6f6f6;
  @media ${DeviceMax.sm} {
    background-image: url(${img});
    background-repeat: no-repeat;
    background-size: cover;
    width: 85vw;
    height: 90vh;
    border-radius: 0.2rem;
    margin: 4vh auto 4vh auto;
  }
  @media ${DeviceMin.sm} {
    width: 90vw;
    //height declaration affects responsive layout. So, not using from sm screens
    margin: 6vh auto 4vh auto;
    padding: 3px;
    border-radius: 0.4rem;
    //border stays same for all screens
    border: 1px solid #f3f0d7;
  }

  @media ${DeviceMin.md} {
    width: 80vw;
    margin: 20vh auto 6vh auto;
    //same for below
    padding: 5px;
    border-radius: 1rem;
  }
  @media ${DeviceMin.lg} {
    width: 70vw;
    margin: 10vh auto 3vh auto;
  }
  @media ${DeviceMin.xl} {
    height: 75vh;
    margin: 10vh auto 6vh auto;
  }
  @media ${DeviceMin.xxl} {
    width: 50vw;
  }
`;
export const Col1Login = styled.div`
  @media ${DeviceMin.sm} {
    width: 40%;
    border-radius: 0.4rem;
    margin: 1%;
    //not changed
    background-image: url(${img});
    background-repeat: no-repeat;
    background-size: cover;
  }
  @media ${DeviceMin.md} {
    width: 45%;
    border-radius: 0.5rem;
    margin: 1.5%;
  }
`;
export const Col2Login = styled.div`
  @media ${DeviceMax.sm} {
    background-color: rgba(255, 255, 255, 0.35);
    width: 100%;
    height: 100%;
    border-radius: 0.2rem;
    padding: 15% 0 0 8.5%;
  }
  @media ${DeviceMin.sm} {
    width: 60%;
    margin: 0 0 2.5% 0;
    padding-left: 5%;
    h1 {
      margin-bottom: 1rem;
    }
    //same for all sizes
    font-weight: bold;
  }
  @media ${DeviceMin.md} {
    width: 50%;
    margin: 5.5% 0 5.5% 0;
    padding-left: 5.5%;
    h1 {
      margin-bottom: 1.2rem;
    }
  }
  @media ${DeviceMin.lg} {
    h1 {
      margin-bottom: 1.4rem;
    }
  }
  @media ${DeviceMin.xl} {
    h1 {
      margin-bottom: 2rem;
    }
  }
`;
