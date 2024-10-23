import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/sprints">Sprints</Link></li>
                <li><Link to="/backlog">Backlog</Link></li>
                {/* Add more navigation links as needed */}
            </ul>
        </nav>
    );
};

export default Navbar;