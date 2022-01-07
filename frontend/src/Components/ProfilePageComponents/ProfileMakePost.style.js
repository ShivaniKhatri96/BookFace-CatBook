import styled from "styled-components";
import Ali from '../../assets/ali.png';

export const PostMain = styled.div`
  min-height: min-content;
  width: 80%;
  margin: 10px auto;
  background-color: #f8fcda;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  
`

export const ProfilePhotoPost = styled.div`
  width: 75px;
  height: 75px;
  margin: 0.5rem;
  align-self: center;
  border-radius: 50%;
  background-image: url(${Ali});
  background-size: cover;
  background-position: center;
`;

export const InputPost = styled.input`
    width: 80%;
    height: 3rem;
    margin: 0.5rem auto; 
    align-self: center;
    border-radius: 10px;
    border: 1px solid rgba(0,0,0, 0.5);
    text-align: center;
    text-weight: 300;
    font-size: 1.2rem;


`

