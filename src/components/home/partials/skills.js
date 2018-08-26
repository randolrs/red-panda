import React, { Component} from 'react';
import SkillsData from '../../../data/skills'

class Skills extends Component {    
	render() {
		let skills = SkillsData.map((skillEntry) => {
			return (
				<div class="card">
					<p>{skillEntry.skillName}</p>
					<p>{skillEntry.skillUrl}</p>
				</div>
			);
		}); 
    	return (
			<section className="home-section">
				<div className="home-section__content">
					<header className="home-section__content__header"><span>Skill</span></header>
					<div>
						{skills}
					</div>
				</div>
			</section>
		)
    }
}

export default Skills;