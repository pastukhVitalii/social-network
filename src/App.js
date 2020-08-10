import React from 'react';
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import css from './App.module.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import News from "./components/News/News";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import LoginPage from "./components/Login/Login";
import Preloader from "./components/common/Preloader/Preloader";
import {compose} from "redux";
import {connect} from "react-redux";
import {initializeApp} from "./redux/app-reducer";

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader/>
    }
    return (
        <div className={css.wrap}>
          <HeaderContainer/>
          <Navbar/>
          <div className={css.content}>
            <Route path='/profile/:userId?'
                   render={() => <ProfileContainer/>}/>
            <Route path='/dialogs' render={() => <DialogsContainer/>}/>
            <Route path='/users'
                   render={() => <UsersContainer/>}/>
            <Route path='/news' component={News}/>
            <Route path='/login'
                   render={() => <LoginPage/>}/>
          </div>
          <Footer/>
        </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default compose(
  withRouter,
  connect(mapStateToProps, {initializeApp}))(App);
