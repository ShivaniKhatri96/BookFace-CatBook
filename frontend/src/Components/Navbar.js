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
} from './Navbar.style';

import LogoImg from '../assets/logo.svg';
import { HiMenu } from 'react-icons/hi';
import { GrClose } from 'react-icons/gr';
function Navbar() {
  const [extendNav, setExtendNav] = useState(false);

  return (
    <NavbarContainer extendNavBar={extendNav}>
      <NavbarInner>
        <NavbarLeft>
          <Logo src={LogoImg} />
        </NavbarLeft>
        <NavbarRight>
          <NavbarList>
            <NavbarListItems>
              {' '}
              <NavbarLink to="/"> Home </NavbarLink>
            </NavbarListItems>
            <NavbarListItems>
              {' '}
              <NavbarLink to="/Login"> Login </NavbarLink>
            </NavbarListItems>
            <NavbarListItems>
              {' '}
              <NavbarLink to="/Profile"> Profile </NavbarLink>
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
              <NavbarLinkExtended to="/"> Home </NavbarLinkExtended>
            </NavbarListItems>
            <NavbarListItems>
              <NavbarLinkExtended to="/Login"> Login </NavbarLinkExtended>
            </NavbarListItems>
            <NavbarListItems>
              <NavbarLinkExtended to="/Profile"> Profile </NavbarLinkExtended>
            </NavbarListItems>
          </NavbarList>
          
        </NavbarExtended>
      )}
    </NavbarContainer>
  );
}

export default Navbar;
