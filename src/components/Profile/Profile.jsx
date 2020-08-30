import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Profileinfo from "./ProfileInfo/Profileinfo";
import css from './Profile.module.css'

let Profile = (props) => {
  return (
    <div className={css.content}>
      <Profileinfo profile={props.profile}
                   isOwner={props.isOwner}
                   status={props.status}
                   updateStatus={props.updateStatus}
                   fullName={props.fullName}
                   photos={props.photos}/>
      <MyPostsContainer store={props.store} />
    </div>
  )
};

export default Profile;