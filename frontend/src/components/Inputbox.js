import { StyledInput } from "./styles/Input.styled";
export default function Input({type, placeholder}){
    return(
        <StyledInput type={type} placeholder={placeholder} />
    )
}