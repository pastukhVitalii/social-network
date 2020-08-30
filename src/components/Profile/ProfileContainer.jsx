import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, updateStatus, getName, getPhotos} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authorizedUserId;
      if (!userId) {
        this.props.history.push("/login");
      }
    }
    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
    this.props.getName(userId);
    this.props.getPhotos(userId);
  }

  render() {
    // console.log("RENDER PROFILE");
    return (
      <Profile {...this.props}
               profile={this.props.profile}
               status={this.props.status}
               fullName={this.props.fullName}
               photos={this.props.photos}
               updateStatus={this.props.updateStatus}/>
    )
  }
}

let mapStateToProps = (state) => {
  //console.log('mapStateToProps PROFILE')
  return ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    fullName: state.profilePage.fullName,
    photos: state.profilePage.photos,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
  })
}

export default compose(
  connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, getName, getPhotos}),
  withRouter,
)(ProfileContainer);
