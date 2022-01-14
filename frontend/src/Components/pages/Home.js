import PostCard from "../ProfilePageComponents/PostCard";
import ProfileMakePost from "../ProfilePageComponents/ProfileMakePost";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { useEffect, useState } from "react";
import axios from 'axios'

const Home = () => {
    const [allcomms , setAllComms] = useState(null)

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async () => {
        const result = await axios(
          "http://localhost:5000/comments"
        );
        const  justComments = result.data.map((id) => {
            return id.comments
        })
        const onlyFilled = justComments.filter(a => a.length !== 0)
        const  merged = [].concat.apply([], onlyFilled);
        const allCommentsPosts = Object.assign({}, merged);
        
        setAllComms(allCommentsPosts)
        console.log(allcomms)
        

       
      });

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