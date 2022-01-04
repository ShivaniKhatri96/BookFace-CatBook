import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavbarContainer = styled.nav`
  width: 100%;
  height: ${(props) => (props.extendNavBar ? '50vh' : '100px')};
  background-color: #f9fbb2;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  @media (max-width: 700px) {
 
    
  }
`;

export const NavbarList = styled.ul`
  list-style: none;

  @media (max-width: 700px) {
      margin-bottom: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const NavbarListItems = styled.li`
  font-size: 1.5rem;
  text-decoration: none;
  display: inline;
  margin: 0 1rem 0 1rem;

  @media (max-width: 700px) {
    
    margin: 1rem; 
    font-size: 1rem;
    display: flex;
    justify-content: start;
    
  }
`;
export const NavbarLink = styled(Link)`
  text-decoration: none;


  @media (max-width: 700px) {
    display: none;
  }
`;

export const NavbarLinkExtended = styled(Link)`
  text-decoration: none;
  margin: 10px;
 
`;

export const NavbarLeft = styled.div`
  flex: 30%;
  display: flex;
  align-items: center;
  padding-left: 5%;
`;

export const NavbarRight = styled.div`
  flex: 70%;
  display: flex;
  justify-content: flex-end;
  padding-right: 50px;
  align-items: center;
`;

export const NavbarInner = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
`;

export const NavbarExtended = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 700px) {
    display: none;
  }
`;

export const Logo = styled.img`
  max-width: 150px;
  height: auto;
`;

export const OpenMenuButton = styled.button`
  background: none;
  border: none;
  color: black;
  cursor: pointer;

  @media (min-width: 700px) {
    display: none;
  }
`;
