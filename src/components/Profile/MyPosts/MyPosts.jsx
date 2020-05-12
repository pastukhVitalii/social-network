import React, {createRef} from "react";
import css from "./MyPosts.module.css";

import Post from "./Post/Post";

import PropTypes from 'prop-types';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";

let MyPosts = (props) => {
  let textAreaRef = React.createRef();
  let postsElement = props.posts.map(p => <Post message={p.message} likesCount={p.likeCount}/>);

  let addPost = () => {
    // props.addPost();
    props.dispatch(addPostActionCreator());
  }

  let onPostChange = () => {
    let text = textAreaRef.current.value;
    // props.updateNewPostText(text);
    let action = updateNewPostTextActionCreator(text);
    props.dispatch(action);
  }

  return (
    <div>
      New Post
      <div>
        <textarea
          ref={textAreaRef}
          value={props.newPostText}
          onChange={onPostChange}/>
        <button onClick={addPost}>Add post</button>
      </div>
      {postsElement}
    </div>
  )
};

export default MyPosts;

MyPosts.propTypes = {
  postsElement: PropTypes.string
};