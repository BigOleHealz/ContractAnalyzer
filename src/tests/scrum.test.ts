import { render } from '@testing-library/react';
import SprintDashboard from '../components/SprintDashboard';
import ScrumBoard from '../components/ScrumBoard';
import BacklogPage from '../pages/backlog';

test('renders Sprint Dashboard', () => {
    render(<SprintDashboard />);
    // Add assertions here
});

test('renders Scrum Board', () => {
    render(<ScrumBoard />);
    // Add assertions here
});

test('renders Backlog Page', () => {
    render(<BacklogPage />);
    // Add assertions here
});