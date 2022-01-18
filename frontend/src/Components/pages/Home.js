import HomePostCard from '../ProfilePageComponents/HomePostCard';
import ProfileMakePost from '../ProfilePageComponents/ProfileMakePost';

import { useEffect, useState } from 'react';
import React from 'react';

const Home = () => {
  const [allcomms, setAllComms] = useState([]);
  const [ali , setAli] = useState(false)
  // useEffect(() => {
  //   let isCancelled = false;
  //   const getAllComms = async () => {
      
  //     const result = await fetch('/comments').then((res) => res.json());
  //     const justComments = result.map((id) => {
  //       return id.comments;
  //     });
  //     const onlyFilled = justComments.filter((a) => a.length !== 0);
  //     const merged = [].concat.apply([], onlyFilled);
  //     const sorted = merged.sort(function (a, b) {
  //       var c = new Date(a.date);
  //       var d = new Date(b.date);
  //       return d - c;
  //     });
  //     if(!isCancelled) {
        
  //     }
  //     setAllComms(sorted);
  //   };
  
  //   getAllComms()
  //   isCancelled = true;
    
  //   console.log("ggg")
  // }, [allcomms]);


  useEffect(() => {
    getAllComms()
    // setAli(true)
    
    console.log(ali)
  }, [ali])


    const getAllComms = async () => {
      
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
      setAllComms(sorted);
      
    }


  return (
    <>
      {/* <Navbar /> */}
      <ProfileMakePost setAli={setAli} ali={ali}/>
      <HomePostCard comments={allcomms} />
      {/* <Footer /> */}
    </>
  );
};
export default Home;
