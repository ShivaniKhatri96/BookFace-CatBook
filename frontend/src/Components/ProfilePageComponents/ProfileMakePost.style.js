import { AiFillCloseCircle } from 'react-icons/ai';
import styled from 'styled-components';
import Ali from '../../assets/ali.png';
import { DeviceMax, DeviceMin } from '../Breakpoints'



export const PostMain = styled.div`
  min-height: min-content;
  width: 80%;
  margin: 10px auto 10px auto;
  background-color: #f8fcda;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  @media ${DeviceMax.xs} {
    width: 100%;
  }

  @media ${DeviceMax.xs && DeviceMax.sm} {
    width: 100%;
    
    
  }

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

  @media ${DeviceMax.xs} {
    display: none;
  }

  @media ${DeviceMax.xs && DeviceMax.sm} {
    display: none;
    
  }
`;

export const InputPost = styled.input`
  width: 80%;
  height: 3rem;
  margin: 0.5rem auto;
  align-self: center;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  text-weight: 200;
  font-size: 1rem;

  @media ${DeviceMax.xs} {
    width: 100%;
  }

  @media ${DeviceMax.xs && DeviceMax.sm} {
    width: 100%;
  }
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

  @media ${DeviceMax.xs} {
    justify-content: center;
    text-align: center;
    margin: 0 auto;
    border: none;
  }

  @media ${DeviceMax.xs && DeviceMax.sm} {
    justify-content: center;
    text-align: center;
    margin: 0 auto;
    border: none;
  }
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
  width: 20%;

  @media ${DeviceMax.xs} {
    display: none;
  }

  @media ${DeviceMax.xs && DeviceMax.sm} {
    display: none;
  }
`;

export const OpenedfirstRow = styled.div`
  height: min-content;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  @media ${DeviceMax.xs} {
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 0 auto;
  }

  @media ${DeviceMax.xs && DeviceMax.sm} {
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 0 auto;
  }
`;

export const OpenedSecondRow = styled.div`
  height: min-content;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-top: 1px solid rgba(0, 0, 0, 0.2);

  @media ${DeviceMax.xs} {
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 0 auto;
  }

  @media ${DeviceMax.xs && DeviceMax.sm} {
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 0 auto;

  }
`;
export const OpenedProfileName = styled.div`
  width: 50%;
  margin: auto 10px;
  font-weight: 300;
  font-size: 1.5rem;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;

  @media ${DeviceMax.xs} {
    width: 50%;
    justify-content: center;
    border: none;
  }

  @media ${DeviceMax.xs && DeviceMax.sm} {
    width: 50%;
    border: none;
    justify-content: center;
  }
`;

export const OpenedInputPost = styled.textarea`
  width: 90%;
  min-height: 5rem;
  margin: 0.5rem auto;
  align-self: center;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  font-weight: 300;
  font-size: 1rem;

  &::-webkit-textarea-placeholder {
    text-align: center;
    align-self: center;

  }

  
`;

export const OpenedAddPhoto = styled.div`
  width: 50%;
  height: 3rem;
  margin: 10px 0 ;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  

  @media ${DeviceMax.xs} {
    width: 50%;
    justify-content: center;
    border: 1px solid rgba(0,0,0,0.2);
  border-radius: 10px;
    
  }

  @media ${DeviceMax.xs && DeviceMax.sm} {
    width: 50%;
    justify-content: center;
    border: 1px solid rgba(0,0,0,0.2);
  border-radius: 10px;
  }
`;

export const AddPhotoVideo = styled.div`
  width: 100%;
  height: min-content;;
  margin: 10px 0;
  font-weight: 200;
  display: flex;
  padding: 0 3rem;
  justify-content: flex-start;
  text-align: center;
  align-self: center;
  align-items: center;
  
  

  @media ${DeviceMax.xs} {
    width: 50%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 0;
  }

  @media ${DeviceMax.xs && DeviceMax.sm} {
    width: 50%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 0;
  }
`;

export const AddPhotoIcon = styled.div`
  height: 2rem;
  margin: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(0,0,0,0.2);
  border-radius: 10px;
  padding: 0 10px;

  @media ${DeviceMax.xs} {
    width: 50%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 0 1rem;  
  }

  @media ${DeviceMax.xs && DeviceMax.sm} {
    width: 80%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 0 1rem; 
  }

  
`
export const AddVideoPhotoContent = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  border-radius: 10px;
  margin: 10px auto;

  @media ${DeviceMax.xs} {
    width: 100%;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  @media ${DeviceMax.xs && DeviceMax.sm} {
    width: 100%;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  



`

export const CloseButtonVideo = styled(AiFillCloseCircle)`
  margin: .5rem;

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
    font-weight: 100;
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
 
  display: flex;
  justify-content: center;
  align-self: center;
  align-items: center;
  width: 10%;
  margin: auto;
  height: 2rem;
  background-color: transparent;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 10px;


`