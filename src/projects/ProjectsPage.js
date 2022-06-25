import React from 'react';
import { MOCK_PROJECTS } from './MockProjects';
import ProjectList from './ProjectList';


function ProjectsPage() {
    const saveProject = (project) => {
        console.log("Saving project: ", project);
    };
    return (
        <>
            <h1>Projects</h1>
            {/* <pre>{JSON.stringify(MOCK_PROJECTS, null, ' ')}</pre> */}
            <ProjectList
                onSave={saveProject}
                projects={MOCK_PROJECTS}
            />
        </>
    );
}

export default ProjectsPage;