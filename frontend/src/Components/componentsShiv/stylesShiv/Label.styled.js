import styled from "styled-components";
import { DeviceMax } from "../Breakpoints";
export const Label = styled.label`
@media ${DeviceMax.sm} {
    font-weight: bold;
}
`