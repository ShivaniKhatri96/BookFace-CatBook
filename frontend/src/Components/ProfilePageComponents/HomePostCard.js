import React from 'react';
import {
  UserPostCard,
  CardMainHeader,
  CardMainHeaderPhoto,
  CardTitleName,
  CardTitleInfos,
  CardMainContentWrapper,
  CardMainContentText,
  CardMainContextPhoto,
  CardMainContentVideo,
  CardCommentLikeWrapper,
  LikeButton,
  LikebuttonWrapper,
  LikeText,
} from './PostCard.style';
import ReactPlayer from 'react-player';

function PostCard(props) {
  return (
    <>
      {props.comments.map((com) => (
        <UserPostCard key={com._id} >
          <CardMainHeader>
            <CardTitleInfos>
              <CardMainHeaderPhoto />
              <CardTitleName> </CardTitleName>
            </CardTitleInfos>
          </CardMainHeader>
          <CardMainContentWrapper>
            <CardMainContentText>{com.content}</CardMainContentText>
            {com.img_link === '' ? (
              <div height="1rem"></div>
            ) : (
              <CardMainContextPhoto src={com.img_link} />
            )}
            <CardMainContentVideo>
              {com.video_link === '' ? (
                <div></div>
              ) : (
                <ReactPlayer url={com.video_link} width="auto" height="auto" />
              )}
            </CardMainContentVideo>
          </CardMainContentWrapper>
          <CardCommentLikeWrapper>
            <LikebuttonWrapper>
              <LikeButton />
              <LikeText> {com.likes} Likes </LikeText>
            </LikebuttonWrapper>
          </CardCommentLikeWrapper>
        </UserPostCard>
      ))}
    </>
  );
}

export default PostCard;
