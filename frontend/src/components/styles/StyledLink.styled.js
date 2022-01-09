import styled from "styled-components";
import { Link } from "react-router-dom";
import { DeviceMin, DeviceMax } from "../Breakpoints";
export const StyledLinkDiv = styled.div`

  @media ${DeviceMax.sm} {
    color: #212121;
    font-size: 13px;
    margin-top: 1rem;
  }
  @media ${DeviceMin.sm} {
    color: #9d9d9d;
    font-size: 14px;
    margin-top: 0.1rem;
  }
  @media ${DeviceMin.md} {
    font-size: 16px;
    margin-top: 0.5rem;
  }
`;
export const StyledLink = styled(Link)`
  text-decoration: none;
  @media ${DeviceMax.sm} {
    color: #1C6DD0;
  }
  @media ${DeviceMin.sm} {
    color: #548cff;
  }
`;
