import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as ActionCreators from './store/actions/actions';

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

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel, faAngellist, faLinkedin } from '@fortawesome/free-solid-svg-icons'

import './App.css';

library.add(faStroopwafel)

class App extends React.Component {

  constructor(props) {
    super(props);
  };

  render() {

    const { dispatch, navIsClear } = this.props;
    const makeNavClear = bindActionCreators(ActionCreators.makeNavClear, dispatch);
    const makeNavWhite = bindActionCreators(ActionCreators.makeNavWhite, dispatch);

    return (
      <Router 
        onUpdate={() => window.scrollTo(0, 0)}
      >
        <div className="App">
          <Navigation
            navIsClear={navIsClear}
            makeNavClear={makeNavClear}
            makeNavWhite={makeNavWhite}
          ></Navigation>
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
        </div>
      </Router>
    )
  }
}

const mapStateToProps = (state) => (
  {
    navIsClear: state.navIsClear
  }
);

export default connect(mapStateToProps)(App);