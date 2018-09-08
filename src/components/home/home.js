import React, { Component}  from 'react';
import Hero from './partials/hero'
import About from './partials/about'
import Skills from './partials/skills'
import Current from './partials/current'
import Headlines from './partials/headlines'

class Home extends Component {    
  
  render() {
    return (
      	<div>
			<Hero></Hero>
			<Headlines></Headlines>
			<About></About>
			<Current></Current>
			<Skills></Skills>
		</div>
    );
  }
}

export default Home;