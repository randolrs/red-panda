import React, { Component} from 'react';
import SkillsData from '../../../data/skills'
import Skill from '../../skills/skill'

class Skills extends Component {    
	render() {
		let skills = SkillsData.map((skillEntry) => {
			return (
				<Skill skill={skillEntry}></Skill>
			);
		}); 
    	return (
			<section className="home-section">
				<div className="home-section__content centered">
					<header className="home-section__content__header"><span>Skills</span></header>
					<p>
						<span>... modern Javascript ... </span>
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