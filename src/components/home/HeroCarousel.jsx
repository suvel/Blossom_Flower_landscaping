import { useEffect, useRef } from 'react';
import { Carousel } from 'bootstrap';

const slides = [
  {
    image: '/asserts/img/cover_image_01.jpg',
    heading: 'Bringing the harmony of nature to your doorstep.',
    colClass: 'col-lg-8',
  },
  {
    image: '/asserts/img/cover_image_02.jpg',
    heading: 'Transforming spaces, one bloom at a time.',
    colClass: 'col-lg-7',
  },
];

export default function HeroCarousel() {
  const carouselRef = useRef(null);

  useEffect(() => {
    const instance = new Carousel(carouselRef.current, { ride: 'carousel' });
    return () => instance.dispose();
  }, []);

  return (
    <div className="container-fluid p-0 animated fadeIn">
      <div id="header-carousel" ref={carouselRef} className="carousel slide">
        <div className="carousel-inner">
          {slides.map((slide, index) => (
            <div key={slide.image} className={`carousel-item${index === 0 ? ' active' : ''}`}>
              <img className="w-100" src={slide.image} alt="" />
              <div className="carousel-caption">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className={slide.colClass}>
                      <h1 className="display-1 text-white mb-5 animated slideInDown">{slide.heading}</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#header-carousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
