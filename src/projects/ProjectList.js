// import React from 'react';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Project } from './Project';
import ProjectCard from './ProjectCard';
import ProjectForm from './ProjectForm';

// ProjectList.propTypes = {
//     projects: PropTypes.arrayOf(PropTypes.instanceOf(Project)).isRequired
// }
function ProjectList({ projects, onSave }) {
    // return <pre>{JSON.stringify(projects, null, ' ')}</pre>
    const [projectBeingEdited, setProjectBeingEdited] = useState({});
    const handleEdit = (project) => {
        // console.log(project);
        setProjectBeingEdited(project);
    };
    const cancelEditing = () => {
        setProjectBeingEdited({});
    }
    const items = projects.map(project => (
        <div key={project.id} className="cols-sm">
            {/* <ProjectCard
                project={project}
                onEdit={handleEdit}
            />
            <ProjectForm /> */}

            {
                project === projectBeingEdited ? (
                    <ProjectForm 
                        onSave = {onSave}
                        onCancel={cancelEditing}
                    />
                ) : (
                    <ProjectCard
                        project={project}
                        onEdit={handleEdit}
                    />
                )
            }
        </div>
    ));
    return (
        <div className="row">{items}</div>
    );
}

ProjectList.propTypes = {
    project: PropTypes.arrayOf(PropTypes.instanceOf(Project)).isRequired,
    onSave: PropTypes.func.isRequired
};

export default ProjectList;