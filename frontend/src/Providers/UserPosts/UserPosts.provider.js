import { createContext, useReducer,  } from 'react';
import userPostsReducer, { USERPOSTS_INITIAL_STATE} from './UserPosts.reducer'
import UserPostsTypes from './UserPosts.types';

export const PostContext = createContext({
    ...USERPOSTS_INITIAL_STATE
});

const UserPostsProvider = ( { children } ) => {
    const [store , dispatch] = useReducer( userPostsReducer, USERPOSTS_INITIAL_STATE);
    const { posts } = store;

    console.log(store)

    const createNewPost = posts => {
        dispatch({
           type: UserPostsTypes.CREATE_POST,
           payload: posts
        })
    }

    const removePost = deletes => {
        dispatch({
            type: UserPostsTypes.REMOVE_POST,
            payload: deletes
        })
    }

    const incrementLikes = likes => {
        dispatch({
            type: UserPostsTypes.INCEREMENT_LIKES,
            payload: likes
        })
    }
    return <PostContext.Provider value={{
        posts,
        createNewPost,
        removePost,
        incrementLikes
    }}>
        {children}
    </PostContext.Provider>
}

export default UserPostsProvider;