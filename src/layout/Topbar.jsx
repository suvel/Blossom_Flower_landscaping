import { contact } from '../data/siteInfo.js';

export default function Topbar() {
  return (
    <div className="container-fluid bg-dark text-light px-0 py-2">
      <div className="row gx-0 d-none d-lg-flex">
        <div className="col-lg-7 px-5 text-start">
          <div className="h-100 d-inline-flex align-items-center me-4">
            <span className="fa fa-phone-alt me-2" />
            <span>{contact.phone}</span>
          </div>
        </div>
        <div className="col-lg-5 px-5 text-end">
          <div className="h-100 d-inline-flex align-items-center">
            <span className="far fa-envelope me-2" />
            <span>{contact.email}</span>
          </div>
          <div className="ms-2 h-100 d-inline-flex align-items-center">
            <a style={{ color: 'white' }} aria-label="Chat on WhatsApp" href={contact.whatsappLink}>
              <i className="fas fa-comment me-1 whatsup_contact_us" style={{ color: '#ffffff' }} />
              <span className="whatsup_contact_us">contact us on whatsapp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
