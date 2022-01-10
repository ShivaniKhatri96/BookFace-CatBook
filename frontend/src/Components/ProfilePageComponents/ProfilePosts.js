import { CatPostsTitle, SpaTitle4, TitleWrapper } from "./ProfilePosts.style"
import { Main} from "./ProfileCard.style"
import PostCard from "./PostCard"

function CatPosts() {
    return (
        <Main>
            <CatPostsTitle>
                <TitleWrapper>
                    <SpaTitle4 > YOUR POSTS </SpaTitle4>
                </TitleWrapper>
            </CatPostsTitle>
            <PostCard/>
        </Main>
    )
}

export default CatPosts
