import { useState } from 'react';
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

function PostCard(props) {
  

  const [openedEditMenu, setOpenedEditMenu] = useState(false);


  return (
    <>
      {props.userposts.map((post) => (
        <UserPostCard key={post._id}>
          <CardMainHeader>
            <CardTitleInfos>
              <CardMainHeaderPhoto />
              <CardTitleName> </CardTitleName>
            </CardTitleInfos>
            <CardTitleChange>
              {openedEditMenu ? (
                <ThreeDotsMenu>
                  <RiDeleteBin5Line  />
                  <ThreeDotsVert onClick={(e) => setOpenedEditMenu(!e)} />
                </ThreeDotsMenu>
              ) : (
                <ThreeDots onClick={(e) => setOpenedEditMenu(!e)} />
              )}
            </CardTitleChange>
          </CardMainHeader>
          <CardMainContentWrapper>
            <CardMainContentText>{post.content}</CardMainContentText>
            {post.img_link === '' ? (
              <div></div>
            ) : (
              <CardMainContextPhoto src={post.img_link} />
            )}
            <CardMainContentVideo>  
            {post.video_link === "" ? (
              <div></div>
            ) : (
                <ReactPlayer url={post.video_link} width="auto" height="auto" />
                )}
              </CardMainContentVideo>
          </CardMainContentWrapper>
          <CardCommentLikeWrapper>
            <LikebuttonWrapper>
              <LikeButton  />
              <LikeText> {post.likes} Likes </LikeText>
            </LikebuttonWrapper>
          </CardCommentLikeWrapper>
        </UserPostCard>
      ))}
    </>
  );
}

export default PostCard;
