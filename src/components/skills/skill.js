import React, { Component}  from 'react';
import { Link } from "react-router-dom";

class Skill extends Component {    
	constructor(props) {
		super(props);
	};
	render() {
		let skill = this.props.skill;
		return (
    		<div className="skill-container centered">
    			<div className="skill-container__content">
	    			<div className="front">
	    				<div className="skill-container__content__img-container">
	    					<img src={skill.img_src}></img>
	    				</div>
	    				<span>{skill.name}</span>
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