import { footerServices, contact } from '../data/siteInfo.js';

const quickLinks = [
  { label: 'About Blossom', to: '/about' },
  { label: 'Contact Us', to: '/contact' },
  { label: 'Our Services', to: '/service' },
  { label: 'Accreditation', to: '/accreditation' },
  { label: 'Our Projects', to: '/project' },
];

export default function Footer() {
  return (
    <div className="container-fluid bg-dark text-light footer mt-5 py-5 animated fadeIn">
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-4 col-md-6">
            <h4 className="text-white mb-4">Services</h4>
            {footerServices.map((service) => (
              <p key={service} className="btn btn-link">
                {service}
              </p>
            ))}
          </div>
          <div className="col-lg-4 col-md-12">
            <h4 className="text-white mb-4">Quick Links</h4>
            {quickLinks.map((link) => (
              <a key={link.to} className="btn btn-link" href={link.to}>
                {link.label}
              </a>
            ))}
          </div>
          <div className="col-lg-4 col-md-6">
            <h4 className="text-white mb-4">Our Office</h4>
            <p className="mb-2">
              <i className="fa fa-map-marker-alt me-3" />
              {contact.office.lines.map((line, index) => (
                <span key={line}>
                  {line}
                  {index < contact.office.lines.length - 1 && <br />}
                </span>
              ))}
            </p>
            {contact.office.phones.map((phone, index) => (
              <p key={phone} className="mb-2">
                <i className={`fa ${index === 0 ? 'fa-phone-alt' : 'fa-mobile'} me-3`} />
                {phone}
              </p>
            ))}
            <p className="mb-2">
              <i className="fa fa-envelope me-3" />
              {contact.email}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
