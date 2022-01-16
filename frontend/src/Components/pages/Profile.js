import ProfilePosts from "../ProfilePageComponents/ProfilePosts";
import ProfileCard from "../ProfilePageComponents/ProfileCard";
import ProfileMakePost from "../ProfilePageComponents/ProfileMakePost";
import Navbar from "../Navbar";
import Footer from "../Footer";

const Profile = () => {
    return (
        <>
         <Navbar  />
         <ProfileCard/>
        <ProfileMakePost/>
        <ProfilePosts />
            <Footer />
       
        </>
        )
}
export default Profile;