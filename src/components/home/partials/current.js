import React, {Component} from 'react';
import ProjectData from '../../../data/projects'
import ResumeData from '../../../data/resume'
import Project from '../../projects/project'
import ResumeEntry from '../../resume/resume-entry';

class Current extends Component {
	render () {

		let currentWork = ResumeData.map((resumeEntry) => {
			if(resumeEntry.current) {
				return (
					<ResumeEntry resumeEntry={resumeEntry} key={resumeEntry.id}></ResumeEntry>
				);
			}
		}); 

		let currentProjects = ProjectData.map((project) => {
			if(project.current) {
				return (
					<Project project={project} key={project.id}></Project>
				);
			}
		}); 

		return (
			<section className="home-section centered current red-background">
				<div className="home-section__content">
					<header className="home-section__content__header">
						<span>Right Now</span>
					</header>
					<p className="home-section__content__header--secondary">
						<span>I am currently the lead front-end developer for a digital-native currency (e.g. Bitcoin) company. I am creating responsive, usable front-ends for the next generation of blockchain and cryptocurrency applications.</span>
					</p>
					<section>
						<header>Work</header>
						{ currentWork }
					</section>

					<section>
						<header>Projects</header>
						{ currentProjects }
					</section>
				</div>
			</section>
		)
	}
};

export default Current;