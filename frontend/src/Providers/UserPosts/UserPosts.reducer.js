import UserPostsTypes from "./UserPosts.types";
import { removeFromArray } from "./UserPosts.utils";






export const USERPOSTS_INITIAL_STATE = {
  posts: [
    {
      postId: 1,
      postText: "catmeow1",
      postPhoto:
        "https://images.pexels.com/photos/10754454/pexels-photo-10754454.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
      postVideo:
        "https://www.youtube.com/watch?v=QH2-TGUlwu4&ab_channel=NyanCat",
      postLiked: 1
    },
    {
      postId: 2,
      postText: "catmeow2",
      postPhoto:
        "https://images.pexels.com/photos/9741092/pexels-photo-9741092.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
      postVideo:
        "https://www.youtube.com/watch?v=RRk4SIeW9f0&ab_channel=SimpleTut",
        postLiked: 2
    },
    {
      postId: 3,
      postText: "catmeow3",
      postPhoto:
        "https://images.pexels.com/photos/8796707/pexels-photo-8796707.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      postVideo: "https://vimeo.com/663853863",
      postLiked: 3
    },
  ],
};

const userPostsReducer = (state, action) => {
  switch (action.type) {
    case UserPostsTypes.CREATE_POST:
      return {
        ...state,
        posts: [action.payload, ...state.posts],
      };
    case UserPostsTypes.REMOVE_POST:
      return {
        ...state,
        posts: removeFromArray(action.payload, state.posts),
      };

    
    default:
      return state;
  }
};

export default userPostsReducer;
