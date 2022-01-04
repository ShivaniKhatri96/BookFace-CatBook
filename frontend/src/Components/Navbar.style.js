import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

const animateOpacity = keyframes`
    0%{
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

export const NavbarContainer = styled.nav`
  width: 100%;
  height: ${(props) => (props.extendNavBar ? '50vh' : '100px')};
  background-color: #f9fbb2;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  @media (max-width: 768px) {
  }
`;

export const NavbarList = styled.ul`
  display: flex;
  align-items: center;


}

  @media (max-width: 768px) {
    margin-bottom: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }


`;

export const NavbarListItems = styled.li`
  font-size: 1.2rem;
  text-decoration: none;
  display: inline-block;
  margin: 15px;
  align-items: center;

  @media (max-width: 768px) {
    margin: 0.5rem;
    font-size: 1rem;
    display: flex;
    justify-content: start;
  }
`;

export const NavbarLink = styled(Link)`
  text-decoration: none;
  border: 2px solid rgba(0, 0, 0, 0);
  border-radius: 1rem;
  padding: 15px 15px 10px 15px;
  transition: border 0.3s ease-out;

  @media (max-width: 768px) {
    display: none;
  }

  &:visited {
    color: black;
  }

  &:hover {
    border: 2px solid rgba(0, 0, 0, 0.5);
  }
`;

export const NavbarLinkDiv = styled.div`
  text-decoration: none;
  border: 2px solid rgba(0, 0, 0, 0);
  border-radius: 1rem;
  padding: 15px 15px 20px 15px;
  transition: border 0.3s ease-out;
 

  @media (max-width: 768px) {
    display: none;
  }

  &:visited {
    color: black;
  }

  &:hover {
    border: 2px solid rgba(0, 0, 0, 0.5);
  }
`;

export const NavbarLinkExtended = styled(Link)`
  text-decoration: none;
  margin: 10px;

  :focus,
  :active,
  :visited {
    color: black;
  }

  :focus {
    text-decoration-color: rgba(0, 0, 0, 1);
  }
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
  flex-wrap: nowrap;
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
  animation: ${animateOpacity} 0.3s ease-in;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const Logo = styled.img`
  max-width: 200px;
  max-height: 200px;

  @media (max-width: 768px) {
    max-width: 150px;
    max-height: 150px;
  }
`;

export const OpenMenuButton = styled.button`
  background: none;
  border: none;
  color: black;
  cursor: pointer;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const Dropdown = styled.div`
  text-decoration: none;
  display: grid;
 

  @media (max-width: 768px) {
    display: none;
  }
`;

export const DropdownBtn = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    justify-content: space-between; 

    @media (max-width: 768px) {
    display: none;
  }
`
