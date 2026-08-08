import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App.jsx';

describe('App routing', () => {
  beforeEach(() => {
    window.history.pushState({}, '', '/');
  });

  it('renders the home page by default', () => {
    render(<App />);
    expect(screen.getByRole('heading', { name: /bringing the harmony of nature/i })).toBeInTheDocument();
  });

  it('navigates to a page when its nav link is clicked', async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByRole('link', { name: /^contact$/i }));

    expect(await screen.findByRole('heading', { name: /^contact us$/i })).toBeInTheDocument();
  });

  it('restores the intended route from a GitHub Pages 404 redirect', async () => {
    window.history.pushState({}, '', '/?redirect=%2Faccreditation');
    render(<App />);

    expect(await screen.findByRole('heading', { name: /^accreditation$/i })).toBeInTheDocument();
  });
});
