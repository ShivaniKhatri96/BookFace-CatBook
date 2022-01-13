import { CatPostsTitle, SpaTitle4, TitleWrapper,ProfilePostsMain  } from "./ProfilePosts.style"
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostCard from "./PostCard"
import { getPosts } from "../../actions/post.actions";
import { isEmpty } from "../../Components/Utils";

function ProfilePosts() {

    const [loadPost, setLoadPost] = useState(true);
    const [count, setCount] = useState(5);
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.postReducer);
  
    const loadMore = () => {
      if (window.innerHeight + document.documentElement.scrollTop + 1 > document.scrollingElement.scrollHeight) {
        setLoadPost(true);
      }
    }
  
    useEffect(() => {
      if (loadPost) {
        dispatch(getPosts(count));
        setLoadPost(false);
        setCount(count + 5);
      }
  
      window.addEventListener('scroll', loadMore);
      return () => window.removeEventListener('scroll', loadMore);
    }, [loadPost, dispatch, count]);
    return (
        <ProfilePostsMain >
            <CatPostsTitle>
                <TitleWrapper>
                    <SpaTitle4 > YOUR POSTS </SpaTitle4>
                </TitleWrapper>
            </CatPostsTitle>
            {!isEmpty(posts[0]) &&
          posts.map((post) => {
            return <PostCard post={post} key={post._id} />;
          })}
        </ProfilePostsMain >
    )
}

export default ProfilePosts
