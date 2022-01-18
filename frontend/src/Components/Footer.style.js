import styled from 'styled-components';

export const FooterContainer = styled.div`
  height: 110px;
  background-color: #f9fbb2;
  margin-top: auto;
  padding: 0;
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 800px) {
    flex-direction: column;
    justify-content: center;
    height: min-content;
  }
`;

export const Team = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`;

export const TeamTitle = styled.div`
  display: flex;
  justify-content: center;
  margin: 5px;
  text-decoration: none;
  font-weight: 100;
  font-size: 0.8rem;
`;

export const TeamList = styled.ul`
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  list-style-type: none;
  text-decoration: none;
  margin: 5px;

  @media (max-width: 800px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Img = styled.img`
  width: 50px;
  height: 50px;
  margin: 0;
  border-radius: 50px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  transform: translatex(50px);
  transition: transform 500ms;

  @media (max-width: 800px) {
    justfiy-content: flex-start;
    transform: translatex(0);
    margin: 3px;
  }
`;

export const TeamListMember = styled.li`
  list-style-type: none;
  text-decoration: none;
  list-style: none;
  width: 15rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 20px;

  &:hover ${Img} {
    transform: translateX(-50px);
    transition: transform 500ms;
  }

  @media (max-width: 800px) {
    justfiy-content: flex-start;
    width: 100%;

    &:hover ${Img} {
      transform: translateX(0);
      transition: transform 500ms;
    }
  }
`;

export const Spa = styled.span`
  opacity: 0;
  height: 2.1rem;
  transform: translateX(-50px);
  transition: transform 500ms, opacity 500ms;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 50px;
  padding: 7px;
  display: flex;
  align-items: center;

  @media (max-width: 800px) {
    opacity: 1;
    transform: translateX(0px);
    display: flex;
  }
`;

export const Lnk = styled.a`
  text-decoration: none;
  display: flex;
  justify-content: center;
  margin: 5px;
  align-items: center;
  color: black;

  &:visited {
    color: black;
  }

  &:hover ${Spa} {
    opacity: 1;
    transform: translateX(0px);
    border: 1px solid rgba(0, 0, 0, 0.5);
    transition: transform 500ms, opacity 500ms, border 500ms;
  }

  @media (max-width: 800px) {
    justify-content: center;

    &:hover ${Spa} {
      color: black;
      transition: none;
    }
  }
`;

export const Spa1 = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px 20px;
  text-decoration: none;
  text-decoration: none;
  font-weight: 100;
  font-size: 0.8rem;

  @media (max-width: 800px) {
    width: 100%;
    padding: 0;
  }
`;

export const Team1 = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
`;