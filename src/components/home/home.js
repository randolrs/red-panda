import React, { Component}  from 'react';
import Hero from './partials/hero'
import About from './partials/about'
import Skills from './partials/skills'

class Home extends Component {    
  
  render() {
    return (
      	<div>
			<Hero></Hero>
			<About></About>
			<Skills></Skills>
		</div>
    );
  }
}

export default Home;