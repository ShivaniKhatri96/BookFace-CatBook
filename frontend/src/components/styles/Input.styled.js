import styled from "styled-components";
import { DeviceMax, DeviceMin } from "../Breakpoints";
export const StyledInput = styled.input`
  width: 80%;
  border: 2px solid #eaeaea;
  margin: 0.5rem 0 1.3rem 0;
  background: #fff9f9;
  @media ${DeviceMax.sm} {
    border-radius: 0.3rem;
    padding: 0.5rem 0.5rem 0.5rem 0.5rem;
    font-size: 14px;
  }
  @media ${DeviceMin.md} {
    border-radius: 0.5rem;
    padding: 1rem 0 1rem 1rem;
    font-size: 17px;
  }
  
  
 
  
`;
