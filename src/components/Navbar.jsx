import React from 'react';
import { Link } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 dark:bg-blue-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <img src="/logo.svg" alt="Alumni Association Logo" className="h-10 w-10 text-white" />
          <span className="text-2xl font-bold">Alumni Association</span>
        </Link>
        <div className="flex items-center space-x-4">
          <ul className="flex space-x-4">
            <li><Link to="/" className="hover:text-blue-200">Home</Link></li>
            <li><Link to="/directory" className="hover:text-blue-200">Directory</Link></li>
            <li><Link to="/jobs" className="hover:text-blue-200">Jobs</Link></li>
            <li><Link to="/events" className="hover:text-blue-200">Events</Link></li>
            <li><Link to="/donate" className="hover:text-blue-200">Donate</Link></li>
          </ul>
          <DarkModeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
