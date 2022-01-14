import { useState } from "react";
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
} from "./PostCard.style";
import { RiEditFill, RiDeleteBin5Line } from "react-icons/ri";
import ReactPlayer from "react-player";

function PostCard(props) {
  const comsAll = props.comments;

  

  const [openedEditMenu, setOpenedEditMenu] = useState(false);

  const handleDelete = () => {};

  const handleMenu = (e) => {
    setOpenedEditMenu(!openedEditMenu);
  };

  const handleLikes = () => {};

  return (
    <>
      {props.comments.map((com) => (
        <UserPostCard >
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
