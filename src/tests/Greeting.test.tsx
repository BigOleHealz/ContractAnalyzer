import React from 'react';
import { render } from '@testing-library/react';
import Greeting from '../components/Greeting';

describe('Greeting Component', () => {
  it('renders the correct text', () => {
    const { getByText } = render(<Greeting />);
    expect(getByText('heyoo')).toBeInTheDocument();
  });
});
