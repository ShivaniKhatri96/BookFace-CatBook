import { CatPostsTitle, SpaTitle4, TitleWrapper,ProfilePostsMain  } from "./ProfilePosts.style"

import PostCard from "./PostCard"

function ProfilePosts() {
    return (
        <ProfilePostsMain >
            <CatPostsTitle>
                <TitleWrapper>
                    <SpaTitle4 > YOUR POSTS </SpaTitle4>
                </TitleWrapper>
            </CatPostsTitle>
            <PostCard/>
        </ProfilePostsMain >
    )
}

export default ProfilePosts
