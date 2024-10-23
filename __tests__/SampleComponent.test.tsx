import { render } from '@testing-library/react';
import SampleComponent from '../components/SampleComponent';

test('renders SampleComponent correctly', () => {
  const { getByText } = render(<SampleComponent />);
  expect(getByText('Sample Text')).toBeInTheDocument();
});
