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
import { PostContext } from "../../Providers/UserPosts/UserPosts.provider";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createPost } from "../../actions/posts";

const INITIAL_STATE = {
  postText: "",
  postPhoto: "",
  postVideo: "",
  postLiked: 0
};

function ProfileMakePost() {
  const navigate = useNavigate();
  const { createNewPost } = useContext(PostContext);
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

  const dispatch = useDispatch()



  const [newPost, setNewPost] = useState({
    userId: "",
    repliedBy: [],
    content: "",
    img_link: "",
    video_link: "",
    likes: 0,
    _id: "",
    date: ""
  })

  const handleInput = (evt) => {
    if (!evt) return;

    const { value, name } = evt.target;
    setNewPost({
      ...newPost,
      [name]: value,
    });
  };

  
  const handleSubmit = (evt) => {
    evt.preventDefault();

    dispatch(createPost(newPost))
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
                value={newPost.content}
                onChange={(e) => setNewPost({...newPost, content: e.target.value})}
              />
              {addVideo && (
                <>
                  <AddVideoPhotoContent>
                    <GetUrl
                      type="url"
                      name="postVideo"
                      value={newPost.video_link}
                      placeholder="Copy and paste a video link to add a video to your post."
                      onChange={(e) => setNewPost({...newPost, img_video: e.target.value})}
                    />
                    <CloseButtonVideo onClick={() => setAddVideo((e) => !e)} />
                  </AddVideoPhotoContent>
                  <AddVideoPhotoContent>
                    {newPost.video_link === "" ? (
                      <EmptyVideoPlayer> Add a Video </EmptyVideoPlayer>
                    ) : (
                      <ReactPlayer
                        url={newPost.video_link}
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
                      value={newPost.img_link}
                      placeholder="Copy and paste a photo link to add a photo to your post."
                      onChange={(e) => setNewPost({...newPost, img_link: e.target.value})}
                    />
                    <CloseButtonVideo onClick={() => setAddPhoto((e) => !e)} />
                  </AddVideoPhotoContent>
                  <AddVideoPhotoContent>
                    {newPost.img_link === "" ? (
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
