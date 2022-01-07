import styled from 'styled-components';
import Ali from '../../assets/ali.png';

export const Main = styled.div`
  min-height: min-content;
  width: 70%;
  margin: 0 auto;
  margin-top: 10px;
  background-color: #f8fcda;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  position: relative;
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
`;

export const ProfileMain = styled.div`
  width: 100%;
  height: 200px;
  z-index: 999;
  display: flex;
  justify-content: space-evenly;
`;

export const ProfilePhoto = styled.div`
  width: 200px;
  height: 200px;
  display: block;
  margin: -100px 50px 50px 50px;
  z-index: 999;
  margin: -100px 50px 50px 50px;
  border: 10px solid #f8fcda;
  border-radius: 50%;
  background-image: url(${Ali});
  background-size: cover;
  background-position: center;
`;

export const ProfileName = styled.div`
  width: 50%;
  min-height: min-content;
  font-weight: 300;
  font-size: 2rem;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`;

export const Spa = styled.span`
  font-weight: 400;
  font-size: 1.5rem;
  margin-top: 0.9rem;
`;

export const SpaTitle = styled.span`
  font-weight: 300;
  font-size: 1.1rem;
  margin-top: 0.9rem;
`;

export const SpaText = styled.span`
  font-weight: 200;
  font-size: 0.9rem;
  margin-bottom: 2rem;
`;
