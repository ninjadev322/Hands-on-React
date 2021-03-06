// import React, { Fragment, useState, useEffect } from 'react';
// import React, { Fragment, useEffect } from 'react';
// import React, { Fragment } from 'react';
// import { MOCK_PROJECTS } from './MockProjects';
// import { projectAPI } from './projectAPI';
// import { loadProjects } from '../state/projectActions';
import ProjectList from './ProjectList';
import { useProjects } from './projectHooks';
// import { Project } from './Project';
// import { useSelector, useDispatch } from 'react-redux';
// import ProjectListSkeleton from './ProjectListSkeleton';
import React, { useEffect, useState } from 'react';

function ProjectsPage() {
    // const [projects, setProjects] = useState(MOCK_PROJECTS);
    // const [projects, setProjects] = useState([]);
    // const [loading, setLoading] = useState(false);
    // const [error, setError] = useState(undefined);
    // const loading = useSelector(
    //     (appState) => appState.projectState.loading
    // );
    // const projects = useSelector(
    //     (appState) => appState.projectState.projects
    // );
    // const error = useSelector(
    //     (appState) => appState.projectState.error
    // );
    // const currentPage = useSelector(
    //     (appState) => appState.projectState.page
    // );
    // const dispatch = useDispatch();

    // const {
    //     projects,
    //     loading,
    //     error,
    //     setCurrentPage,
    //     saveProject,
    //     saving,
    //     savingError,
    // } = useProjects();
        
    const {
        data,
        isLoading,
        error,
        isError,
        isFetching,
        page,
        setPage,
        isPreviousData,
    } = useProjects();

    // Approach 1: using promise then
//  useEffect(() => {
//    setLoading(true);
//    projectAPI
//      .get(1)
//      .then((data) => {
//        setError(null);
//        setLoading(false);
//        setProjects(data);
//      })
//      .catch((e) => {
//        setLoading(false);
//        setError(e.message);
//      });
//  }, []);

     // Approach 2: using async/await
    // useEffect(() => {
    //     async function loadProjects() {
    //         setLoading(true);
    //         try {
    //             const data = await projectAPI.get(1);
    //             setError(null);
    //             setProjects(data);
    //         } catch (e) {
    //             setError(e.message);
    //         } finally {
    //             setLoading(false);
    //         }
    //     }
    //     loadProjects();
    // }, []);
    // useEffect(() => {
    //     dispatch(loadProjects(1));
    // }, [dispatch]);

    // const saveProject = (project) => {
    //     // console.log("Saving project: ", project);
    //     // let updatedProjects = projects.map((p) => {
    //     //     return p.id === project.id ? project : p;
    //     // });
    //     // setProjects(updatedProjects);
    //     projectAPI
    //         .put(project)
    //         .then((updatedProject) => {
    //             let updatedProjects = projects.map((p) => {
    //                 return p.id === project.id ? new Project(updatedProject) : p;
    //             });
    //             setProjects(updatedProjects);
    //         })
    //             .catch((e) => {
    //                 setError(e.message);
    //             });
    // };
    return (
        // <Fragment>
        //     <h1>Projects</h1>
        //     {saving && <span className="toast">Saving...</span>}
        //     {/* {error && ( */}
        //     {(error || savingError) && (
        //         <div className="row">
        //             <div className="card large error">
        //                 <section>
        //                     <p>
        //                         <span className="icon-alert inverse "></span>
        //                         {/* {error} */}
        //                         {error} {savingError}
        //                     </p>
        //                 </section>
        //             </div>
        //         </div>
        //     )}
        //     {/* <pre>{JSON.stringify(MOCK_PROJECTS, null, ' ')}</pre> */}
        //     {loading && <ProjectListSkeleton />}
        //     <ProjectList
        //         // onSave={saveProject}
        //         // projects={MOCK_PROJECTS}
        //         projects={projects}
        //     />
        //     {loading && (
        //         <div className="center-page">
        //             <span className="spinner primary"></span>
        //             <p>Loading...</p>
        //         </div>
        //     )}
        // </Fragment>
        <>
            <h1>Projects</h1>

            {data ? (
                <>
                    {isFetching && <span className="toast">Refreshing...</span>}
                    <ProjectList projects={data} />
                    <div className="row">
                        <div className="col-sm-4">Current page: {page + 1}</div>
                        <div className='col-sm-4'>
                            <div className='button-group right'>
                                <button
                                    className="button "
                                    onClick={() => setPage((oldPage) => oldPage - 1)}
                                    disabled={page === 0}
                                >
                                    Previous
                                </button>
                                <button
                                    className="button"
                                    onClick={() => {
                                        if (!isPreviousData) {
                                            setPage((oldPage) => oldPage + 1);
                                        }
                                    }}
                                    disabled={data.length != 10}
                                >
                                    Next
                                </button>
                            </div>
                        </div>
                    </div>
                </>
            ) : isLoading ? (
                <div className="center-page">
                    <span className="spinner primary"></span>
                    <p>Loading...</p>
                </div>
            ) : isError && error instanceof Error ? (
                <div className="row">
                    <div className="card large error">
                        <section>
                            <p>
                                <span className="icon-alert inverse "></span>
                                {error.message}
                            </p>
                        </section>
                    </div>
                </div>
            ) : null}
        </>
    );
}

export default ProjectsPage;