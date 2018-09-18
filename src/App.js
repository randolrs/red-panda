import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as ActionCreators from './store/actions/actions';

import { 
  BrowserRouter as Router
} from "react-router-dom";

import Navigation from './components/navigation/navigation'
import Footer from './components/footer/footer'
import Content from './components/content/content'

import './App.css';

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