import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";

import css from './App.module.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Profile from './components/Profile/Profile';
import Navbar from './components/Navbar/Navbar';
import News from "./components/News/News";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";

function App(props) {
  return (
    <BrowserRouter>
      <div className={css.wrap}>
        <Header/>
        <Navbar />
        {/*<Navbarx state={props.state.navBar}/>*/}
        <div className={css.content}>
          <Route path='/profile' render={() => <Profile/>}/>
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
