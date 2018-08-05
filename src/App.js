import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './components/home/home'
import Navigation from './components/navigation/navigation'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation></Navigation>
        <Router>
          <Route exact path="/" component={Home} />
        </Router>
      </div>
    );
  }
}

const routes = [
  // {
  //   path: "/sandwiches",
  //   component: Sandwiches
  // },
  // {
  //   path: "/tacos",
  //   component: Tacos,
  //   routes: [
  //     {
  //       path: "/tacos/bus",
  //       component: Bus
  //     },
  //     {
  //       path: "/tacos/cart",
  //       component: Cart
  //     }
  //   ]
  // }
];

export default App;
