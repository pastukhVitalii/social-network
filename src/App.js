import React from 'react';
import css from './App.module.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Profile from './components/Profile/Profile';
import Navbar from './components/Navbar/Navbar';


function App() {
  return (
    <div className={css.wrap}>
      <Header />
      <Navbar />
      <Profile />
      <Footer />
    </div>
  );
}

export default App;
