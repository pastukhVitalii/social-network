import React from 'react';
import {NavLink} from "react-router-dom";
import css from '../Users.module.css';
import userPhoto from '../../../img/profile-avatar-png-4.png';

let User = ({user, followingInProgress, unfollow, follow}) => {
  return (
    <div className={css.user}>
      <span>
        <div>
          <NavLink to={'/profile/' + user.id}>
            <img src={user.photos.small != null ? user.photos.small : userPhoto} className={css.userPhoto} alt='user'/>
          </NavLink>
        </div>
        <div>
        {user.followed
          ? <button className={css.btn} disabled={followingInProgress
            .some(id => id === user.id)}
                    onClick={() => {
                      unfollow(user.id)
                    }}>
            Unfollow</button>
          : <button className={css.btn} disabled={followingInProgress.some(id => id === user.id)}
                    onClick={() => {
                      follow(user.id)
                    }}>Follow</button>}
         </div>
      </span>
      <span>
        <span>
          <div>{user.name}</div>
          <div>{user.status}</div>
        </span>
      </span>
    </div>)
}

export default User;

