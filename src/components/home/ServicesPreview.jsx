import { Link } from 'react-router-dom';
import InfoCard from '../common/InfoCard.jsx';

export default function ServicesPreview({ services }) {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center mx-auto animated fadeInUp" style={{ maxWidth: 500 }}>
          <p className="fs-5 fw-bold text-primary ">Our Services</p>
          <h1 className="display-5 mb-5">Services That We Offer You</h1>
        </div>
        <div className="row g-4">
          {services.map((service) => (
            <div key={service.id} className="col-lg-4 col-md-6 animated fadeInUp">
              <InfoCard image={service.image} icon={service.icon} title={service.name} description={service.description} />
            </div>
          ))}
        </div>
        <br />
        <div className="text-center">
          <Link className="btn btn-primary py-3 px-4" to="/service">
            Explore More
          </Link>
        </div>
      </div>
    </div>
  );
}
