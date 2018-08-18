import React from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { AnimatedSwitch } from 'react-router-transition';

import Home from './components/home/home'
import Resume from './components/resume/resume'
import Projects from './components/projects/projects'
import Contact from './components/contact/contact'
import Navigation from './components/navigation/navigation'
import Footer from './components/footer/footer'
import './App.css';

const App = () => (
  <Router>
    <div className="App">
      <Navigation></Navigation>
      <div className="main-content">
            <AnimatedSwitch
              atEnter={{ opacity: 0 }}
              atLeave={{ opacity: 0 }}
              atActive={{ opacity: 1 }}
              className="switch-wrapper"
              location={window.location}
            >
              <Route exact path="/" component={Home} />
              <Route path="/projects" component={Projects} />
              <Route path="/resume" component={Resume} />
              <Route path="/contact" component={Contact} />
            </AnimatedSwitch>
      </div>
      <Footer></Footer>
    </div>
  </Router>
)

export default App;
