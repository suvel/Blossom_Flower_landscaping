import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from './Navbar.jsx';

function renderNavbar(initialPath = '/') {
  return render(
    <MemoryRouter initialEntries={[initialPath]}>
      <Navbar />
    </MemoryRouter>,
  );
}

describe('Navbar', () => {
  it('renders a link for every page', () => {
    renderNavbar();
    expect(screen.getByRole('link', { name: /^home$/i })).toHaveAttribute('href', '/');
    expect(screen.getByRole('link', { name: /^about$/i })).toHaveAttribute('href', '/about');
    expect(screen.getByRole('link', { name: /^services$/i })).toHaveAttribute('href', '/service');
    expect(screen.getByRole('link', { name: /^accreditation$/i })).toHaveAttribute('href', '/accreditation');
    expect(screen.getByRole('link', { name: /^projects$/i })).toHaveAttribute('href', '/project');
    expect(screen.getByRole('link', { name: /^contact$/i })).toHaveAttribute('href', '/contact');
  });

  it('marks the link matching the current route as active', () => {
    renderNavbar('/service');
    expect(screen.getByRole('link', { name: /^services$/i })).toHaveClass('active');
    expect(screen.getByRole('link', { name: /^home$/i })).not.toHaveClass('active');
  });

  it('renders the WhatsApp and portfolio links', () => {
    renderNavbar();
    const whatsappLinks = screen.getAllByRole('link', { name: /whatsapp/i });
    expect(whatsappLinks.length).toBeGreaterThan(0);
    whatsappLinks.forEach((link) => expect(link).toHaveAttribute('href', 'https://wa.me/026737119'));

    expect(screen.getByRole('link', { name: /protfolio/i })).toHaveAttribute(
      'href',
      '/asserts/pdf/Blossom-portfolio.pdf',
    );
  });
});
