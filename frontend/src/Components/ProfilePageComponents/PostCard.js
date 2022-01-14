import { useState, useEffect } from "react";
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
import axios from "axios";

const template = [
  {
    userId: "",
    repliedBy: [],
    content: "",
    img_link: "",
    likes: 0,
    _id: "",
    date: "",
  },
];

function PostCard() {
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState()
  const [openedEditMenu, setOpenedEditMenu] = useState(false);
  
  

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `http://localhost:5000/comments/61de9db14a69b84c1ed6c5fe`,
      );
      const username = result.data.login;
      setUser(username)

      const commentatorCom = result.data.comments;
      setPosts(commentatorCom)
    }; 
    fetchData();
  }, [posts]);

  const handleMenu = (e) => {
    setOpenedEditMenu(!e);
  };

  const handleLikes = () => {};

  return (
    <>
      {posts.map((id, index) => (
        <UserPostCard key={id._id}>
          <CardMainHeader>
            <CardTitleInfos>
              <CardMainHeaderPhoto />
              <CardTitleName> {user} </CardTitleName>
            </CardTitleInfos>
            <CardTitleChange>
              {openedEditMenu ? (
                <ThreeDotsMenu>
                  <RiEditFill />
                  <RiDeleteBin5Line />
                  <ThreeDotsVert onClick={handleMenu} />
                </ThreeDotsMenu>
              ) : (
                <ThreeDots onClick={handleMenu} />
              )}
            </CardTitleChange>
          </CardMainHeader>
          <CardMainContentWrapper>
            <CardMainContentText>{id.content}</CardMainContentText>
            {id.img_link !== "" ? (
              <CardMainContextPhoto src={id.img_link} />
            ) : (
              <> </>
            )}

            {id.video_link !== "" ? (
              <CardMainContentVideo>
                <ReactPlayer url={id.video_link} width="100%" height="25rem" />
              </CardMainContentVideo>
            ) : (
              <div></div>
            )}
          </CardMainContentWrapper>
          <CardCommentLikeWrapper>
            <LikebuttonWrapper>
              <LikeButton onClick={handleLikes} />
              <LikeText> {posts.likes} Likes </LikeText>
            </LikebuttonWrapper>
          </CardCommentLikeWrapper>
        </UserPostCard>
      ))}
    </>
  );
}

export default PostCard;
