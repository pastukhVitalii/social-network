import React from "react";
import css from "./ProfileInfo/Profileinfo.module.css";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Profileinfo from "./ProfileInfo/Profileinfo";

let Profile = (props) => {
  return (
    <div>
      <Profileinfo profile={props.profile}/>
      <MyPostsContainer store={props.store}/>
    </div>
  )
};

export default Profile;