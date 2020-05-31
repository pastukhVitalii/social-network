import React from "react";
import css from "./Profile.module.css";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

let Profile = (props) => {
  return (
		<div>
      <div>
        <img src="" alt=""/>
        <div>Description</div>
      </div>
      <div>
        <MyPostsContainer store={props.store} />
      </div>
    </div>
	)
};

export default Profile;