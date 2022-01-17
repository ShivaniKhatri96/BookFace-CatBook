import HomePostCard from '../ProfilePageComponents/HomePostCard';
import ProfileMakePost from '../ProfilePageComponents/ProfileMakePost';

import { useEffect, useState } from 'react';


const Home = () => {
  const [allcomms, setAllComms] = useState([]);
  

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    (async () => {
      const result = await fetch('/comments').then((res) => res.json());
      const justComments = result.map((id) => {
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
      // const allCommentsPosts = Object.assign({}, merged);})
    })();
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
