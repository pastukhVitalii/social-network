import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import navBarReducer from "./navbar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";

let reducer = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  navBar: navBarReducer,
  usersPage: usersReducer,
  auth: authReducer
})
let store = createStore(reducer);

window.store = store;
export default store;