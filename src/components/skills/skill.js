import React, { Component}  from 'react';

class Skill extends Component {    
	render() {
		let skill = this.props.skill;
		let smallClass = null;
		if(skill.name.length > 12) {
			smallClass = 'small';
		} else {
			smallClass = '';
		}
		return (
    		<div className="skill-container centered">
    			<div className="skill-container__content">
	    			<div className="front">
	    				<div className="skill-container__content__img-container">
	    					<img
	    						src={skill.img_src}
	    						alt={skill.name}
	    					></img>
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