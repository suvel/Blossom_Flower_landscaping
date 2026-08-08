import { useState, useEffect } from 'react';

export default function ProjectModal({ project, onClose }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    setCurrentImageIndex(0);
  }, [project]);

  if (!project) return null;

  const showNextImage = () => setCurrentImageIndex((index) => (index + 1) % project.images.length);
  const showPreviousImage = () =>
    setCurrentImageIndex((index) => (index - 1 + project.images.length) % project.images.length);

  return (
    <>
      <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1" role="dialog" aria-modal="true">
        <div className="modal-dialog modal-dialog-centered modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Project Details</h5>
              <button type="button" className="btn-close" aria-label="Close" onClick={onClose} />
            </div>
            <div className="modal-body">
              <div id="model-body-div">
                <div id="imageContainer" className="d-flex justify-content-center align-items-center py-4">
                  <button type="button" className="btn btn-primary" aria-label="Previous image" onClick={showPreviousImage}>
                    <i className="fa fa-chevron-left" />
                  </button>
                  <img
                    id="projectImage"
                    className="img-fluid"
                    src={project.images[currentImageIndex]}
                    alt="Project"
                  />
                  <button type="button" className="btn btn-primary" aria-label="Next image" onClick={showNextImage}>
                    <i className="fa fa-chevron-right" />
                  </button>
                </div>
                <div>
                  <div id="thumbnailContainer" className="py-5">
                    {project.images.map((image, index) => (
                      <div key={image} className="thumbnail-container">
                        <img
                          src={image}
                          alt={`${project.name} thumbnail ${index + 1}`}
                          onClick={() => setCurrentImageIndex(index)}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div id="projectDetails">
                <h5>{project.name}</h5>
                <p>
                  <strong>Client:</strong> {project.client}
                </p>
                <p>
                  <strong>Completion:</strong> {project.completion}
                </p>
                <p>
                  <strong>Value:</strong> {project.value}
                </p>
                <p>
                  <strong>Contact Name and Designation:</strong> {project.contact}
                </p>
                <p>
                  <strong>Contact Number:</strong> {project.number}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="modal-backdrop fade show" onClick={onClose} />
    </>
  );
}
