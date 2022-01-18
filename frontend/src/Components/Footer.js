import React from 'react';
import {
  FooterContainer,
  Lnk,
  Team,
  TeamList,
  TeamListMember,
  Img,
  Spa,
  Spa1,
  Team1,
} from './Footer.style';
import Shiv from '../assets/shiv.jpg';
import Dan from '../assets/dan.png';
import Ali from '../assets/ali.png';


function Footer() {
  return (
    <FooterContainer>
      <Team>
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
      <Team1>
          <Spa1>Copyright &copy; 2022</Spa1>
      </Team1>
    </FooterContainer>
  );
}

export default Footer;
