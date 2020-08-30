import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const SET_NAME = 'SET_NAME';
const SET_PHOTOS = 'SET_PHOTOS';
const DELETE_POST = 'DELETE_POST';

let initialState = {
  posts: [
    {id: 1, message: 'Hi, there', likeCount: 15},
    {id: 2, message: 'How are you?', likeCount: 7}
  ],
  newPostText: 'it-kamasutra.com',
  profile: null,
  status: "",
  aboutMe: "",
  fullName: "",
  photos: {}
};

const profileReducer = (state = initialState, action) => {

  switch(action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        message: action.newPostText,
        likeCount: 0
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: ''
      };
    }
    case SET_USER_PROFILE: {
      return {...state, profile: action.profile}
    }
    case SET_STATUS: {
      return {
        ...state,
        status: action.status
      }
    }
    case SET_NAME: {
      return {
        ...state,
        fullName: action.fullName
      }
    }
    case SET_PHOTOS: {
      return {
        ...state,
        photos: action.photos
      }
    }
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(p => p.id !== action.postId)}
    default:
      return state;
  }
}


export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText})
export const setUserProfileAC = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatusAC = (status) => ({type: SET_STATUS, status})
export const setNameAC = (fullName) => ({type: SET_NAME, fullName})
export const setPhotosAC = (photos) => ({type: SET_PHOTOS, photos})
export const deletePostAC = (postId) => ({type: DELETE_POST, postId})

// Thunk

export const getUserProfile = (userId) => (dispatch) => {
  usersAPI.getProfile(userId).then(response => {
    dispatch(setUserProfileAC(response.data));
  });
}

export const getStatus = (userId) => (dispatch) => {
  profileAPI.getStatus(userId)
    .then(response => {
      dispatch(setStatusAC(response.data));
    });
}
export const getName = (userId) => (dispatch) => {
  profileAPI.getName(userId)
    .then(response => {
      dispatch(setNameAC(response.data.fullName));
    });
}

export const getPhotos = (userId) => (dispatch) => {
  profileAPI.getPhotos(userId)
    .then(response => {
      dispatch(setPhotosAC(response.data.photos));
    });
}

export const updateStatus = (status) => (dispatch) => {
  profileAPI.updateStatus(status)
    .then(response => {
      if (response.data.resultCode === 0) {
        dispatch(setStatusAC(status));
      }
    });
}


export default profileReducer;