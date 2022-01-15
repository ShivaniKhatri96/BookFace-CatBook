import {useState, useEffect } from 'react'
import ProfilePostCard from '../ProfilePageComponents/ProfilePostCard'
import ProfileCard from "../ProfilePageComponents/ProfileCard";
import ProfileMakePost from "../ProfilePageComponents/ProfileMakePost";
import Navbar from "../Navbar";
import Footer from "../Footer";
import axios from 'axios';

const userID = "61de9db14a69b84c1ed6c5fe"

const Profile = () => {

    const [userComms , setUserComms] = useState([])
    

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async () => {
        const result = await axios(
          `http://localhost:5000/comments/${userID}`
        );
        const  justUserComments = result.data.comments
        

        setUserComms(justUserComments)
        },[])

        console.log(userComms)
        
       
      ;
    return (
        <>
        <Navbar />
        <ProfileCard/>
        <ProfileMakePost/>
        <ProfilePostCard userposts={userComms}/>
        <Footer />
        </>
        )
}
export default Profile;