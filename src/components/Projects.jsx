import React from 'react';
import miRece from '../assets/projects/miRece.png'
import taskid from '../assets/projects/taskid.jpeg'
import blog from '../assets/projects/blog.jpeg'

function Projects() {
   const projects=[ {
        id: 1,
        title: 'MiRece',
        image: miRece,
        link: 'https://saadia9.github.io/Mirece/', 
      },
      {
        id: 2,
        title: 'Taskid',
        image: taskid,
        link: 'https://github.com/marioxabel/Family-Task-Manager', 
      },
      {
        id: 3,
        title: 'My First Blog',
        image: blog,
        link: 'https://github.com/paodac/MyFirstBlog', 
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
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
