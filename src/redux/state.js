import {renderEntireTree} from "../render";

let state = {
    profilePage: {
      posts: [
        {id: 1, message: 'Hi, there', likeCount: 15},
        {id: 2, message: 'How are you?', likeCount: 7}
      ]
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
      ]
    },
    navBar: {
      bestFriends: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Roman'},
        {id: 3, name: 'Mark'}
      ]
    }
  }
;
export let addPost = (postText) => {
  let newPost = {
    id: 5, message: postText, likeCount: 23
  }
  state.profilePage.posts.push(newPost);
  renderEntireTree(state);
}

export default state;

