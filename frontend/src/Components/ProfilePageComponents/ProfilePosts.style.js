import styled from 'styled-components';
import { DeviceMax, DeviceMin } from '../../Components/styles/Breakpoints'

export const ProfilePostsMain = styled.div`
  min-height: min-content;
  width: 80%;
  margin: 0 auto 10px auto;
  margin-top: 10px;
  background-color: #f8fcda;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  position: relative;

  @media ${DeviceMax.xs} {
    width: 100%;
    margin-top: 0px;
    
  }

  @media ${DeviceMax.xs && DeviceMax.sm} {
    width: 100%;
    border: none;
    margin-top: 0px;
  }
  
`;

export const CatPostsTitle = styled.div`
  width: 100%;
  height: 5rem;
`;

export const SpaTitle4 = styled.div`
  margin: 1rem 7rem;
`;

export const TitleWrapper = styled.div`
  width: 100%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;
