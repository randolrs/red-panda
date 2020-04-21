import React, {Component}  from 'react';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter
} from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Home from '../home/home'

class Content extends Component {
  render() {
    var currentLocation = this.props.location.pathname
    return (
			<div className="main-content">
        <span>{window.location.key}</span>
				<TransitionGroup>
          <CSSTransition
            key={currentLocation}
            timeout={500}
            classNames="fade"
          >
            <Switch>
              <Route exact path="/" component={Home} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
			</div>
    )
  }
}

export default withRouter(Content);
