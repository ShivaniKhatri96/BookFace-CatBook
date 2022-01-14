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


function PostCard() {
 
  const [openedEditMenu, setOpenedEditMenu] = useState(false);
 
  const handleDelete = () => {
    
  }

  const handleMenu = (e) => {
    setOpenedEditMenu(!e)
  }

  
  const handleLikes = () => {
    
  }

  
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
                  <RiDeleteBin5Line onClick={handleDelete}/>
                  <ThreeDotsVert
                    onClick={handleMenu}
                  />
                </ThreeDotsMenu>
              ) : (
                <ThreeDots onClick={handleMenu}/>
              )}
            </CardTitleChange>
          </CardMainHeader>
          <CardMainContentWrapper>
            <CardMainContentText></CardMainContentText>
            {/* {id.postPhoto !== '' ? (
              <CardMainContextPhoto src={id.postPhoto} />
            ) : (
              <> </>
            )} */}

            {/* {id.postVideo !== '' ? (
              <CardMainContentVideo>
                <ReactPlayer url={id.postVideo} width="100%" height="25rem" />
              </CardMainContentVideo>
            ) : (
              <div></div>
            )} */}
          </CardMainContentWrapper>
          <CardCommentLikeWrapper>
            <LikebuttonWrapper>
              <LikeButton onClick={handleLikes} />
              {/* <LikeText> {likedtimes} Likes </LikeText> */}
            </LikebuttonWrapper>
          </CardCommentLikeWrapper>
        </UserPostCard>
      
    </>
  );
}

export default PostCard;
