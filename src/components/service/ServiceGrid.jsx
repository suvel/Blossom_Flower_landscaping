import InfoCard from '../common/InfoCard.jsx';

export default function ServiceGrid({ services }) {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center mx-auto animated fadeInUp" style={{ maxWidth: 500 }}>
          <p className="fs-5 fw-bold text-primary">
            Let&apos;s grow something beautiful together. Contact us for your landscaping needs!
          </p>
        </div>
        <div className="row g-4">
          {services.map((service) => (
            <div key={service.id} className="col-lg-4 col-md-6 animated fadeInUp">
              <InfoCard image={service.image} icon={service.icon} title={service.name} description={service.description} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
