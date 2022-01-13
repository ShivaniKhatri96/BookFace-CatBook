import { CatPostsTitle, SpaTitle4, TitleWrapper,ProfilePostsMain  } from "./ProfilePosts.style"
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostCard from "./PostCard"

import { isEmpty } from "../../Components/Utils";

function ProfilePosts() {

    
    return (
        <ProfilePostsMain >
            <CatPostsTitle>
                <TitleWrapper>
                    <SpaTitle4 > YOUR POSTS </SpaTitle4>
                </TitleWrapper>
            </CatPostsTitle>
           <PostCard />
        </ProfilePostsMain >
    )
}

export default ProfilePosts
