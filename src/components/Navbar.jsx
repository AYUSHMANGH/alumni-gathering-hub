import React from 'react';
import { Link } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 dark:bg-blue-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">Alumni Tracker</Link>
        <div className="flex items-center space-x-4">
          <ul className="flex space-x-4">
            <li><Link to="/" className="hover:text-blue-200">Home</Link></li>
            <li><Link to="/about" className="hover:text-blue-200">About</Link></li>
            <li><Link to="/contact" className="hover:text-blue-200">Contact</Link></li>
          </ul>
          <DarkModeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
