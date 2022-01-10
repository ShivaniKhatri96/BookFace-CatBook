import { Main } from './ProfileCard.style';
import {
  InputPost,
  OpenedPostHeader,
  SpaTitle2,
  PostMain,
  ProfilePhotoPost,
  CloseButton,
  OpenedPostContent,
  OpenedPostProfile,
  OpenedfirstRow,
  OpenedProfileName,
  OpenedInputPost,
  OpenedAddPhoto,
  AddPhotoVideo,
  AddPhotoIcon,
  AddVideoPhotoContent,
  CloseButtonVideo,
  GetUrl,
  EmptyVideoPlayer,
  AddedPhoto,
  SendButton,
} from './ProfileMakePost.style';
import { useState } from 'react';
import {
  MdOutlineInsertPhoto,
  MdSend,
  MdVideoCameraBack,
} from 'react-icons/md';
import ReactPlayer from 'react-player';
import { v4 as uuidv4 } from 'uuid';

function ProfileMakePost() {
 

  const [postOpen, setPostOpen] = useState(false);
  const [addVideo, setAddVideo] = useState(false);
  const [addPhoto, setAddPhoto] = useState(false);

  const [linksPhoto, setLinksPhoto] = useState('');
  const [linksVideo, setLinksVideo] = useState('');
  const [postText, setPostText] = useState('');

  const [newPost, setNewPost] = useState([
    {
      usersPostId: 3333,
      usersPostText: 'hayvan',
      usersPostPhoto:
        'https://images.pexels.com/photos/10754454/pexels-photo-10754454.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
      usersPostVideo:
        'https://www.youtube.com/watch?v=QH2-TGUlwu4&ab_channel=NyanCat',
    },
  ]);

  const [userProfile, setUserProfile] = useState({
    userId: 1,
    userName: 'Alisan',
    userSurname: 'Cavus',
    userAboutMe: 'Hi I am Levi. The cutest cat in da world!!',
    userPosts: [...newPost],
  });

  const [message, setMessage] = useState(
    `${userProfile.userName} , what's in your mind today?`
  );

  const handleSubmitThePost = async (e) => {
    if (postText !== '') {
      e.preventDefault();

      let newUsersPost = {
        usersPostId: uuidv4(),
        usersPostText: postText,
        usersPostPhoto: linksPhoto,
        usersPostVideo: linksVideo,
      };

      const addToArray = async () => {
        setNewPost([newUsersPost, ...newPost]);
       
        
      };

      await addToArray();

      setPostText('');
      setAddVideo('');
      setAddPhoto('');
      setAddVideo(false);
      setAddPhoto(false);
      setPostOpen(false);
    } else {
      e.preventDefault()
      setMessage(`C'mon ${userProfile.userName}, we know you want to share something!`)
    }
  };

  // console.log(newPost)
  console.log(userProfile)
  

  return (
    <form onSubmit={handleSubmitThePost}>
      <Main>
        {postOpen ? (
          <Main>
            <PostMain>
              <OpenedPostHeader>
                <SpaTitle2> Create a Post</SpaTitle2>
              </OpenedPostHeader>
              <CloseButton onClick={() => setPostOpen((e) => !e)} />
            </PostMain>
            <OpenedPostContent>
              <OpenedfirstRow>
                <OpenedPostProfile>
                  <ProfilePhotoPost />
                </OpenedPostProfile>
                <OpenedProfileName>
                  Hi, {userProfile.userName}
                </OpenedProfileName>
              </OpenedfirstRow>
              <OpenedInputPost
                className="post-input"
                type="text"
                placeholder={message}
                value={postText}
                onChange={(e) => {
                  setPostText(e.target.value);
                }}
              />
              {addVideo && (
                <>
                  <AddVideoPhotoContent>
                    <GetUrl
                      type="url"
                      value={linksVideo}
                      placeholder="Copy and paste a video link to add a video to your post."
                      onChange={(e) => {
                        setLinksVideo(e.target.value);
                      }}
                    />
                    <CloseButtonVideo onClick={() => setAddVideo((e) => !e)} />
                  </AddVideoPhotoContent>
                  <AddVideoPhotoContent>
                    {linksVideo === '' ? (
                      <EmptyVideoPlayer> Add a Video </EmptyVideoPlayer>
                    ) : (
                      <ReactPlayer
                        url={linksVideo}
                        controls={true}
                        style={{ width: '80%', margin: 'auto' }}
                        muted={false}
                        playing={false}
                      />
                    )}
                  </AddVideoPhotoContent>
                </>
              )}
              {addPhoto && (
                <>
                  <AddVideoPhotoContent>
                    <GetUrl
                      type="url"
                      value={linksPhoto}
                      placeholder="Copy and paste a photo link to add a photo to your post."
                      onChange={(e) => {
                        setLinksPhoto(e.target.value);
                      }}
                    />
                    <CloseButtonVideo onClick={() => setAddPhoto((e) => !e)} />
                  </AddVideoPhotoContent>
                  <AddVideoPhotoContent>
                    {linksPhoto === '' ? (
                      <EmptyVideoPlayer> Add a Photo </EmptyVideoPlayer>
                    ) : (
                      <AddedPhoto src={linksPhoto} alt="your post" />
                    )}
                  </AddVideoPhotoContent>
                </>
              )}
              <OpenedfirstRow>
                <OpenedAddPhoto>
                  <AddPhotoVideo> Add Photo or Video </AddPhotoVideo>
                  <AddPhotoIcon onClick={() => setAddPhoto((e) => !e)}>
                    <MdOutlineInsertPhoto />
                  </AddPhotoIcon>
                  <AddPhotoIcon onClick={() => setAddVideo((e) => !e)}>
                    <MdVideoCameraBack />
                  </AddPhotoIcon>
                </OpenedAddPhoto>
              </OpenedfirstRow>
              <SendButton type="submit" value="submit">
                <MdSend />
              </SendButton>
            </OpenedPostContent>
          </Main>
        ) : (
          <PostMain>
            <ProfilePhotoPost />
            <InputPost
              className="post-input"
              type="text"
              placeholder="What's on your mind ?"
              onClick={() => setPostOpen((e) => !e)}
            />
          </PostMain>
        )}
      </Main>
    </form>
  );
}

export default ProfileMakePost;
