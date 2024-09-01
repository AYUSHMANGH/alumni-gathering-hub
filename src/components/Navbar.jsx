import React from 'react';
import { Link } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 dark:bg-blue-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="h-8 w-8 text-white">
            <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="5"/>
            <path d="M30,35 Q50,20 70,35 M25,50 Q50,35 75,50 M30,65 Q50,50 70,65" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round"/>
          </svg>
          <span className="text-2xl font-bold">Alumni Tracker</span>
        </Link>
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
