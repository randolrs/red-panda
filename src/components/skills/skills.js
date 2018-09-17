import React, { Component} from 'react';
import SkillsData from '../../data/skills'
import Skill from './skill'

class Skills extends Component {    
	render() {
		let skills = SkillsData.map((skillEntry) => {
			return (
				<Skill skill={skillEntry}></Skill>
			);
		}); 
    	return (
			<section>
				<div className="centered">
					<h2><span>Skills</span></h2>
					<p className="home-section__content__header--secondary">
						<span>I work primarily with component-based Javascript libraries as well as back-end languages for the purposes of creating REST APIs.</span>
					</p>
					<div class="flex-container">
						{skills}
					</div>
				</div>
			</section>
		)
    }
}

export default Skills;