import PostCard from "../ProfilePageComponents/PostCard";
import ProfileMakePost from "../ProfilePageComponents/ProfileMakePost";
import Navbar from "../Navbar";
import Footer from "../Footer";

const Home = () => {
    return (
        <>
       <Navbar/>
            <ProfileMakePost />
            <PostCard />
        <Footer />
        </>
    )
}
export default Home;