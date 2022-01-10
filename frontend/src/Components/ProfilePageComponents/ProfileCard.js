import {
  CoverPhoto,
  Main,
  ProfilePhoto,
  ProfileName,
  ProfileMain,
  Spa,
  SpaTitle,
  SpaText,
} from './ProfileCard.style';
import { useState } from 'react'


function ProfileCard() {

  const [ userProfile , setUserProfile ] = useState({
    userId: 1,
    userName: 'Alisan',
    userSurname: 'Cavus',
    userAboutMe: 'Hi I am Levi. The cutest cat in da world!!',
    userPosts: [{}],
    
})
  return (
    <>
    <Main>
      <CoverPhoto />
      <ProfileMain>
        <ProfilePhoto> </ProfilePhoto>
        <ProfileName>
          <Spa> {`${userProfile.userName} ${userProfile.userSurname}` } </Spa>
          <SpaTitle> About Me </SpaTitle>
          <SpaText> {userProfile.userAboutMe} </SpaText>
        </ProfileName>
      </ProfileMain>
    </Main>
    </>
    
  );
}

export default ProfileCard;
