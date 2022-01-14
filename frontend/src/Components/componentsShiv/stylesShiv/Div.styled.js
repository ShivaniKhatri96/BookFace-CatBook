import styled from "styled-components";
import { DeviceMax } from "../Breakpoints";

export const Div = styled.div`
padding-right: 3%;
@media ${DeviceMax.sm} {
    font-size: 12px;
    font-weight: bold;
}

`