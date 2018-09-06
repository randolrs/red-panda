import React, { Component}  from 'react';
import { Link } from "react-router-dom";

class Skill extends Component {    
	constructor(props) {
		super(props);
	};
	render() {
		let skill = this.props.skill;
		return (
    		<div className="skill-container">
    			<div className="skill-container__content">
	    			<div className="front">
	    				{skill.name}
	    			</div>
    				<div className="back">
	    				{skill.description}
	    			</div>
    			</div>
    		</div>
		)
    }
}

export default Skill;