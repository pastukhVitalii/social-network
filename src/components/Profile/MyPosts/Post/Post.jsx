import React from "react";
import css from "../../Profile.module.css";

let Post = (props) => {
    return (
        <div className={css.item}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRpllVVc01fT_q0UD6voIKBBw9RXGfxW6Te6hmqWS688PqHG7Ji&usqp=CAU"
                alt="user post"/>
            <div>{props.message}</div>
            <span>{`like  ${props.likeCount}`}</span>
        </div>
    )
}

export default Post;