import styled from "styled-components";
import { DeviceMax, DeviceMin } from "./Breakpoints";
export const StyledInput = styled.input`
  width: 80%;
  border: 2px solid #eaeaea;
  background: #fff9f9;
  @media ${DeviceMin.xs} {
    border-radius: 0.3rem;
    margin: 0.5rem 0 1.3rem 0;
    //stays the same for sm as well
    padding: 0.5rem 0.5rem 0.5rem 0.5rem;
    font-size: 14px;
  }
  @media ${DeviceMin.sm} {
    border-radius: 0.4rem;
    margin: 0.2rem 0 1.2rem 0;
  }
  @media ${DeviceMin.md} {
    border-radius: 0.5rem;
    padding: 0.6rem 0 0.6rem 1rem;
    margin: 0.5rem 0 1.3rem 0;
    font-size: 16px;
  }
  @media ${DeviceMin.xl} {
    padding: 1rem 0 1rem 1rem;
    margin: 0.5rem 0 1.3rem 0;
    font-size: 17px;
  }
  @media ${DeviceMin.xxl} {
    padding: 1.4rem 0 1.4rem 1rem;
    margin: 1rem 0 1.5rem 0;
  }
`;
