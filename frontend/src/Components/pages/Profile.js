import { useState, useEffect } from 'react';
import ProfilePostCard from '../ProfilePageComponents/ProfilePostCard';
import ProfileCard from '../ProfilePageComponents/ProfileCard';
import ProfileMakePost from '../ProfilePageComponents/ProfileMakePost';
import Navbar from '../Navbar';
import Footer from '../Footer';
import axios from 'axios';

const userID = '61dec5dc91821f6ecd34227e';

const Profile = () => {
  const [userComms, setUserComms] = useState([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    (async () => {
      const result = await axios(`http://localhost:5000/comments/${userID}`);
      const justUserComments = result.data.comments;
      const sorted = justUserComments.sort(function (a, b) {
        var c = new Date(a.date);
        var d = new Date(b.date);
        return d - c;
      });

      setUserComms(sorted);
    })();
  }, [userComms]);

  return (
    <>
      <Navbar />
      <ProfileCard />
      <ProfileMakePost />
      <ProfilePostCard userposts={userComms} />
      <Footer />
    </>
  );
};
export default Profile;
