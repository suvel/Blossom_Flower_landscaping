import { nurseryPhotos } from '../../data/team.js';

export default function NurserySection() {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center mx-auto animated fadeInUp" style={{ maxWidth: 500 }}>
          <h1 className="display-5 mb-5">Sales Point &amp; Plant Nursery</h1>
          <p className="fs-5 fw-bold text-primary ">
            &quot;Our Dedicated team nurtures healthy plants, ensures timely delivery, with exceptional care and
            commitment.
          </p>
        </div>
        <div className="row g-4">
          {nurseryPhotos.map((photo) => (
            <div key={photo} className="col-lg-4 col-md-6 animated fadeInUp">
              <div className="team-item rounded">
                <img className="img-fluid" src={photo} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
