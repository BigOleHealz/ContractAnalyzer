import React from 'react';
import { render } from '@testing-library/react';
import TemplateComponent from '../components/TemplateComponent/TemplateComponent';

describe('TemplateComponent', () => {
  it('renders without crashing', () => {
    const { getByText } = render(<TemplateComponent />);
    expect(getByText('Template Component')).toBeInTheDocument();
  });
});
