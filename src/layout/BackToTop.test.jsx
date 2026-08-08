import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import BackToTop from './BackToTop.jsx';

describe('BackToTop', () => {
  beforeEach(() => {
    window.scrollTo = vi.fn();
  });

  it('scrolls to the top of the page when clicked', async () => {
    const user = userEvent.setup();
    render(<BackToTop />);

    await user.click(screen.getByRole('link', { hidden: true }));

    expect(window.scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
  });

  it('is hidden until the page is scrolled past the threshold', () => {
    render(<BackToTop />);
    expect(screen.getByRole('link', { hidden: true })).toHaveStyle({ display: 'none' });
  });
});
