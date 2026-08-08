import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AccreditationGrid from './AccreditationGrid.jsx';

const accreditations = [
  { id: 'cert-a', title: 'Cert A', subtitle: 'Subtitle A', image: '/img/cert-a.jpg', alt: 'Certificate A' },
  { id: 'cert-b', title: 'Cert B', subtitle: 'Subtitle B', image: '/img/cert-b.jpg', alt: 'Certificate B' },
];

describe('AccreditationGrid', () => {
  it('renders every certificate', () => {
    render(<AccreditationGrid accreditations={accreditations} />);
    expect(screen.getByText('Cert A')).toBeInTheDocument();
    expect(screen.getByText('Cert B')).toBeInTheDocument();
  });

  it('opens the modal with the matching certificate image when clicked', async () => {
    const user = userEvent.setup();
    const { container } = render(<AccreditationGrid accreditations={accreditations} />);

    await user.click(screen.getByText('Cert B'));

    expect(container.querySelector('#certificateImage')).toHaveAttribute('src', '/img/cert-b.jpg');
  });

  it('closes the modal', async () => {
    const user = userEvent.setup();
    const { container } = render(<AccreditationGrid accreditations={accreditations} />);
    await user.click(screen.getByText('Cert A'));
    expect(container.querySelector('#certificateImage')).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: /close/i }));

    expect(container.querySelector('#certificateImage')).not.toBeInTheDocument();
  });
});
