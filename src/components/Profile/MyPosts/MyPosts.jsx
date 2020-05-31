import React, {createRef} from "react";
import css from "./MyPosts.module.css";

import Post from "./Post/Post";

import PropTypes from 'prop-types';

let MyPosts = (props) => {
  let textAreaRef = React.createRef();
  let postsElement = props.posts.map(p => <Post message={p.message} likesCount={p.likeCount}/>);
  let onAddPost = () => {
    props.addPost();
  }

  let onPostChange = () => {
    let text = textAreaRef.current.value;
    props.updateNewPostText(text);
  }

  return (
    <div>
      New Post
      <div>
        <textarea
          ref={textAreaRef}
          value={props.newPostText}
          onChange={onPostChange}/>
        <button onClick={onAddPost}>Add post</button>
      </div>
      {postsElement}
    </div>
  )
};

export default MyPosts;

MyPosts.propTypes = {
  postsElement: PropTypes.string
};