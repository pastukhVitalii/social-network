import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";

import css from './App.module.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Profile from './components/Profile/Profile';
import Navbar from './components/Navbar/Navbar';
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";


function App() {
  return (
    <BrowserRouter>
    <div className={css.wrap}>
      <Header />
      <Navbar />
      <div className={css.content}>
        <Route path='/profile' component = {Profile} />
        <Route  path='/dialogs' component = {Dialogs} />
        <Route path='/news' component={News} />
      </div>
      <Footer />
    </div>
  </BrowserRouter>
  );
}

export default App;
