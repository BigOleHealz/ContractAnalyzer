import React from 'react';
import { render } from '@testing-library/react';
import NewFeatureComponent from '../src/components/NewFeatureComponent';

describe('NewFeatureComponent', () => {
    it('renders without crashing', () => {
        const { getByText } = render(<NewFeatureComponent />);
        expect(getByText('New Feature Component')).toBeInTheDocument();
    });
});
