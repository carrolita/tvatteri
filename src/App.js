import React, { Component } from 'react';
import Home from './Home';
import {Route, Redirect, Switch} from 'react-router';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import Navbar from './Navbar';


class App extends Component {
  render(){
    return(
      <>
        <Navbar/>
        <Switch>
          <Route exact path="/home" component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/contact" component={Contact}/>
          <Redirect from="/" to="/home"/>
        </Switch>
        <Footer/>
      </>
    )
  }
}

export default App;
