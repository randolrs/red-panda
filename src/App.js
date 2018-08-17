import React, { Component } from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

import Home from './components/home/home'
import Resume from './components/resume/resume'
import Contact from './components/contact/contact'
import Navigation from './components/navigation/navigation'
import Footer from './components/footer/footer'
import './App.css';

const App = () => (
  <Router>
    <div className="App">
      <Navigation></Navigation>
      <div className="main-content">
        <Switch>
          <Route path="/resume" component={Resume} />
          <Route path="/contact" component={Contact} />
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
      <Footer></Footer>
    </div>
  </Router>
)

export default App;
