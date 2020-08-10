import React, {createRef} from "react";
import css from "./MyPosts.module.css";

import Post from "./Post/Post";

import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../../utils/validators/validators";

const maxLength10 = maxLengthCreator(10);

let AddNewPostForm = (props) => {
  return <form onSubmit={props.handleSubmit}>
    <div>
      <Field name="newPostText" component={Textarea} placeholder={"Post message"}
             validate={[required, maxLength10]}/>
    </div>
    <div>
      <button>Add post</button>
    </div>
  </form>;
}

let AddNewPostFormRedux = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm);

const MyPosts = React.memo(props => {
  console.log("RENDER");
  let textAreaRef = React.createRef();
  let postsElement =
    [...props.posts]
      .reverse()
      .map(p => <Post message={p.message} likeCount={p.likeCount}/>);

  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  }

  return (
    <div>
      New Post
      <div>
        <AddNewPostFormRedux onSubmit={onAddPost}/>
      </div>
      {postsElement}
    </div>
  )
});

export default MyPosts;
