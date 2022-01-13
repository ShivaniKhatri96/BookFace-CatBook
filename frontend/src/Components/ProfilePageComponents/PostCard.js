import { useState, useContext, useEffect } from 'react';
import {
  UserPostCard,
  CardMainHeader,
  CardMainHeaderPhoto,
  CardTitleName,
  CardTitleInfos,
  ThreeDots,
  ThreeDotsMenu,
  CardTitleChange,
  ThreeDotsVert,
  CardMainContentWrapper,
  CardMainContentText,
  CardMainContextPhoto,
  CardMainContentVideo,
  CardCommentLikeWrapper,
  LikeButton,
  LikebuttonWrapper,
  LikeText,
} from './PostCard.style';
import { RiEditFill, RiDeleteBin5Line } from 'react-icons/ri';
import ReactPlayer from 'react-player';
import { PostContext } from '../../Providers/UserPosts/UserPosts.provider';


const INITIAL_STATE = {
  postText: "",
  postPhoto: "",
  postVideo: "",
  postLiked: 0
};

function PostCard() {
  const { posts , removePost, incrementLikes } = useContext(PostContext);
  const [openedEditMenu, setOpenedEditMenu] = useState(false);
  const [likedTimes, setLikedTimes] = useState({
    ...INITIAL_STATE
  });

  // const handleDelete = (e) => {
  //   removePost(e)
  // }

  
    


  // const handleMenu = (e) => {
  //   setOpenedEditMenu(!e)
  // }

  
  // const handleLikes = () => {
  //   console.log(likedTimes)
  //   // setLikedTimes(likedTimes.postLiked +1)
  //   // const config = {
  //   //   ...likedTimes,
  //   //   postLiked: likedTimes.postLiked
    
  //   // }
  //   // incrementLikes(config)
  // }

  
  return (
    <>
      
        <UserPostCard >
          <CardMainHeader>
            <CardTitleInfos>
              <CardMainHeaderPhoto />
              <CardTitleName> Alisan </CardTitleName>
            </CardTitleInfos>
            <CardTitleChange>
              {openedEditMenu ? (
                <ThreeDotsMenu>
                  <RiEditFill />
                  <RiDeleteBin5Line />
                  <ThreeDotsVert
                    
                  />
                </ThreeDotsMenu>
              ) : (
                <ThreeDots />
              )}
            </CardTitleChange>
          </CardMainHeader>
          <CardMainContentWrapper>
            <CardMainContentText></CardMainContentText>
            {/* {postPhoto !== '' ? (
              <CardMainContextPhoto src={id.postPhoto} />
            ) : (
              <> </>
            )} */}
            <CardMainContextPhoto />
            {/* {id.postVideo !== '' ? (
              <CardMainContentVideo>
                <ReactPlayer url={id.postVideo} width="100%" height="25rem" />
              </CardMainContentVideo>
            ) : (
              <div></div>
            )} */}
            <CardMainContentVideo>
                <ReactPlayer  width="100%" height="25rem" />
              </CardMainContentVideo>
          </CardMainContentWrapper>
          <CardCommentLikeWrapper>
            <LikebuttonWrapper>
              <LikeButton />
              <LikeText> 0 Likes </LikeText>
            </LikebuttonWrapper>
          </CardCommentLikeWrapper>
        </UserPostCard>
      
    </>
  );
}

export default PostCard;
