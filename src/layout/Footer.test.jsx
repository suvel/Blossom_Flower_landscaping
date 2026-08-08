import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Footer from './Footer.jsx';
import { footerServices, contact } from '../data/siteInfo.js';

describe('Footer', () => {
  it('lists every service', () => {
    render(<Footer />);
    footerServices.forEach((service) => {
      expect(screen.getByText(service)).toBeInTheDocument();
    });
  });

  it('lists quick links to every page', () => {
    render(<Footer />);
    expect(screen.getByRole('link', { name: 'About Blossom' })).toHaveAttribute('href', '/about');
    expect(screen.getByRole('link', { name: 'Contact Us' })).toHaveAttribute('href', '/contact');
    expect(screen.getByRole('link', { name: 'Our Services' })).toHaveAttribute('href', '/service');
    expect(screen.getByRole('link', { name: 'Accreditation' })).toHaveAttribute('href', '/accreditation');
    expect(screen.getByRole('link', { name: 'Our Projects' })).toHaveAttribute('href', '/project');
  });

  it('renders office contact info', () => {
    render(<Footer />);
    expect(screen.getByText(contact.email)).toBeInTheDocument();
    contact.office.phones.forEach((phone) => {
      expect(screen.getByText(phone)).toBeInTheDocument();
    });
  });
});
