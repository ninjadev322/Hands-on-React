import React from 'react';
import PropTypes from 'prop-types';
import { Project } from './Project';
import ProjectCard from './ProjectCard';
import ProjectForm from './ProjectForm';

// ProjectList.propTypes = {
//     projects: PropTypes.arrayOf(PropTypes.instanceOf(Project)).isRequired
// }
function ProjectList({ projects }) {
    // return <pre>{JSON.stringify(projects, null, ' ')}</pre>
    return (
        <div className="row">
            {projects.map((project) => (
                <div key={project.id} className="cols-sm">
                    <ProjectCard project={project}></ProjectCard>
                    <ProjectForm />
                </div>
            ))}
        </div>
    );
}

// ProjectList.propTypes = {
//     project: PropTypes.arrayOf(PropTypes.instanceOf(Project)).isRequired,
// };

export default ProjectList;