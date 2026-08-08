import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ServicesPreview from './ServicesPreview.jsx';
import { featuredServices } from '../../data/services.js';

describe('ServicesPreview', () => {
  it('renders only the featured services', () => {
    render(
      <MemoryRouter>
        <ServicesPreview services={featuredServices} />
      </MemoryRouter>,
    );

    featuredServices.forEach((service) => {
      expect(screen.getByText(service.name)).toBeInTheDocument();
    });
  });

  it('links "Explore More" to the full services page', () => {
    render(
      <MemoryRouter>
        <ServicesPreview services={featuredServices} />
      </MemoryRouter>,
    );

    expect(screen.getByRole('link', { name: /explore more/i })).toHaveAttribute('href', '/service');
  });
});
