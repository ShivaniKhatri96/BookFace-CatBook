import { useState } from "react";
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
  SearchDiv,
  NavbarLinklog,
  NavbarLinkDrop,
} from "./Navbar.style";

import LogoImg from '../assets/catbook.svg';
import { HiMenu } from 'react-icons/hi';
import { GrClose } from 'react-icons/gr';
import { FaHome } from 'react-icons/fa';
import { RiLogoutCircleRLine } from 'react-icons/ri';
import { MdNotificationsNone } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';
import { AiFillSetting } from 'react-icons/ai'
import { HiOutlineMenu, HiOutlineMenuAlt4 } from 'react-icons/hi';
import SearchBar from './SearchBar';
import { useNavigate} from 'react-router';

function Navbar( {auths} ) {
  let navTo = useNavigate()
 
  
  const [extendNav, setExtendNav] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const logOut = async () => {

    const resp =  await fetch('/users/logout')
    auths("Login needed")
    
    
    
    
  }


  return (
    <NavbarContainer extendNavBar={extendNav}>
      <NavbarInner>
        <NavbarLeft>
          <Logo src={LogoImg} />
        </NavbarLeft>
        <NavbarRight>
          <SearchDiv>
            <SearchBar />
          </SearchDiv>
          <NavbarList>
            <NavbarListItems>
              <NavbarLink to="/">
                <FaHome />
              </NavbarLink>
            </NavbarListItems>
            <NavbarListItems>
              <NavbarLink to="/Notifications">
                <MdNotificationsNone />
              </NavbarLink>
            </NavbarListItems>
            <NavbarListItems>
              <NavbarLink to="/Profile">
                <CgProfile />
              </NavbarLink>
            </NavbarListItems>
            <NavbarListItems>
              <NavbarLinkDiv isActiveTrue={isActive}>
                <Dropdown>
                  <DropdownBtn onClick={() => setIsActive((e) => !e)}>
                    {isActive ? <HiOutlineMenuAlt4 /> : <HiOutlineMenu />}
                  </DropdownBtn>
                  {isActive && (
                    <DropdownMenu>
                      <NavbarLinkDrop to="/Settings"><AiFillSetting/> Settings </NavbarLinkDrop>
                      <NavbarLinklog onClick={logOut}>
                        <RiLogoutCircleRLine /> Logout
                      </NavbarLinklog>
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
              <NavbarLinkExtended to="/Profile">Profile</NavbarLinkExtended>
            </NavbarListItems>
            <NavbarListItems>
              <NavbarLinkExtended to="/Notifications">
                Notifications
              </NavbarLinkExtended>
            </NavbarListItems>
            <NavbarListItems>
              <NavbarLinkExtended to="/Settings">Settings</NavbarLinkExtended>
            </NavbarListItems>
            <NavbarListItems>
              {/* onClick={clicked} */}
              <NavbarLinkExtended to="/Login" onClick={logOut}>Logout</NavbarLinkExtended>
            </NavbarListItems>
          </NavbarList>
        </NavbarExtended>
      )}
    </NavbarContainer>
  );
}

export default Navbar;
