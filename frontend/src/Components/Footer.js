import {
  FooterContainer,
  Lnk,
  Team,
  TeamList,
  TeamListMember,
  TeamTitle,
  Img,
  Spa,
  SpaShiv,
} from './Footer.style';
import Shiv from '../assets/shiv.jpg';
import Dan from '../assets/dan.png';
import Ali from '../assets/ali.jpg';
import { useState } from 'react';

function Footer() {
  return (
    <FooterContainer>
      <Team>
        <TeamTitle>   CatBook Dev Team </TeamTitle>
        <TeamList>
          <TeamListMember>
            <Lnk href="https://github.com/ShivaniKhatri96" target="_blank">
                
                <Img src={Shiv} alt="Shivani Github Page" />
                <Spa> Shivani Khatri </Spa>
            </Lnk>
          </TeamListMember>
          <TeamListMember>
            <Lnk href="https://github.com/Dan-DH" target="_blank">
              <Img src={Dan} alt="Shivani Github Page" />
              <Spa> Daniel Diaz </Spa>
            </Lnk>
          </TeamListMember>
          <TeamListMember>
            <Lnk href="https://github.com/AlisanCavus" target="_blank">
              <Img src={Ali} alt="Shivani Github Page" />
              <Spa> Alisan Cavus </Spa>
            </Lnk>
          </TeamListMember>
        </TeamList>
      </Team>
    </FooterContainer>
  );
}

export default Footer;
