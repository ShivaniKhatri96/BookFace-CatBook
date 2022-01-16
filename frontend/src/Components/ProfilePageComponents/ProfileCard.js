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

 
  return (
    <>
    <Main>
      <CoverPhoto />
      <ProfileMain>
        <ProfilePhoto> </ProfilePhoto>
        <ProfileName>
          <Spa> name surname </Spa>
          <SpaTitle> About Me </SpaTitle>
          <SpaText> about me text </SpaText>
        </ProfileName>
      </ProfileMain>
    </Main>
    </>
    
  );
}

export default ProfileCard;
