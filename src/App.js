import React from 'react';
// import logo from './logo.svg';
import './App.css';
import ProjectsPage from './projects/ProjectsPage';
import ProjectPage from './projects/ProjectPage';
import { Provider } from 'react-redux';
import { store } from './state';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import {
  // BrowserRouter as Router,
  Routes, Route, NavLink,
  useLocation
} from 'react-router-dom';
import HomePage from './home/HomePage';

function App() {
  let location = useLocation();
  return (
    // <blockquote cite="Benjamin Franklin">
    //   Tell me and I forget, teach me and I may remember, involve me and I learn.
    // </blockquote>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React!!!
    //     </a>
    //   </header>
    // </div>
    // <div className="container">
    //   <ProjectsPage/>
    // </div>
    // <Router>
    // <>
    <Provider store={store}>
      <header className="sticky">
        <span className="logo">
          <img src="/assets/logo-3.svg" alt="logo" width="49" height="99" />
        </span>
        <NavLink to="/"  className="button rounded">
          <span className="icon-home"></span>
          Home
        </NavLink>
        <NavLink to="/projects" className="button rounded">
          Projects
        </NavLink>
      </header>
      <div className="container">
        <TransitionGroup>
          <CSSTransition key={location.key} classNames="fade"  timeout={{ enter: 400, exit: 200 }}>
          {/* <Routes> */}
            <Routes location={location}>
              <Route path="/" element={<HomePage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/projects/:id" element={<ProjectPage />} />
            </Routes>
          </CSSTransition>
        </TransitionGroup>
      </div>
    </Provider>
    // </>

    // </Router>
  );
}

export default App;
