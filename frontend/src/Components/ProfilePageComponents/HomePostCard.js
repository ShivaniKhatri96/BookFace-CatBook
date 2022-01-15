import { useState } from "react";
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
} from "./PostCard.style";
import ReactPlayer from "react-player";

function PostCard(props) {


  

  const handleLikes = () => {};

  return (
    <>
      {props.comments.map((com) => (
        <UserPostCard key={com._id}>
          <CardMainHeader>
            <CardTitleInfos>
              <CardMainHeaderPhoto />
              <CardTitleName> </CardTitleName>
            </CardTitleInfos>
          </CardMainHeader>
          <CardMainContentWrapper>
            <CardMainContentText>{com.content}</CardMainContentText>
            {com.img_link === "" ? (
              <div>No photo added</div>
            ) : (
              <CardMainContextPhoto src={com.img_link} />
            )}

            {com.video_link === "" ? (
              <div>No video Added</div>
            ) : (
              <CardMainContentVideo>
                <ReactPlayer url={com.video_link} width="100%" height="25rem" />
              </CardMainContentVideo>
            )}
          </CardMainContentWrapper>
          <CardCommentLikeWrapper>
            <LikebuttonWrapper>
              <LikeButton onClick={handleLikes} />
              <LikeText> {com.likes} Likes </LikeText>
            </LikebuttonWrapper>
          </CardCommentLikeWrapper>
        </UserPostCard>
      ))}
    </>
  );
}

export default PostCard;
