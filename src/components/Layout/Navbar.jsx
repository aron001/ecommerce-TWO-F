import React from 'react';
import { Link } from 'react-router-dom';
import { navItems } from '../../static/data';
import styles from '../../styles/styles';

const Navbar = ({ active }) => {
  return (
    <div className="hidden lg:flex flex-wrap items-center space-x-4 overflow-x-auto p-4 bg-white shadow-md">
      {navItems && navItems.map((i, index) => (
        <Link 
          to={i.url} 
          key={index} 
          className={`flex-shrink-0 ${active === index + 1 ? "text-[#070707]" : "text-black"} font-medium px-4 py-2 cursor-pointer whitespace-nowrap`}
        >
          {i.title}
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
