import React from 'react';
import Header from '../Header/Header';
import Description from '../Description';
import Skills from '../Skills';

import style from './App.module.scss'


function App() {
  return (
    <div className={style.app}>
      <Header />
      <Description />
      <Skills />
      
    </div>
  );
}

export default App;
