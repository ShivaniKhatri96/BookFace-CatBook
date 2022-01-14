import { Main } from "./ProfileCard.style";
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
} from "./ProfileMakePost.style";
import { useState, useContext } from "react";
import {
  MdOutlineInsertPhoto,
  MdSend,
  MdVideoCameraBack,
} from "react-icons/md";
import ReactPlayer from "react-player";
import { v4 as uuidv4 } from "uuid";



const INITIAL_STATE = {
  postText: "",
  postPhoto: "",
  postVideo: "",
};

function ProfileMakePost() {
 
 
  const [userProfile, setUserProfile] = useState({
    userId: 1,
    userName: "Alisan",
    userSurname: "Cavus",
    userAboutMe: "Hi I am Levi. The cutest cat in da world!!",
    userPosts: [],
  });
  const [postOpen, setPostOpen] = useState(false);
  const [addVideo, setAddVideo] = useState(false);
  const [addPhoto, setAddPhoto] = useState(false);
  const [message, setMessage] = useState(
    `${userProfile.userName} , what's in your mind today?`,
  );

  const [newPost, setNewPost] = useState({
    ...INITIAL_STATE,
  });

  const handleInput = (evt) => {
    if (!evt) return;

    const { value, name } = evt.target;
    setNewPost({
      ...newPost,
      [name]: value,
    });
  };

  console.log(newPost);
  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (!evt) {
      setMessage(`We know you want to share something ${userProfile.userName}`);
    } else {
      const config = {
        ...newPost,
        postId: uuidv4(),
      };
     
      setPostOpen(false);
      setNewPost(
        newPost.postText = "",
        newPost.postVideo = "",
      newPost.postPhoto = ""
      );
      console.log(newPost);
      // navigate('/')
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
                name="postText"
                value={newPost.postText}
                onChange={handleInput}
              />
              {addVideo && (
                <>
                  <AddVideoPhotoContent>
                    <GetUrl
                      type="url"
                      name="postVideo"
                      value={newPost.postVideo}
                      placeholder="Copy and paste a video link to add a video to your post."
                      onChange={handleInput}
                    />
                    <CloseButtonVideo onClick={() => setAddVideo((e) => !e)} />
                  </AddVideoPhotoContent>
                  <AddVideoPhotoContent>
                    {newPost.postVideo === "" ? (
                      <EmptyVideoPlayer> Add a Video </EmptyVideoPlayer>
                    ) : (
                      <ReactPlayer
                        url={newPost.postVideo}
                        controls={true}
                        style={{ width: "80%", margin: "auto" }}
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
                      name="postPhoto"
                      value={newPost.postPhoto}
                      placeholder="Copy and paste a photo link to add a photo to your post."
                      onChange={handleInput}
                    />
                    <CloseButtonVideo onClick={() => setAddPhoto((e) => !e)} />
                  </AddVideoPhotoContent>
                  <AddVideoPhotoContent>
                    {newPost.postPhoto === "" ? (
                      <EmptyVideoPlayer> Add a Photo </EmptyVideoPlayer>
                    ) : (
                      <AddedPhoto src={newPost.postPhoto} alt="your post" />
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
