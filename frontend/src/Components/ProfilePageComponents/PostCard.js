import { useState, useContext } from 'react';
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

function PostCard() {
  const { posts ,removePost } = useContext(PostContext);
  const [openedEditMenu, setOpenedEditMenu] = useState(false);
  const [likedtimes, setLikedTimes] = useState(0);
  const handleDelete = () => {
    removePost()
  }

  const handleMenu = (e) => {
    setOpenedEditMenu(!e)
  }

  
  const handleLikes = () => {
    console.log(posts)
  }

  
  return (
    <>
      {posts.map((id, index) => (
        <UserPostCard key={id.postId}>
          <CardMainHeader>
            <CardTitleInfos>
              <CardMainHeaderPhoto />
              <CardTitleName> Alisan </CardTitleName>
            </CardTitleInfos>
            <CardTitleChange>
              {openedEditMenu ? (
                <ThreeDotsMenu>
                  <RiEditFill />
                  <RiDeleteBin5Line onClick={handleDelete(index)}/>
                  <ThreeDotsVert
                    onClick={() => handleMenu(index)}
                  />
                </ThreeDotsMenu>
              ) : (
                <ThreeDots onClick={() => handleMenu(index)}/>
              )}
            </CardTitleChange>
          </CardMainHeader>
          <CardMainContentWrapper>
            <CardMainContentText>{id.postText}</CardMainContentText>
            {id.postPhoto !== '' ? (
              <CardMainContextPhoto src={id.postPhoto} />
            ) : (
              <> </>
            )}

            {id.postVideo !== '' ? (
              <CardMainContentVideo>
                <ReactPlayer url={id.postVideo} width="100%" height="25rem" />
              </CardMainContentVideo>
            ) : (
              <div></div>
            )}
          </CardMainContentWrapper>
          <CardCommentLikeWrapper>
            <LikebuttonWrapper>
              <LikeButton onClick={handleLikes} />
              <LikeText> {likedtimes} Likes </LikeText>
            </LikebuttonWrapper>
          </CardCommentLikeWrapper>
        </UserPostCard>
      ))}
    </>
  );
}

export default PostCard;
