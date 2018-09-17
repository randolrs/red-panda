import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as ActionCreators from './store/actions/actions';

import { 
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter
} from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { AnimatedSwitch } from 'react-router-transition';

import Header from './components/header/header'

import Home from './components/home/home'
import Resume from './components/resume/resume'
import Projects from './components/projects/projects'
import Contact from './components/contact/contact'
import Navigation from './components/navigation/navigation'
import Footer from './components/footer/footer'

import Content from './components/content/content'

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
          <Header></Header>
    			<Navigation
    				navIsClear={navIsClear}
    				makeNavClear={makeNavClear}
    				makeNavWhite={makeNavWhite}
    			></Navigation>
    			<Content></Content>
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