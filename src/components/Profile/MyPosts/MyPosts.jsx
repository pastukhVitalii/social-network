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
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
	)
}

export default MyPosts;