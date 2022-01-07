import { Main } from "./ProfileCard.style"
import { InputPost, PostMain, ProfilePhotoPost } from "./ProfileMakePost.style"
import { useState } from 'react'

function ProfileMakePost() {

    


    return (
        <Main>
            <PostMain>
                <ProfilePhotoPost />
                <InputPost  className="post-input" type="text" placeholder="What's on your mind ?"/>
            </PostMain>
        </Main>
    )
}

export default ProfileMakePost
