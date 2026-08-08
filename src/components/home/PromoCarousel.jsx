import { useEffect, useRef } from 'react';
import { Carousel } from 'bootstrap';
import { Link } from 'react-router-dom';
import { promoImages } from '../../data/projects.js';

export default function PromoCarousel() {
  const carouselRef = useRef(null);

  useEffect(() => {
    const instance = new Carousel(carouselRef.current, { ride: 'carousel' });
    return () => instance.dispose();
  }, []);

  return (
    <div className="feature_reco container-xxl py-5">
      <div className="container">
        <div className="text-center mx-auto animated fadeInUp" style={{ maxWidth: 500 }}>
          <p className="fs-5 fw-bold text-primary">Proud Partnership</p>
          <h1 className="display-5 mb-5">Featured on the Etihad Rail Project</h1>
        </div>
        <div id="promo-carousel" ref={carouselRef} className="carousel slide">
          <div className="carousel-inner">
            {promoImages.map((image, index) => (
              <div key={image} className={`carousel-item${index === 0 ? ' active' : ''}`}>
                <Link to="/project">
                  <img
                    className="w-100"
                    src={image}
                    alt="Blossom Flowers Landscaping - Etihad Rail Project partnership"
                  />
                </Link>
              </div>
            ))}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#promo-carousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#promo-carousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}
