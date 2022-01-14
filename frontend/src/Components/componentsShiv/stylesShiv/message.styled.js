import styled from "styled-components";
import { DeviceMax, DeviceMin } from "../Breakpoints";

export const Mesg = styled.p`
padding-right: 3%;
color: red;
@media ${DeviceMax.sm} {
    font-size: 10px;
    font-weight: bold;
}
@media ${DeviceMin.md} {
    font-size: 15px;
}
`