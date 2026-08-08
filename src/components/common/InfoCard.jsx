export default function InfoCard({ image, icon, title, description }) {
  return (
    <div className="service-item rounded d-flex h-100">
      <div className="service-img rounded">
        <img className="img-fluid" src={image} alt="" />
      </div>
      <div className="service-text rounded p-5">
        <div className="btn-square rounded-circle mx-auto mb-3">
          <img className="img-fluid" src={icon} alt="Icon" />
        </div>
        <h4 className="mb-3">{title}</h4>
        <p className="mb-4">{description}</p>
      </div>
    </div>
  );
}
