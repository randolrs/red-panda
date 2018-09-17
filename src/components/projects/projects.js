import React, { Component}  from 'react';
import ProjectData from '../../data/projects';
import Project from './project';

class Projects extends Component {    
	render() {
		let projects = ProjectData.map((project) => {
			return(
				<Project project={project} key={project.id}></Project>
			);
		});
    	return (
    		<section>
    			<h2 className="centered">Projects</h2>
				{projects}
			</section>
		)
    }
}

export default Projects;