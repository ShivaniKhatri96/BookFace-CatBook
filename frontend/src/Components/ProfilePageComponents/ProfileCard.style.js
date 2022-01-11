import styled from 'styled-components';
import Ali from '../../assets/ali.png';
import { DeviceMax, DeviceMin } from '../Breakpoints'

export const Main = styled.div`
  height: min-content;
  width: 80%;
  margin: 0 auto 0 auto;
  margin-top: 10px;
  background-color: #f8fcda;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  position: relative;

 
  @media ${DeviceMax.xs} {
    width: 100%;
  }

  @media ${DeviceMax.xs && DeviceMax.sm} {
    width: 100%;
    border: none;
  }
  
`;

export const CoverPhoto = styled.div`
  height: 15rem;
  margin: 10px;
  background-image: url(${Ali});
  background-size: cover;
  background-position: center;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  z-index: 1;
  overflow: hidden;
  
 
  @media ${DeviceMax.sm} {
    flex-driection: column;
    justify-content: center;
  }

  @media ${DeviceMax.xs && DeviceMax.sm} {
    flex-driection: column;
    justify-content: center;
  }
`;

export const ProfileMain = styled.div`
  width: 100%;
  height: 200px;
  z-index: 999;
  display: flex;
  justify-content: space-evenly;

  @media ${DeviceMax.xs} {
    flex-direction: column;
    justify-content: center;
    height: min-content;
  }

  @media ${DeviceMax.xs && DeviceMax.sm} {
    flex-direction: column;
    justify-content: center;
    height: min-content;
    margin-left: auto;
  }
  
`;

export const ProfilePhoto = styled.div`
  width: 10rem;
  height: 10rem;
  display: block;
  margin: -100px 50px 50px 50px;
  z-index: 999;
  border: 10px solid #f8fcda;
  border-radius: 50%;
  background-image: url(${Ali});
  background-size: cover;
  background-position: center;


  @media ${DeviceMax.xs} {
    width: 10rem;
    height: 10rem;
    display: flex;
   
  
  }

  @media ${DeviceMax.xs && DeviceMax.sm} {
    width: 10rem;
    height: 10rem;
    display: flex;
    margin: -100px auto 50px auto;
  }
  

  
`;

export const ProfileName = styled.div`
  width: 50%;
  min-height: min-content;
  font-weight: 300;
  font-size: 2rem;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;

  @media ${DeviceMax.xs} {
    width: 100%;
    height: min-content;
    justify-content: center;
  }
 
  @media ${DeviceMax.xs && DeviceMax.sm} {
    width: 100%;
    height: min-content;
    justify-content: center;
  }
  
`;

export const Spa = styled.span`
  font-weight: 400;
  font-size: 1.5rem;
  margin-top: 0.9rem;

  @media ${DeviceMax.xs} {
    text-align: center;
  }

  @media ${DeviceMax.xs && DeviceMax.sm} {
    text-align: center;
  }
 
`;

export const SpaTitle = styled.span`
  font-weight: 300;
  font-size: 1.1rem;
  margin-top: 0.9rem;

  @media ${DeviceMax.xs} {
    text-align: center;
  }

  @media ${DeviceMax.xs && DeviceMax.sm} {
    text-align: center;
  }
`;

export const SpaText = styled.span`
  font-weight: 200;
  font-size: 0.9rem;
  margin-bottom: 2rem;

  @media ${DeviceMax.xs} {
    text-align: center;
  }
  @media ${DeviceMax.xs && DeviceMax.sm} {
    text-align: center;
  }
`;
