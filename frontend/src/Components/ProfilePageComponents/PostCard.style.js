import styled from 'styled-components';
import Ali from '../../assets/ali.png';
import { HiDotsHorizontal, HiDotsVertical } from 'react-icons/hi';
import { BiLike } from 'react-icons/bi';
import { DeviceMax, DeviceMin } from '../../Components/styles/Breakpoints'



export const UserPostCard = styled.div`
  width: 80%;
  margin: 10px auto;
  min-height: max content;
  background-color: #f8fcda;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  @media ${DeviceMax.xs} {
    width: 100%;
    border: none;
    
  }

  @media ${DeviceMax.xs && DeviceMax.sm} {
    width: 100%;
    border: none;
    
    
    
  }
`;

export const CardMainHeader = styled.div`
  min-height: 5rem;
  width: 80%;
  margin: 10px auto;
  background-color: #f8fcda;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between; 

  
`;
export const CardMainHeaderPhoto = styled.img`
  width: 75px;
  height: 75px;
  margin: 0.5rem;
  border-radius: 50%;
  background-image: url(${Ali});
  background-size: cover;
  background-position: center;

  @media ${DeviceMax.xs} {
    width: 100%;
    margin: 0;
    
  }

  @media ${DeviceMax.xs && DeviceMax.sm} {
    width: 100%;
    margin: 0;
    
    
    
  }
`;

export const CardTitleName = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-self: center;

  @media ${DeviceMax.xs} {
    display: none;
    
  }

  @media ${DeviceMax.xs && DeviceMax.sm} {
    display: none;
    
    
    
  }
`;
export const CardTitleInfos = styled.div`
  width: 30%;
  display: flex;
  justify-content: space-between;
`;

export const ThreeDots = styled(HiDotsHorizontal)`
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 10px;
  align-self: center;
  position: relative;
`;

export const ThreeDotsVert = styled(HiDotsVertical)`
  border-left: 1px solid rgba(0, 0, 0, 0.2);
  padding-left: 15px;
  align-self: center;
  position: relative;
`;

export const ThreeDotsMenu = styled.div`
  width: 10rem;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  position: absolute;
  display: flex;
  align-self: center;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;

  @media ${DeviceMax.xs} {
    width: 8rem;
    
  }

  @media ${DeviceMax.xs && DeviceMax.sm} {
    width: 8rem;
    
    
    
  }
`;

export const CardTitleChange = styled.div`
  width: 30%;
  display: flex;
  flex: 1;
  justify-content: flex-end;
`;

export const CardMainContentWrapper = styled.div`
  width: 80%;
  min-height: min-content;
  margin: 10px auto;
  display: flex;
  flex-direction: column;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

export const CardMainContentText = styled.div`
  width: 100%;
  min-height: min-content;
  margin: 10px auto;
`;

export const CardMainContextPhoto = styled.img`
  width: 100%;
  margin: auto;
  height: 50%;
  display: block;
`;

export const CardMainContentVideo = styled.div`
  width: 100%;
  margin: 10px auto;
  min-heigh: 50rem;
  display: block;
 
`;

export const CardCommentLikeWrapper = styled.div`
  width: 80%;
  min-height: min-content;
  margin: 10px auto;
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 10px;
`;

export const CardCommentLikeSection = styled.div`
  width: 100%;
  height: 2rem;
  display: flex;
  flex-direction: row;
`;

export const LikebuttonWrapper = styled.div`
  width: 20%;
  display: flex;
  justify-content: space-between;
  @media ${DeviceMax.xs} {
    width: 100%;
    border: none;
    
  }

  @media ${DeviceMax.xs && DeviceMax.sm} {
    width: 100%;
    border: none;
    
    
    
  }
`;
export const LikeButton = styled(BiLike)`
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 50px;
  padding: 10px;
  margin: 10px;
  width: 20%;

  &:hover {
      border: border: 1px solid rgba(0, 0, 0, 0.5);
      transition: border 1s;
  } 
`;



export const LikeText = styled.span`
    text-align: center;
    width: 80%;
    margin: auto 5px;
    display: inline-block;
    
`