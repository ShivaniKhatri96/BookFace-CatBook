import styled from "styled-components";
import { DeviceMax, DeviceMin } from "../Breakpoints";
// import { DeviceMax, DeviceMin } from "./Breakpoints";
export const StyledButton = styled.button`
border: 2px solid #A94F2F;
background: #A94F2F;
color: white;
// -ve spread value: -12px helps to keep shadow only in -x and -y axis
box-shadow: 5px 10px 25px -12px  #A94F2F; 
cursor: pointer;
@media ${DeviceMin.xs} {
    width: 87%;
    border-radius: 0.3rem;
    font-size: 14px;
    margin: 0 0 0.4rem 0;
    //padding remains same
    padding: 0.5rem 0.5rem 0.5rem 0.5rem;
}
@media ${DeviceMin.sm} {
    width: 86%;
    border-radius: 0.4rem;
    margin: 0 0 0.5rem 0;
}
@media ${DeviceMin.md} {
    width: 87%;
    border-radius: 0.5rem;
    font-size: 16px;
    margin: 0 0 0.5rem 0;
    padding: 0.6rem 0 0.6rem 0;
}
@media ${DeviceMin.lg} {
    width: 86%;
    margin: 0 0 1.5rem 0;
}
@media ${DeviceMin.xl} {
    width: 85%;
    margin: 0 0 1.5rem 0;
    padding: 1rem 0 1rem 0;
    font-size: 17px;
}
@media ${DeviceMin.xxl} {
    width: 84%;
    padding: 1.4rem 0 1.4rem 0;
}
`



