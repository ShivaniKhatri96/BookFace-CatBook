import { createContext, useReducer,  } from 'react';
import userPostsReducer, { USERPOSTS_INITIAL_STATE} from './UserPosts.reducer'
import UserPostsTypes from './UserPosts.types';

export const PostContext = createContext({
    ...USERPOSTS_INITIAL_STATE
});

const UserPostsProvider = ( { children }) => {
    const [store , dispatch] = useReducer( userPostsReducer, USERPOSTS_INITIAL_STATE);
    const { posts } = store;

    const createNewPost = posts => {
        dispatch({
           type: UserPostsTypes.CREATE_POST,
           payload: posts
        })
    }

    const removePost = posts => {
        dispatch({
            type: UserPostsTypes.REMOVE_POST,
            payload: posts
        })
    }
    return <PostContext.Provider value={{
        posts,
        createNewPost,
        removePost
    }}>
        {children}
    </PostContext.Provider>
}

export default UserPostsProvider;