import styled from "styled-components";
import { DeviceMax, DeviceMin } from "../Breakpoints";

export const Div = styled.div`
padding-right: 3%;
@media ${DeviceMax.sm} {
    font-size: 15px;
    font-weight: bold;
}
@media ${DeviceMax.md} {
    font-size: 14px;
}
`