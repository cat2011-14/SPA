import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from "react-router-dom";
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { tsPropertySignature } from '@babel/types';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
      <Header />
      <Navbar/>
        <div class='app-wrapper-content'>
          <Route path='/dialogs' render={ () => <Dialogs store={props.store}/>}/>
          <Route path='/profile' render={ () => <Profile profilePage = {props.state.profilePage} dispatch={props.dispatch}/>}/>
          <Route path='/news' render={ () => <News/>}/>
          <Route path='/music' render={ () => <Music/>}/>
  <Route path='/settings' render={ () => <Settings/>}/>
        </div>
      </div>
    </BrowserRouter>
  );
}
export default App;
