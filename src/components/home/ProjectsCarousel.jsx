import { useEffect, useRef } from 'react';
import { Carousel } from 'bootstrap';
import { Link } from 'react-router-dom';
import { homeHighlights } from '../../data/projects.js';

export default function ProjectsCarousel() {
  const carouselRef = useRef(null);

  useEffect(() => {
    const instance = new Carousel(carouselRef.current, { ride: 'carousel', interval: 5000 });
    return () => instance.dispose();
  }, []);

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center mx-auto animated fadeInUp" style={{ maxWidth: 500 }}>
          <p className="fs-5 fw-bold text-primary">Our Products</p>
          <h1 className="display-5 mb-5">Projects that we completed</h1>
        </div>
        <div className="row g-5">
          <div className="col-lg-12 animated fadeInUp">
            <div id="home-projects-carousel" ref={carouselRef} className="carousel slide">
              <div className="carousel-inner">
                {homeHighlights.map((item, index) => (
                  <div key={item.id} className={`carousel-item${index === 0 ? ' active' : ''}`}>
                    <div className="row">
                      <div className="col-md-3 animated fadeInUp">
                        <img className="img-fluid rounded" src={item.image} alt="" />
                      </div>
                      <div className="col-md-6 animated fadeInUp">
                        <h4 className="text-primary mt-5">Project Name</h4>
                        <h3 className="mb-5">{item.projectName}</h3>
                        <h4 className="text-primary mt-5">Client</h4>
                        <h3 className="mb-0 mb-2">{item.client}</h3>
                      </div>
                      <div className="col-md-3 animated fadeInUp">
                        <h4 className="text-primary mt-5">Cost</h4>
                        <h3 className="mb-5">{item.cost}</h3>
                        {item.contractor && (
                          <>
                            <h4 className="text-primary mt-5">Contracter</h4>
                            <h3 className="mb-5">{item.contractor}</h3>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#home-projects-carousel"
                data-bs-slide="prev"
              >
                <i className="bi bi-chevron-left" />
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#home-projects-carousel"
                data-bs-slide="next"
              >
                <i className="bi bi-chevron-right" />
              </button>
            </div>
            <br />
            <div className="text-center">
              <Link className="btn btn-primary py-3 px-4" to="/project">
                Explore More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
