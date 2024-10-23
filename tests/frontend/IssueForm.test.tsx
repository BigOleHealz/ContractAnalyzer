import { render, screen, fireEvent } from '@testing-library/react';
import IssueForm from '../../src/components/IssueForm';

describe('IssueForm', () => {
  it('renders the form fields', () => {
    render(<IssueForm />);
    expect(screen.getByPlaceholderText('Title')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Description')).toBeInTheDocument();
  });

  it('submits the form successfully', async () => {
    render(<IssueForm />);
    fireEvent.change(screen.getByPlaceholderText('Title'), { target: { value: 'Test Issue' } });
    fireEvent.change(screen.getByPlaceholderText('Description'), { target: { value: 'This is a test issue.' } });
    fireEvent.click(screen.getByText('Submit'));
    expect(await screen.findByText('Issue submitted successfully!')).toBeInTheDocument();
  });

  // Add more tests as needed
});
