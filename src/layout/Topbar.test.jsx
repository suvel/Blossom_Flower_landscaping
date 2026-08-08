import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Topbar from './Topbar.jsx';
import { contact } from '../data/siteInfo.js';

describe('Topbar', () => {
  it('renders contact phone and email', () => {
    render(<Topbar />);
    expect(screen.getByText(contact.phone)).toBeInTheDocument();
    expect(screen.getByText(contact.email)).toBeInTheDocument();
  });

  it('links to WhatsApp', () => {
    render(<Topbar />);
    expect(screen.getByRole('link', { name: /whatsapp/i })).toHaveAttribute('href', contact.whatsappLink);
  });
});
