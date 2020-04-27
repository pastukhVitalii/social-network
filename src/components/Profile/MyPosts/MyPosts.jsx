import React, {createRef} from "react";
import css from "./MyPosts.module.css";

import Post from "./Post/Post";

import PropTypes from 'prop-types';

let MyPosts = (props) => {

  let newInputValue = () => {
    let inputValue = textAreaRef.current.value;
    props.addPost(inputValue);
    textAreaRef.current.value = '';
  }

  let textAreaRef = React.createRef();
  let postsElement = props.posts.map(p => <Post message={p.message} likesCount={p.likeCount}/>);
  return (
    <div>
      New Post
      <div>
        <textarea ref={textAreaRef}/>
        <button onClick={newInputValue}>Add post</button>
      </div>
      {postsElement}
    </div>
  )
};

export default MyPosts;

MyPosts.propTypes = {
  postsElement: PropTypes.string
};