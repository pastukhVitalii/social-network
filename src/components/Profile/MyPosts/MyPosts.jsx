import React from "react";
import css from "./MyPosts.module.css";
import Post from "./Post/Post";

let MyPosts = () => {
  return (
		<div>
      New Post
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <Post message = 'Hi, there' likesCount = '5'/>
      <Post message = 'How are you?' likesCount = '8'/>
    </div>
	)
}

export default MyPosts;