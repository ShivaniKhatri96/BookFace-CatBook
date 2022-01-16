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
  console.log(props.userposts);

  const [openedEditMenu, setOpenedEditMenu] = useState(false);

  const handleDelete = () => {};

  const handleMenu = (e) => {
    setOpenedEditMenu(!openedEditMenu);
  };

  const handleLikes = () => {};

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
                  <RiEditFill />
                  <RiDeleteBin5Line onClick={handleDelete} />
                  <ThreeDotsVert onClick={handleMenu} />
                </ThreeDotsMenu>
              ) : (
                <ThreeDots onClick={handleMenu} />
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
              {post.video_link === '' ? (
                <div></div>
              ) : (
                <ReactPlayer
                  url={post.video_link + ' '}
                  width="100%"
                  height="auto"
                />
              )}
            </CardMainContentVideo>
          </CardMainContentWrapper>
          <CardCommentLikeWrapper>
            <LikebuttonWrapper>
              <LikeButton onClick={handleLikes} />
              <LikeText> {post.likes} Likes </LikeText>
            </LikebuttonWrapper>
          </CardCommentLikeWrapper>
        </UserPostCard>
      ))}
    </>
  );
}

export default PostCard;
