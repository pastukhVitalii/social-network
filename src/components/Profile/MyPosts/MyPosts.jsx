import React from "react";
import css from '../Profile.module.css';

import Post from "./Post/Post";

import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../../utils/validators/validators";

const maxLength10 = maxLengthCreator(10);

let AddNewPostForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field name="newPostText" component={Textarea} placeholder={"Post message"}
                   validate={[required, maxLength10]} className={css.textarea}/>
        </div>
        <div>
            <button className={css.btn}>Add post</button>
        </div>
    </form>;
}

let AddNewPostFormRedux = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm);

const MyPosts = React.memo(props => {
    console.log("RENDER");
    let postsElement =
        [...props.posts]
            .reverse()
            .map(p => <Post message={p.message} likeCount={p.likeCount} key={p.id}/>);

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <>
            <div>New Post</div>
            <div className={css.posts}>
                <AddNewPostFormRedux onSubmit={onAddPost}/>
            </div>
            {postsElement}
        </>
    )
});

export default MyPosts;
