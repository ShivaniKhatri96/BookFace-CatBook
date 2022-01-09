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
    margin-top: 4vh;
  }

  @media ${DeviceMin.md} {
    height: 75vh;
    width: 50vw;
    margin-top: 10vh;
    border: 1px solid #f3f0d7;
    padding: 5px;
    border-radius: 1rem;
  }
`;
export const Col1Login = styled.div`
  @media ${DeviceMin.md} {
    width: 50%;
    border-radius: 0.5rem;
    background-image: url(${img});
    background-repeat: no-repeat;
    background-size: cover;
    margin: 1.5%;
  }
`;
export const Col2Login = styled.div`
  @media ${DeviceMax.sm} {
    background-color: rgba(255, 255, 255, 0.35);
    width: 100%;
    height: 100%;
    border-radius: 0.2rem;
    padding:15% 0 0 8.5%;
  }
  @media ${DeviceMin.md} {
    width: 50%;
    margin: 5.5% 0 1.5% 0;
    padding-left: 5.5%;
    font-weight: bold;
    h1 {
      margin-bottom: 2rem;
    }
  }
`;
