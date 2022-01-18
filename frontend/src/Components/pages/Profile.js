import React from 'react';
import { useState, useEffect } from 'react';
import ProfilePostCard from '../ProfilePageComponents/ProfilePostCard';
import ProfileCard from '../ProfilePageComponents/ProfileCard';
import ProfileMakePost from '../ProfilePageComponents/ProfileMakePost';
// import Navbar from '../Navbar';
// import Footer from '../Footer';


const userID = "61dec5dc91821f6ecd34227e";

const Profile = () => {
  const [userComms, setUserComms] = useState([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    let isCancelled = false;
    const getUserComms = async () => {
      
      const result = await fetch(`comments/${userID}`).then((res) => res.json());
      const justUserComments = result.comments;
      const sorted = justUserComments.sort(function (a, b) {
        var c = new Date(a.date);
        var d = new Date(b.date);
        return d - c;
      });
      if(!isCancelled) {
        
      }
      setUserComms(sorted);
    };
  
    getUserComms()
    return () => {
      isCancelled = true;
    }
    
  }, [userComms]);



  return (
    <>
      {/* <Navbar /> */}
      <ProfileCard />
      <ProfileMakePost />
      <ProfilePostCard userposts={userComms} />
      {/* <Footer /> */}
    </>
  );
};
export default Profile;
