import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ProjectGrid from './ProjectGrid.jsx';

const projects = [
  {
    id: 'pr_a',
    thumbnail: '/img/a.jpg',
    name: 'Project A',
    client: 'Client A',
    completion: 'Jan 2024',
    value: 'AED 1 million',
    contact: 'Contact A',
    number: '0500000000',
    images: ['/img/a1.jpg', '/img/a2.jpg', '/img/a3.jpg'],
  },
  {
    id: 'pr_b',
    thumbnail: '/img/b.jpg',
    name: 'Project B',
    client: 'Client B',
    completion: 'Feb 2024',
    value: 'AED 2 million',
    contact: 'Contact B',
    number: '0500000001',
    images: ['/img/b1.jpg'],
  },
];

describe('ProjectGrid', () => {
  it('renders a card for every project', () => {
    render(<ProjectGrid projects={projects} />);
    expect(screen.getByText('Project A')).toBeInTheDocument();
    expect(screen.getByText('Project B')).toBeInTheDocument();
  });

  it('opens the modal with the clicked project details', async () => {
    const user = userEvent.setup();
    render(<ProjectGrid projects={projects} />);

    await user.click(screen.getByText('Project A'));

    expect(screen.getByText('Client A')).toBeInTheDocument();
    expect(screen.getByText('Jan 2024')).toBeInTheDocument();
    expect(screen.getByText('AED 1 million')).toBeInTheDocument();
  });

  it('cycles through images with next/prev, wrapping around', async () => {
    const user = userEvent.setup();
    render(<ProjectGrid projects={projects} />);
    await user.click(screen.getByText('Project A'));

    const image = screen.getByAltText('Project');
    expect(image).toHaveAttribute('src', '/img/a1.jpg');

    await user.click(screen.getByRole('button', { name: 'Next image' }));
    expect(image).toHaveAttribute('src', '/img/a2.jpg');

    await user.click(screen.getByRole('button', { name: 'Previous image' }));
    expect(image).toHaveAttribute('src', '/img/a1.jpg');

    // wraps around backwards past the first image to the last
    await user.click(screen.getByRole('button', { name: 'Previous image' }));
    expect(image).toHaveAttribute('src', '/img/a3.jpg');
  });

  it('closes the modal when the close button is clicked', async () => {
    const user = userEvent.setup();
    render(<ProjectGrid projects={projects} />);
    await user.click(screen.getByText('Project A'));
    expect(screen.getByText('Project Details')).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: /close/i }));

    expect(screen.queryByText('Project Details')).not.toBeInTheDocument();
  });
});
