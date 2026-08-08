import { NavLink } from 'react-router-dom';
import { navLinks, contact } from '../data/siteInfo.js';
import useScrollPosition from '../hooks/useScrollPosition.js';

export default function Navbar() {
  const isSticky = useScrollPosition(300);

  return (
    <nav
      className={`navbar navbar-expand-lg bg-white navbar-light sticky-top p-0${isSticky ? ' shadow-sm' : ''}`}
      style={{ top: isSticky ? '0px' : '-100px' }}
    >
      <NavLink to="/" end className="navbar-brand d-flex align-items-center px-4 px-lg-5">
        <img className="band_logo" src="/asserts/logo/company_logo.png" alt="Blossom Flowers Landscaping logo" />
      </NavLink>
      <button
        type="button"
        className="navbar-toggler me-4"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto p-4 p-lg-0">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) => `nav-item nav-link${isActive ? ' active' : ''}`}
            >
              {link.label}
            </NavLink>
          ))}
          <a href={contact.portfolioPdf} className="nav-item nav-link">
            <img width="25" height="25" src="/asserts/icon/download-icon.svg" alt="" />
            Protfolio
          </a>
          <a className="nav-item nav-link d-lg-none" aria-label="Chat on WhatsApp" href={contact.whatsappLink}>
            <i className="fas fa-comment me-1" />
            contact us on whatsapp
          </a>
        </div>
      </div>
    </nav>
  );
}
