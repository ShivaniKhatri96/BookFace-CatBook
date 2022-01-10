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


function PostCard({ userProfile }) {
  const [openedEditMenu, setOpenedEditMenu] = useState(false);
  const [likedtimes, setLikedTimes] = useState(0);

  return (
    <UserPostCard>
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
              <ThreeDotsVert onClick={() => setOpenedEditMenu((e) => !e)} />
            </ThreeDotsMenu>
          ) : (
            <ThreeDots onClick={() => setOpenedEditMenu((e) => !e)} />
          )}
        </CardTitleChange>
      </CardMainHeader>
      <CardMainContentWrapper>
        <CardMainContentText>
            Just chilling outside on a sunny day!
        </CardMainContentText>
        <CardMainContextPhoto />
        <CardMainContentVideo />
      </CardMainContentWrapper>
      <CardCommentLikeWrapper>
          <LikebuttonWrapper>
            <LikeButton onClick={() => setLikedTimes((e) => e + 1)}/>
            <LikeText> {likedtimes} Likes </LikeText>
        </LikebuttonWrapper>
      </CardCommentLikeWrapper>
    </UserPostCard>
  );
}

export default PostCard;
