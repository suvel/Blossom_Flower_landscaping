import { useState } from 'react';
import CertificateModal from './CertificateModal.jsx';

export default function AccreditationGrid({ accreditations }) {
  const [selected, setSelected] = useState(null);

  return (
    <div className="container-xxl py-5">
      <div className="container d-grid gap-5">
        {accreditations.map((cert) => (
          <div key={cert.id} className="row g-10 align-items-center justify-content-center">
            <div
              role="button"
              tabIndex={0}
              onClick={() => setSelected(cert)}
              onKeyDown={(event) => event.key === 'Enter' && setSelected(cert)}
              className="col-lg-3 col-md-5 animated fadeInUp"
            >
              <img alt={cert.alt} className="img-fluid rounded" src={cert.image} />
            </div>
            <div
              role="button"
              tabIndex={0}
              onClick={() => setSelected(cert)}
              onKeyDown={(event) => event.key === 'Enter' && setSelected(cert)}
              className="col-lg-6 col-md-7 animated fadeInUp"
            >
              <h1 className="display-3 text-primary mb-0">{cert.title}</h1>
              <h1 className="display-6 mb-4">{cert.subtitle}</h1>
            </div>
          </div>
        ))}
      </div>
      <CertificateModal certificate={selected} onClose={() => setSelected(null)} />
    </div>
  );
}
