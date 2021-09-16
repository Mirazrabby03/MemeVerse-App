import React, { useContext } from 'react'
import "./navbar.css"
import {AuthContext} from "../../context/AuthContext";

export const Navbar = (props) => {
  const {user} = useContext(AuthContext);
  const PF = process.env.REACT_PUBLIC_FOLDER;

  return(
    <div className="navbarContainer">
        <div className="navbarLeft">
          
          <span className="logo">MemeVerse</span>
               
        </div>
        {/* <div className="navbarCenter">
          <div className="searchbar">
            <Search/>
            <input placeholder="search anything" className="searchInput" />
          </div>
        </div> */}
        <div className="navbarRight">
          <div className="navbarLinks">
          <span className="navbarLink">Homepage</span>
          <span className="navbarLink">Timeline</span>
          </div>
          {/* <div className="navbarIcons">
          <div className="navarIconItem">
    <Person/>
    <span className="navbarIconBadge">1</span>
          </div>
         
        </div> */}
        <img src={user.profilePicture ? PF + user.profilePicture : "assets/person/noAvatar.png"} alt="" className="navbarImg" />
        </div>
         
    </div>
   )

 }

 export default Navbar;