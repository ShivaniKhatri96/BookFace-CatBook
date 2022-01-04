import { useState } from 'react';
import {
  NavbarContainer,
  NavbarLeft,
  NavbarLink,
  NavbarList,
  NavbarListItems,
  NavbarRight,
  Logo,
  OpenMenuButton,
  NavbarInner,
  NavbarExtended,
  NavbarLinkExtended,
  Dropdown,
  NavbarLinkDiv,
  DropdownBtn,
} from './Navbar.style';

import LogoImg from '../assets/logo.svg';
import { HiMenu } from 'react-icons/hi';
import { GrClose } from 'react-icons/gr';
import { FaHome } from 'react-icons/fa';
import { IoMdLogIn } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { IoMdArrowDropdownCircle} from 'react-icons/io';
import './dropdown.css'


function Navbar() {
  const [extendNav, setExtendNav] = useState(false);
  const [isActive, setIsActive] = useState(false);

  return (
    <NavbarContainer extendNavBar={extendNav}>
      <NavbarInner>
        <NavbarLeft>
          <Logo src={LogoImg} />
        </NavbarLeft>
        <NavbarRight>
          <NavbarList>
            <NavbarListItems>
              <NavbarLink to="/">
                <FaHome />
              </NavbarLink>
            </NavbarListItems>
            <NavbarListItems>
              <NavbarLink to="/Login">
                <IoMdLogIn />
              </NavbarLink>
            </NavbarListItems>
            <NavbarListItems>
                <NavbarLinkDiv>
                    <Dropdown>
                        <DropdownBtn onClick={(e) => setIsActive(!isActive)}><IoMdArrowDropdownCircle/></DropdownBtn>
                    </Dropdown>
                </NavbarLinkDiv>
            </NavbarListItems>
          </NavbarList>
          <OpenMenuButton
            onClick={() => {
              setExtendNav((current) => !current);
            }}
          >
            {extendNav ? <GrClose /> : <HiMenu />}
          </OpenMenuButton>
        </NavbarRight>
      </NavbarInner>
      {extendNav && (
        <NavbarExtended>
          <NavbarList>
            <NavbarListItems>
              <NavbarLinkExtended to="/">Home</NavbarLinkExtended>
            </NavbarListItems>
            <NavbarListItems>
              <NavbarLinkExtended to="/Settings">Settings</NavbarLinkExtended>
            </NavbarListItems>
            <NavbarListItems>
              <NavbarLinkExtended to="/Login">Login</NavbarLinkExtended>
            </NavbarListItems>
            <NavbarListItems>
              <NavbarLinkExtended to="/Notifications">Notifications</NavbarLinkExtended>
            </NavbarListItems>
            <NavbarListItems>
              <NavbarLinkExtended to="/Profile">Profile</NavbarLinkExtended>
            </NavbarListItems>
          </NavbarList>
        </NavbarExtended>
      )}
    </NavbarContainer>
  );
}

export default Navbar;
