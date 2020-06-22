import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";

import css from './App.module.css';

import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import News from "./components/News/News";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

function App(props) {
  return (
    <BrowserRouter>
      <div className={css.wrap}>
        <HeaderContainer />
        <Navbar />
        {/*<Navbarx state={props.state.navBar}/>*/}
        <div className={css.content}>
          <Route path='/profile/:userId?'
                 render={ () => <ProfileContainer /> }/>
          <Route path='/dialogs' render={() => <DialogsContainer/>}/>
          <Route path='/users'
                 render={ () => <UsersContainer /> }/>
          <Route path='/news' component={News} />
        </div>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
