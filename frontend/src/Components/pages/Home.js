import HomePostCard from '../ProfilePageComponents/HomePostCard';
import ProfileMakePost from '../ProfilePageComponents/ProfileMakePost';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [allcomms, setAllComms] = useState([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    const result = await axios('http://localhost:5000/comments');

    const justComments = result.data.map((id) => {
      return id.comments;
    });
    const onlyFilled = justComments.filter((a) => a.length !== 0);
    const merged = [].concat.apply([], onlyFilled);

    const sorted = merged.sort(function (a, b) {
      var c = new Date(a.date);
      var d = new Date(b.date);
      return d - c;
    });
    // console.log(merged)
    setAllComms(sorted);
    // const allCommentsPosts = Object.assign({}, merged);
  }, [allcomms]);

  return (
    <>
      {/* <Navbar /> */}
      <ProfileMakePost />
      <HomePostCard comments={allcomms} />
      {/* <Footer /> */}
    </>
  );
};
export default Home;
