import React from "react";
import css from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

let Profile = () => {
  return (
		<div>
      <div>
        <img src="" alt=""/>
        <div>Description</div>
      </div>
      <div>
      <MyPosts />
      </div>
    </div>
	)
}

export default Profile;