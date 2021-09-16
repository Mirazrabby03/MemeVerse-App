// import React, {useContext, useEffect, useState } from 'react'
// import "./rightbar.css"
// import axiosInstance from "../../axios";
// import { AuthContext } from '../../context/AuthContext';
// import {Add, Remove} from "@material-ui/icons"

// export function Rightbar ({user})  {
//   const PF = process.env.REACT_APP_PUBLIC_FOLDER;
//   const [friends, setFriends] = useState([]);
//   const {user:currentUser} = useContext(AuthContext);
//    const [followed, setFollowed] = useState(false);

//    useEffect(()=>{
//       setFollowed(currentUser.following.includes(user.id))
//     }, [currentUser, user.id])


//   useEffect(()=>{
//     const getFriends = async()=>{
//       try{
//         const friendList = await axiosInstance.get("/users/friends/" +user._id);
//         setFriends(friendList.data);
//       }catch(err){
//         console.log(err);
//       }
//     };
//     getFriends();
//   },[user._id])

//   const handleClick = async() =>{
//     try{
//         if(followed){
//             await axiosInstance.put("/users/" +user._id + "/follow", {userId: currentUser._id})
//         }else{
//             await axiosInstance.put("/users"+ user._id+ "/unfollow", {userId: currentUser._id})
//         }
//     }catch(err){
//         console.log(err)
//     }
//     setFollowed(!followed)
// }
//   return(
//     <>
    
//    {user.username !== currentUser.username &&(
//           <button className="followButton" onClick={handleClick}>
//               {followed ? "Unfollow" : "Follow"}
//               {followed ? <Remove/> : <Add/>}
//               </button>
//       )}
//     <div className="rightbar">
//       <div className="rightbarWrapper">
//         {/* <h4 className="rightbarTitle">Online Friends</h4>
//         <ul className="rightbarFriendlist">
//           <li className="rightbarFriend">
//             <div className="rightbarProfileImgContainer">
//               <img src="assets/person/2.png" alt="" className="rightbarProfileImg" />
//               <span className="rightbarOnline"></span>
//             </div>
//             <span className="rightbarUsername">Shakib</span>
//           </li>
//         </ul> */}
        
//         <h4 className="rightbarTitle">User friends</h4>
//         <div className="rightbarFollowings">
//           {friends.map((friend) => (
            
//               <div className="rightbarFollowing">
//                 <img
//                   src={
//                     friend.profilePicture
//                       ? PF + friend.profilePicture
//                       : PF + "person/noAvatar.png"
//                   }
//                   alt=""
//                   className="rightbarFollowingImg"
//                 />
//                 <span className="rightbarFollowingName">{friend.username}</span>
//               </div>
            
//           ))}
//         </div>
//       </div>
//     </div>
//     </>
//    )
//   }

//   export default Rightbar;



import React from 'react'
import './rightbar.css'


export const Rightbar = (props) => {
  return(
    <div className="rightbar"></div>
   )
  }
export default Rightbar;