/*
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";


let store = {
  _state: {
    profilePage: {
      posts: [
        {id: 1, message: 'Hi, there', likeCount: 15},
        {id: 2, message: 'How are you?', likeCount: 7}
      ],
      newPostText: 'it-kamasutra.com'
    },
    dialogsPage: {
      dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Roman'},
        {id: 3, name: 'Mark'},
        {id: 4, name: 'Igor'}
      ],
      messages: [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'Hello!'},
        {id: 3, message: 'Yo'},
        {id: 4, message: ':)'}
      ],
      newMessageBody: ''
    },
    navBar: {
      bestFriends: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Roman'},
        {id: 3, name: 'Mark'}
      ]
    }
  },
  _callSubscriber() {
    console.log('State changed');
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;  // observer
  },

  dispatch(action) { // { type: 'ADD-POST' }
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

    this._callSubscriber(this._state);
  }
}





export default store;
window.store = store;*/
