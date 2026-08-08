import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import ServiceGrid from './ServiceGrid.jsx';
import { services } from '../../data/services.js';

describe('ServiceGrid', () => {
  it('renders a card for every service', () => {
    render(<ServiceGrid services={services} />);
    services.forEach((service) => {
      expect(screen.getByText(service.name)).toBeInTheDocument();
    });
  });
});
