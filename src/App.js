import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";

import css from './App.module.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Profile from './components/Profile/Profile';
import Navbar from './components/Navbar/Navbar';
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";

function App(props) {
  return (
    <BrowserRouter>
      <div className={css.wrap}>
        <Header/>
        <Navbar state={props.state.navBar}/>
        <div className={css.content}>
          <Route path='/profile' render={() => <Profile
            profilePage={props.state.profilePage}
            dispatch={props.dispatch}/>}/>
          <Route path='/dialogs' render={() => <Dialogs
            state={props.state.dialogsPage}
            store={props.store}/>}/>
          <Route path='/news' component={News}/>
        </div>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
