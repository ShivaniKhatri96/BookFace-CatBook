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


function ProfileCard() {
  return (
    <>
    <Main>
      <CoverPhoto />
      <ProfileMain>
        <ProfilePhoto> </ProfilePhoto>
        <ProfileName>
          <Spa> Alisan Cavus </Spa>
          <SpaTitle> About Me </SpaTitle>
          <SpaText> Hi I am Levi. I am the cutest cat in da world!! </SpaText>
        </ProfileName>
      </ProfileMain>
    </Main>
    </>
    
  );
}

export default ProfileCard;
