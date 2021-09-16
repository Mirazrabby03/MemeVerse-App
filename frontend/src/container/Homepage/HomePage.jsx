import React from 'react'
import Feed from '../../components/feed/Feed';

import Navbar from "../../components/navbar/Navbar"
import Rightbar from '../../components/rightbar/Rightbar';
import Sidebar from '../../components/sidebar/Sidebar';
import "./homepage.css"
export const HomePage = (props) => {
  
    return (
      <>
    <Navbar/>
    <div className="homeContainer">
    <Sidebar/>
    <Feed/>
    <Rightbar/>
    
    </div>
   
    </>
      )
   

 }
 
 export default HomePage;