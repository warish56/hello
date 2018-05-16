import React, { Component } from 'react';
import './App.css';
import{Route} from 'react-router-dom'


import List from './item/items';
import Videos from './video/videos';
import Nav from'./navbar/nav';
import Profile from './profile/profile';
import Posts from './posts/posts'
import Extra from './extra/extra'
import User from './task/user'

import {BrowserRouter} from 'react-router-dom';
import Home from './routing/home'
import PProfile from "./routing/profile";
import Login from "./task/login";

class App extends Component {


  render() {


    return (

        <BrowserRouter>
      <div className="App">
          {/*<Route path="/" component={User}/>*/}


          {/*<Route to="/"  component={Home}/>*/}






          <Nav/>
          <div className="container-fluid">
              <div className="row p-2">
                  <div className="col-xl-3 p-3 ">
                      {/*//profile*/}
                      <Profile/>
                  </div>
                  <div className="col-xl-6 p-3 ">
                      {/*//posts*/}
                      <Posts/>
                  </div>
                  <div className=" col-xl-3 p-3 r">

                      <Extra/>

                  </div>

              </div>



          </div>

      </div>
        </BrowserRouter>
    );
  }
}

export default App;
