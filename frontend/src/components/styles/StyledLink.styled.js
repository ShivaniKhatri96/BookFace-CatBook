import styled from "styled-components";
import { Link } from "react-router-dom";
import { DeviceMin, DeviceMax } from "../Breakpoints";
export const StyledLinkDiv = styled.div`
  margin-top: 1rem;
  @media ${DeviceMax.sm} {
    color: #212121;
    font-size: 13px;
  }
  @media ${DeviceMin.md} {
    color: #9d9d9d;
    font-size: 16px;
  }
`;
export const StyledLink = styled(Link)`
  text-decoration: none;
  @media ${DeviceMax.sm} {
    color: #1C6DD0;
  }
  @media ${DeviceMin.md} {
    color: #548cff;
  }
`;
