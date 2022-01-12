import PostCard from "../Components/ProfilePageComponents/PostCard";
import ProfileMakePost from "../Components/ProfilePageComponents/ProfileMakePost";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

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