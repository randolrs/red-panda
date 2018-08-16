import React, { Component}  from 'react';
import Hero from './partials/hero'
import About from './partials/about'

class Home extends Component {    
  
  render() {
    return (
      	<div>
			<Hero></Hero>
			<About></About>
		</div>
    );
  }
}

export default Home;