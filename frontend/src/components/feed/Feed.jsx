import React, { useContext, useEffect, useState } from 'react'
import Post from '../post/Post';
import Share from '../share/Share';
import axios from "axios";
import "./feed.css"
import axiosInstance from '../../axios';
import { AuthContext } from '../../context/AuthContext';
// import { Posts } from '../../dummyData';

export const Feed = (props) => {
  const[posts, setPosts] = useState([])

  const {user} = useContext(AuthContext);

  useEffect(()=>{
    const fetchPosts = async() => {
     const res = await axiosInstance.get("posts/timeline/" + user._id);
    setPosts(res.data.sort((p1, p2)=>{
      return new Date(p2.createdAt) - new Date(p1.createdAt);
    })
    );
    // console.log(res);
    };
    fetchPosts();
  },[user._id]);

  return(
    <div className="feed">
        <div className="feedWrapper">
            <Share/>
            {/* <Post/> */}
          {posts.map((p)=>( 
            <Post key={p._id} post ={p} />
          ))}
        </div>
        </div>
   )
  }

  export default Feed;