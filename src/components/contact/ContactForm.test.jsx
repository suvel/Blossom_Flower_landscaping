import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ContactForm from './ContactForm.jsx';

describe('ContactForm', () => {
  it('has a mailto GET form', () => {
    render(<ContactForm />);
    const form = screen.getByRole('button', { name: /send message/i }).closest('form');
    expect(form).toHaveAttribute('action', 'mailto:info@blossomlandscaping.ae');
    expect(form).toHaveAttribute('method', 'get');
  });

  it('lets the user type a subject', async () => {
    const user = userEvent.setup();
    render(<ContactForm />);

    const subjectInput = screen.getByLabelText(/name, contact_no/i);
    await user.type(subjectInput, 'Jane Doe, 0501234567');

    expect(subjectInput).toHaveValue('Jane Doe, 0501234567');
  });
});
