import { AiFillCloseCircle } from 'react-icons/ai';
import styled from 'styled-components';
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
`;

export const ProfilePhotoPost = styled.div`
  width: 75px;
  height: 75px;
  margin: 0.5rem auto;
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
  border: 1px solid rgba(0, 0, 0, 0.5);
  text-weight: 200;
  font-size: 1.1rem;
`;

export const OpenedPostHeader = styled.div`
  min-height: min-content;
  width: 100%;
  margin: 0 auto;
  background-color: #f8fcda;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const SpaTitle2 = styled.div`
  width: 100%;
  align-items: center;
  text-align: center;
  align-self: center;
  margin-left: 2rem;
`;
export const CloseButton = styled(AiFillCloseCircle)`
  align-self: center;
  display: inline-block;
`;

export const OpenedPostContent = styled.div`
  min-height: min-content;
  width: 100%;
  margin: 10px auto;
  background-color: #f8fcda;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const OpenedPostProfile = styled.div`
  width: 150px;
`;

export const OpenedfirstRow = styled.div`
  height: min-content;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

export const OpenedProfileName = styled.div`
  width: 50%;
  margin: auto 10px;
  font-weight: 300;
  font-size: 1.5rem;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`;

export const OpenedInputPost = styled.input`
  width: 90%;
  min-height: 5rem;
  margin: 0.5rem auto;
  align-self: center;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  font-weight: 300;
  font-size: 1.2rem;

  &::-webkit-input-placeholder {
    text-align: center;
    font-weight: 200;

  }
`;

export const OpenedAddPhoto = styled.div`
  width: 90%;
  height: 2rem;
  margin: 10px auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  align-items: center;

  //add media query
`;

export const AddPhotoVideo = styled.div`
  font-weight: 200;
  margin: 0 50px;
`;

export const AddPhotoIcon = styled.div`
  margin: 50px;
  display: flex;
  border: 1px solid rgba(0,0,0,0.2);
  border-radius: 10px;
  padding: 0 10px;

  
`
export const AddVideoPhotoContent = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  border-radius: 10px;
  margin: 10px auto;
  



`

export const CloseButtonVideo = styled(AiFillCloseCircle)`
  margin: 0 0 0 0;

`;

export const GetUrl = styled.input`
  width: 90%;
  min-height: 2rem;
  margin: 0.5rem auto;
  align-self: center;
  content: "Add a video";
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  font-weight: 300;
  font-size: 1rem;

  &::-webkit-input-placeholder {
    text-align: center;
    font-weight: 300;
  }

  &:focus {
    outline: 0;
  }

`;




export const EmptyVideoPlayer = styled.div`
  width: 80%;
  margin: auto;
  height: 100px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding: 10px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: 200;
  font-size: 1rem;

  
`

export const AddedPhoto = styled.img`
  width: 100%;
  margin: auto;
  height: 50%;
  display: block;

`

export const SendButton = styled.button`
  align-self: center;
  width: 10%;
  margin: auto;
  height: 2rem;
  background-color: transparent;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 10px;


`