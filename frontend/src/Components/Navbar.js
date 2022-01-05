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
  DropdownMenu,
} from './Navbar.style';

import LogoImg from '../assets/logo.svg';
import { HiMenu } from 'react-icons/hi';
import { GrClose } from 'react-icons/gr';
import { FaHome } from 'react-icons/fa';
import { IoMdLogIn } from 'react-icons/io';
import { IoMdArrowDropdownCircle } from 'react-icons/io';
import SearchBar from './SearchBar';


function Navbar() {
  const [extendNav, setExtendNav] = useState(false);
  const [isActive, setIsActive] = useState(false);

  return (
    <NavbarContainer extendNavBar={extendNav}>
      <NavbarInner>
        <NavbarLeft>
          <Logo src={LogoImg} />
          <SearchBar />
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
              <NavbarLinkDiv isActiveTrue={isActive}>
                <Dropdown>
                  <DropdownBtn onClick={() => setIsActive((e) => !e)}>
                    <IoMdArrowDropdownCircle />
                  </DropdownBtn>
                  {isActive && (
                    <DropdownMenu>
                      <NavbarLink to="./Profile" className="dropdown-item">
                        Profile
                      </NavbarLink>
                      <NavbarLink to="./Settings" className="dropdown-item">
                        Settings
                      </NavbarLink>
                      <NavbarLink to="./Notifications" className="dropdown-item">
                        Notifications
                      </NavbarLink>
                    </DropdownMenu>
                  )}
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
              <SearchBar />
            </NavbarListItems>
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
