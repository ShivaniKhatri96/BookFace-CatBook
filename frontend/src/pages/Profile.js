import ProfilePosts from "../Components/ProfilePageComponents/ProfilePosts";
import ProfileCard from "../Components/ProfilePageComponents/ProfileCard";
import ProfileMakePost from "../Components/ProfilePageComponents/ProfileMakePost";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Profile = () => {
    return (
        <>
        <Navbar />
        <ProfileCard/>
        <ProfileMakePost/>
        <ProfilePosts />
        <Footer />
        </>
        )
}
export default Profile;