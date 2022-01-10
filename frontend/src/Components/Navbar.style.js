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
  height: ${(props) => (props.extendNavBar ? '80vh' : '100px')};
  background-color: #f9fbb2;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
  width: 100%;

  @media (min-width: 1092px) {
    height: ${(props) => (props.extendNavBar ? '60vh' : '100px')};
    width: 100%;
  }

  @media (min-width: 768px) and (max-width: 1091px) {
    height: ${(props) => (props.extendNavBar ? '100vh' : '100px')};
  }
`;

export const NavbarList = styled.ul`
  display: flex;
  align-items: center;


}

  @media (max-width: 1092px) {
    margin-bottom: 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }


`;

export const NavbarListItems = styled.li`
  font-size: 1.2rem;
  text-decoration: none;
  display: inline-block;
  margin: 15px;
  align-items: center;

  @media (max-width: 800px) {
    margin: 0.5rem;
    font-size: 1rem;
    display: flex;
    justify-content: space-evenly;
  }
`;

export const NavbarLink = styled(Link)`
  text-decoration: none;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 50px;
  padding: 15px 15px 9px 15px;
  transition: border 0.3s ease-out;
  margin: 5px;
  

  @media (max-width: 1092px) {
    display: none;
  }

  &:visited {
    color: black;
  }

  &:hover {
    border: 1px solid rgba(0, 0, 0, 0.5);
  }
`;



export const NavbarLinkExtended = styled(Link)`
  text-decoration: none;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: border 0.3s ease-out;

  :focus,
  :active,
  :visited {
    color: black;
  }

  :focus {
    text-decoration-color: rgba(0, 0, 0, 0.5);
  }
`;

export const NavbarLeft = styled.div`
  flex: 25%;
  display: flex;
  align-items: center;
  margin-left: 50px;
  
`;

export const NavbarRight = styled.div`
  flex: 75%;
  display: flex;
  justify-content: flex-end;
  margin-right: 50px;
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
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  animation: ${animateOpacity} 0.3s ease-in;

  @media (min-width: 1092px) {
    display: none;
  }

  
`;

export const Logo = styled.img`
  width: 100px;
  height: 100px;
  margin-top: -10px;
 

  @media (max-width: 1092px) {
    max-width: 150px;
    max-height: 150px;
    
  }
`;

export const OpenMenuButton = styled.button`
  background: none;
  border: none;
  color: black;
  cursor: pointer;

  @media (min-width:1092px )  {
        display: none;
    }
 
  }
  
`;

export const NavbarLinkDiv = styled.div`
  text-decoration: none;
  border: ${(props) => (props.isActiveTrue ? "1px solid rgba(0, 0, 0, 0.5)" : "1px solid rgba(0, 0, 0, 0.1);")};
  border-radius: 50px;
  padding: 16px 16px 16px 16px;
  margin: 2px 0 9px 0;
  transition: border 0.3s ease-out;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: border 0.3s ease-out;
 

  @media (max-width: 1092px) {
    display: none;
  }

  &:visited {
    color: black;
  }

  &:hover {
    border: 1px solid rgba(0, 0, 0, 0.5);
  }
`;


export const NavbarLinklog = styled.div`
  text-decoration: none;
  border: ${(props) => (props.isActiveTrue ? "1px solid rgba(0, 0, 0, 0.5)" : "1px solid rgba(0, 0, 0, 0.1);")};
  border-radius: 50px;
  padding: 16px ;
  margin: 2px 0 9px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: border 0.3s ease-out;
 

  @media (max-width: 1092px) {
    display: none;
  }

  &:visited {
    color: black;
  }

  &:hover {
    border: 1px solid rgba(0, 0, 0, 0.5);
  }
`;

export const Dropdown = styled.div`
  text-decoration: none;
  display: grid;
  position: relative;
 

  @media (max-width: 1092px) {
    display: none;
  }
`;
 
export const DropdownMenu = styled.div`
    position: absolute;
    right: -4rem;
    top: calc(100% + .1rem);
    background-color:#f9fbb2;
    padding: .70rem;
    border-radius: 1rem;
    box-shadow: 0 2px 5px 0 rgba(0, 0 ,0 , 0.2);
    opacity: 1;
    transform: translateY(-10px);
    transition:  opacity 150ms ease-in-out;
    height: 10rem;
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    width: 10rem;
    z-index: 100;
    
    

`

export const DropdownBtn = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    justify-content: space-between; 

    @media (max-width: 1092px) {
    display: none;
  }
`
export const SearchDiv = styled.div`
    width: 35rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    
    @media (max-width: 1092px) {
    display: none;
  }

`

export const NavbarLinkDrop = styled(Link)`
  text-decoration: none;
  border: ${(props) => (props.isActiveTrue ? "1px solid rgba(0, 0, 0, 0.5)" : "1px solid rgba(0, 0, 0, 0.1);")};
  border-radius: 50px;
  padding: 20px 16px 16px 16px;
  margin: 2px 0 9px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: border 0.3s ease-out;
  

  @media (max-width: 1092px) {
    display: none;
  }

  &:visited {
    color: black;
  }

  &:hover {
    border: 1px solid rgba(0, 0, 0, 0.5);
  }
`;