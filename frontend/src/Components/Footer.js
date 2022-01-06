import {
  FooterContainer,
  Lnk,
  Team,
  TeamList,
  TeamListMember,
  TeamTitle,
  Img,
  Spa,
  Team1,
  Spa1,
} from './Footer.style';
import Shiv from '../assets/shiv.jpg';
import Dan from '../assets/dan.png';
import Ali from '../assets/ali.png';


function Footer() {
  return (
    <FooterContainer>
      <Team>
        <TeamTitle>CatBook Dev Team</TeamTitle>
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
          <Lnk>About</Lnk>
          <Spa1>Copright &copy; 2022</Spa1>
          <Lnk>Privacy Policy</Lnk>
      </Team1>
    </FooterContainer>
  );
}

export default Footer;
