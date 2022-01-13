import UserPostsTypes from "./UserPosts.types";
import { removeFromArray, getPosts, GET_ALL_POSTS} from "./UserPosts.utils";




export const USERPOSTS_INITIAL_STATE = {};

const userPostsReducer = (state, action) => {
  switch (action.type) {
    case GET_ALL_POSTS:
      return action.payload
    
    default:
      return state;
  }
};

export default userPostsReducer;
