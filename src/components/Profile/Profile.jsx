import React from "react";
import css from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

let Profile = (props) => {
  return (
		<div>
      <div>
        <img src="" alt=""/>
        <div>Description</div>
      </div>
      <div>
      <MyPosts posts={props.state.posts} addPost={props.addPost}/>
      </div>
    </div>
	)
};

export default Profile;