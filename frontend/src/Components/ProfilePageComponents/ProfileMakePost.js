import { Main } from './ProfileCard.style';
import React from 'react';
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
  OpenedSecondRow,
} from './ProfileMakePost.style';
import { useState, useRef, useEffect } from 'react';
import {
  MdOutlineInsertPhoto,
  MdSend,
  MdVideoCameraBack,
} from 'react-icons/md';
import ReactPlayer from 'react-player';


// const userID = "61de9db14a69b84c1ed6c5fe"
const userID = '61dec5dc91821f6ecd34227e';
//username: mouse , password: mouse for this id

function ProfileMakePost() {
  const [userProfile, setUserProfile] = useState({
    userId: 1,
    userName: 'Alisan',
    userSurname: 'Cavus',
    userAboutMe: 'Hi I am Levi. The cutest cat in da world!!',
    userPosts: [],
  });

  const [postOpen, setPostOpen] = useState(false);
  const [addVideo, setAddVideo] = useState(false);
  const [addPhoto, setAddPhoto] = useState(false);
  const [message, setMessage] = useState(
    `${userProfile.userName} , what's in your mind today?`
  );

  const [newPost, setNewPost] = useState({
    // userID: `${userID}`,
    userId: `${userID}`,
    content: '',
    img_link: '',
    video_link: '',
    _id: '',
    date: '',
    likes: 0,
  });

  //  name = e.target.name;
  //   value = e.target.value;
  //   setNewUser({ ...newUser, [name]: value });

  let name, value;
  const handleInput = (evt) => {
    if (!evt) return;

    name = evt.target.name;
    value = evt.target.value;
    setNewPost({
      ...newPost,
      [name]: value,
    });
    
  };



  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (newPost.content === '') {
      setMessage(`We know you want to share something ${userProfile.userName}`);
    } else {
      const config = {
        ...newPost,
      };

      const addComment = async () => {
        console.log(JSON.stringify(newPost, null, 2));

        const { userId, content, img_link, video_link } = newPost;
        const res = await fetch(`comments/${userID}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            userId,
            content,
            img_link,
            video_link,
          }),
        });
        if (res.ok) {
          console.log('posted');
        } else {
          console.log('not posted');
        }
      };
      addComment();

      setPostOpen(false);
      setNewPost(
        (newPost.content = ''),
        (newPost.img_link = ''),
        (newPost.video_link = '')
      );
    }
  };

  return (
    <form onSubmit={handleSubmit}>
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
                name="content"
                value={newPost.content}
                onChange={handleInput}
              />
              {addVideo && (
                <>
                  <AddVideoPhotoContent>
                    <GetUrl
                      type="url"
                      name="video_link"
                      value={newPost.video_link}
                      placeholder="Copy and paste a video link to add a video to your post."
                      onChange={handleInput}
                    />
                    <CloseButtonVideo onClick={() => setAddVideo((e) => !e)} />
                  </AddVideoPhotoContent>
                  <AddVideoPhotoContent>
                    {newPost.video_link === '' ? (
                      <EmptyVideoPlayer> Add a Video </EmptyVideoPlayer>
                    ) : (
                      <ReactPlayer
                        url={newPost.video_link}
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
                      name="img_link"
                      value={newPost.img_link}
                      placeholder="Copy and paste a photo link to add a photo to your post."
                      onChange={handleInput}
                    />
                    <CloseButtonVideo onClick={() => setAddPhoto((e) => !e)} />
                  </AddVideoPhotoContent>
                  <AddVideoPhotoContent>
                    {newPost.img_link === '' ? (
                      <EmptyVideoPlayer> Add a Photo </EmptyVideoPlayer>
                    ) : (
                      <AddedPhoto src={newPost.img_link} alt="your post" />
                    )}
                  </AddVideoPhotoContent>
                </>
              )}
              <OpenedSecondRow>
                <AddPhotoVideo>Add Photo or Video</AddPhotoVideo>
                <OpenedAddPhoto>
                  <AddPhotoIcon onClick={() => setAddPhoto((e) => !e)}>
                    <MdOutlineInsertPhoto />
                  </AddPhotoIcon>
                  <AddPhotoIcon onClick={() => setAddVideo((e) => !e)}>
                    <MdVideoCameraBack />
                  </AddPhotoIcon>
                </OpenedAddPhoto>
              </OpenedSecondRow>
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
              placeholder={`What's in your mind, ${userProfile.userName} ?`}
              onClick={() => setPostOpen((e) => !e)}
            />
          </PostMain>
        )}
      </Main>
    </form>
  );
}

export default ProfileMakePost;
