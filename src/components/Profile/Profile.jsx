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
        <MyPosts posts={props.profilePage.posts}
                 newPostText={props.profilePage.newPostText}
                 dispatch={props.dispatch} />
      </div>
    </div>
	)
};

export default Profile;