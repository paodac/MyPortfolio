import React from 'react';
import miRece from '../assets/projects/mirece.jpeg'
import taskid from '../assets/projects/taskid.jpeg'
import candidates from '../assets/projects/SavedItems.png'

function Projects() {
   const projects=[ {
        id: 1,
        title: 'MiRece',
        image: miRece,
        link: 'https://github.com/Saadia9/Mirece', 
        liveDemo: 'https://saadia9.github.io/Mirece/'
      },
      {
        id: 2,
        title: 'Taskid',
        image: taskid,
        link: 'https://github.com/marioxabel/Family-Task-Manager', 
        liveDemo: 'https://family-task-manager.onrender.com/'
      },
      {
        id: 3,
        title: 'Candidate Search',
        image: candidates,
        link: 'https://github.com/paodac/CandidateSearch', 
        liveDemo: 'https://candidatesearch-cjlk.onrender.com/'
      },
    ];

  return (
    <section id="projects" className="py-5">
    <div className="container">
      <h2 className="text-center mb-4">My Projects</h2>
      <div className="row">
        {projects.map((project) => (
          <div key={project.id} className="col-md-4">
            <div className="card">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={project.image}
                  className="card-img-top"
                  alt={project.title}
                />
              </a>
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <div className="d-flex justify-content-between">
                  <a
                    href={project.link}
                    className="btn btn-secondary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.liveDemo}
                    className="btn custom-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>)}

export default Projects;
