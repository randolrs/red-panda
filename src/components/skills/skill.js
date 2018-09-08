import React, { Component}  from 'react';
import { Link } from "react-router-dom";

class Skill extends Component {    
	constructor(props) {
		super(props);
	};
	render() {
		let skill = this.props.skill;
		if(skill.name.length > 12) {
			var smallClass = 'small';
		} else {
			var smallClass = '';
		}
		return (
    		<div className="skill-container centered">
    			<div className="skill-container__content">
	    			<div className="front">
	    				<div className="skill-container__content__img-container">
	    					<img src={skill.img_src}></img>
	    				</div>
	    				<span className={"skill-container__content__title " + smallClass}>{skill.name}</span>
	    			</div>
    				<div className="back">
    					<div className="back__content">
	    					<span>{skill.description}</span>
	    				</div>
	    			</div>
    			</div>
    		</div>
		)
    }
}

export default Skill;