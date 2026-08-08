import { useState } from 'react';
import ProjectModal from './ProjectModal.jsx';

export default function ProjectGrid({ projects }) {
  const [selectedId, setSelectedId] = useState(null);
  const selectedProject = projects.find((project) => project.id === selectedId) ?? null;

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center mx-auto animated fadeInUp" style={{ maxWidth: 500 }}>
          <p className="fs-5 fw-bold text-primary">
            Unleash the potential of your outdoor space with our visionary landscaping
          </p>
        </div>
        <div className="row g-4 ">
          {projects.map((project) => (
            <div
              key={project.id}
              className="col-lg-4 col-md-6 animated fadeInUp"
              role="button"
              tabIndex={0}
              onClick={() => setSelectedId(project.id)}
              onKeyDown={(event) => event.key === 'Enter' && setSelectedId(project.id)}
            >
              <div className="portfolio-inner rounded ">
                <img className="img-fluid" src={project.thumbnail} alt="" />
                <div className="portfolio-text">
                  <h4 className="text-white mb-4 p-5">{project.name}</h4>
                  <div className="d-flex">
                    <a className="btn btn-lg-square rounded-circle mx-2">
                      <i className="fa fa-link" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ProjectModal project={selectedProject} onClose={() => setSelectedId(null)} />
    </div>
  );
}
