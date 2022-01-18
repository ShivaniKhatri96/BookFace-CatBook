import React from 'react';
import { useState, useEffect } from 'react';
import ProfilePostCard from '../ProfilePageComponents/ProfilePostCard';
import ProfileCard from '../ProfilePageComponents/ProfileCard';
import ProfileMakePost from '../ProfilePageComponents/ProfileMakePost';
// import Navbar from '../Navbar';
// import Footer from '../Footer';




const Profile = ( {coolDan} ) => {
  const [userComms, setUserComms] = useState([]);
  const [veli, setVeli] = useState(false)

  const userID = `${coolDan}`;
  console.log(userID)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  // useEffect(() => {
  //   let isCancelled = false;
  //   const getUserComms = async () => {
      
  //     const result = await fetch(`comments/${userID}`).then((res) => res.json());
  //     const justUserComments = result.comments;
  //     const sorted = justUserComments.sort(function (a, b) {
  //       var c = new Date(a.date);
  //       var d = new Date(b.date);
  //       return d - c;
  //     });
  //     if(!isCancelled) {
        
  //     }
  //     setUserComms(sorted);
  //   };
  
  //   getUserComms()
  //   return () => {
  //     isCancelled = true;
  //   }
    
  // }, [userComms]);

  useEffect(() => {
    getUserComms()
    // setAli(true)
    
    console.log(veli)
  },[veli])

  const getUserComms = async () => {
      
    const result = await fetch(`comments/${userID}`).then((res) => res.json());
      const justUserComments = result.comments;
      console.log(justUserComments)
      const sorted = justUserComments.sort(function (a, b) {
        var c = new Date(a.date);
        var d = new Date(b.date);
        return d - c;
      });
    setUserComms(sorted);
    
  }



  return (
    <>
      {/* <Navbar /> */}
      <ProfileCard />
      <ProfileMakePost veli={veli} setVeli={setVeli}/>
      <ProfilePostCard userposts={userComms} />
      {/* <Footer /> */}
    </>
  );
};
export default Profile;
